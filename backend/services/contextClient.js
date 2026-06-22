import dotenv from 'dotenv';
dotenv.config();

// Use direct REST API calls instead of the SDK to avoid constructor-throw
// issues when CONTEXT_API_KEY is read at module-initialization time on Render.
const CONTEXT_API_BASE = 'https://api.context.dev/v1';

const getHeaders = () => {
  const key = process.env.CONTEXT_API_KEY;
  if (!key) throw new Error('CONTEXT_API_KEY is not set in environment variables.');
  return {
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json',
  };
};

export const searchWeb = async (query) => {
  console.log('CONTEXT_API_KEY set:', !!process.env.CONTEXT_API_KEY);

  const res = await fetch(`${CONTEXT_API_BASE}/web/search`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ query, markdownOptions: { enabled: false } }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Context.dev /web/search failed [${res.status}]: ${errText}`);
  }

  const data = await res.json();
  console.log('Context.dev search credits remaining:', data.key_metadata?.credits_remaining);
  return data.results || [];
};

export const scrapeUrl = async (url) => {
  try {
    const res = await fetch(`${CONTEXT_API_BASE}/web/scrape/markdown?url=${encodeURIComponent(url)}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    if (!res.ok) return '';
    const data = await res.json();
    return data.markdown || '';
  } catch (error) {
    console.error(`Context.dev Scrape Error for ${url}:`, error.message);
    return '';
  }
};

export const getImages = async (url) => {
  try {
    const res = await fetch(`${CONTEXT_API_BASE}/web/scrape/images?url=${encodeURIComponent(url)}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.images || [];
  } catch (error) {
    console.error(`Context.dev Image Extraction Error for ${url}:`, error.message);
    return [];
  }
};

export const getBrandData = async (domain) => {
  try {
    const res = await fetch(`${CONTEXT_API_BASE}/brand?domain=${encodeURIComponent(domain)}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.brand || null;
  } catch (error) {
    console.error(`Context.dev Brand Data Error for ${domain}:`, error.message);
    return null;
  }
};
