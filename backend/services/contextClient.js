import ContextDev from 'context.dev';
import dotenv from 'dotenv';
dotenv.config();

// Reusable service file for Context.dev API
const contextClient = new ContextDev({
  apiKey: process.env.CONTEXT_API_KEY,
});

export const searchWeb = async (query) => {
  // Log key presence (never log the actual key)
  console.log('CONTEXT_API_KEY set:', !!process.env.CONTEXT_API_KEY);
  
  const response = await contextClient.web.search({
    query,
    markdownOptions: { enabled: true }
  });
  
  console.log('Context.dev raw response keys:', Object.keys(response || {}));
  return response.results || [];
};

export const scrapeUrl = async (url) => {
  try {
    const response = await contextClient.web.webScrapeMarkdown({ url });
    return response.markdown || '';
  } catch (error) {
    console.error(`Context.dev Scrape Error for ${url}:`, error);
    return '';
  }
};

export const getImages = async (url) => {
  try {
    const response = await contextClient.web.webScrapeImages({ url });
    return response.images || [];
  } catch (error) {
    console.error(`Context.dev Image Extraction Error for ${url}:`, error);
    return [];
  }
};

// Add placeholder for crawlSite, extractStructuredData, getBrandData as requested
export const crawlSite = async (url) => {
  // Replace with exact Context.dev endpoint from official docs
  // Example: return contextClient.web.crawlWebsite({ url });
  console.warn('crawlSite is a placeholder. See Context.dev documentation.');
  return [];
};

export const extractStructuredData = async (url, schema) => {
  // Replace with exact Context.dev endpoint from official docs
  console.warn('extractStructuredData is a placeholder. See Context.dev documentation.');
  return {};
};

export const getBrandData = async (domain) => {
  try {
    const response = await contextClient.brand.retrieve({ domain });
    return response.brand || null;
  } catch (error) {
    console.error(`Context.dev Brand Data Error for ${domain}:`, error);
    return null;
  }
};
