# 🔬 Context Research Studio

A modern, fast, and purely live data-driven AI Research Dashboard powered entirely by [Context.dev](https://context.dev) Web Intelligence APIs. 

![Context Research Studio UI](https://images.unsplash.com/photo-1551288049-bebda4e38f71)

## ❓ Why Context Research Studio?
In a world of hallucinating LLMs and stale data, researchers, students, and analysts need a way to pull **real, structured facts** straight from the source. 

We built Context Research Studio to eliminate the middleman. Instead of asking an AI to guess an answer or summarize outdated training data, this studio dynamically crawls the web *right now*, parses real numbers from live websites, extracts contextual images, and links you directly to the original source. It is designed to be fully autonomous, extremely fast, and 100% transparent about where every statistic comes from.

## 🌟 What is it?
Context Research Studio is a full-stack web application designed for high-end, premium data extraction. 
You can ask it complex queries like *"How many AirPods were sold this year?"* or *"Top smartphone sales in India 2026"*, and it will return a gorgeous Glassmorphism dashboard filled with:

1. **Estimated Answers**: Synthesized directly from live search descriptions.
2. **Key Statistics Grid**: Actual numbers (millions, billions, percentages) extracted using pattern matching from scraped sources.
3. **Source Transparency**: A complete list of URLs, domains, and summaries used to build the report.
4. **Visual Intelligence**: An image gallery displaying pictures scraped directly from the most relevant source page.
5. **Follow-up Pathways**: Suggested queries to dive deeper into the topic.

### ✨ Key Features
- **100% Live Data**: Zero reliance on generative AI hallucinations. Everything is scraped live.
- **Premium UI/UX**: Built with a stunning dark mode, floating aurora backgrounds, neon gradients, and Framer Motion micro-animations.
- **Instant Image Extraction**: Uses the Context.dev image scraping API to pull relevant visual evidence.
- **Responsive Design**: Flawless experience on desktop, tablet, and mobile.

## 🛠 How does it work?

### Architecture & Tech Stack
- **Frontend**: React, Vite, Tailwind CSS v4, Framer Motion, Lucide React
- **Backend**: Node.js, Express
- **Intelligence Layer**: Context.dev SDK

### The Research Pipeline
1. **Discover**: The Express backend receives your query and fires a request to Context.dev's `client.web.search` API.
2. **Scrape & Aggregate**: Context.dev returns rich markdown, titles, and descriptions from the top 5 most relevant and authoritative websites.
3. **Parse Statistics**: The Node.js engine uses regex pattern matching to scan the semantic descriptions for financial figures, percentages, and unit counts, pairing them instantly with their host domain.
4. **Extract Imagery**: The top-ranked source is sent to Context.dev's `webScrapeImages` endpoint to pull relevant visual context (graphs, photos).
5. **Render**: The React frontend animates the data into a beautiful, easy-to-read dashboard.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- A free API key from [Context.dev](https://context.dev)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/context-research-studio.git
cd context-research-studio
```

### 2. Backend Setup
Navigate to the backend directory, install dependencies, and add your API key.
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=5000
CONTEXT_API_KEY=your_context_dev_key_here
```
Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal window, navigate to the frontend directory, and start Vite.
```bash
cd frontend
npm install
npm run dev
```

### 4. Use the App
Open your browser to `http://localhost:5173`. 
The frontend is pre-configured to proxy API requests to the backend on port `5000`.

---

## 🛡 Disclaimer
This application relies on pattern-matching directly against live web results to ensure absolute avoidance of AI hallucinations. As a result, the extracted statistics are strictly limited to what is publicly available in the search snippets of the sources provided by Context.dev. 

## 📝 License
MIT License
