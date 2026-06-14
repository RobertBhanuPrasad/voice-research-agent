import express from 'express';
import { runResearch } from '../services/researchAgent.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { query } = req.body;
  
  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  // Stream progress events (Server-Sent Events approach can be added here, 
  // but for simplicity with Express we'll send standard JSON for now.
  // The frontend can simulate the loading steps).
  try {
    const report = await runResearch(query);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: 'Research pipeline failed', details: error.message });
  }
});

export default router;
