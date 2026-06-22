import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import researchRoutes from './routes/research.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/research', researchRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Context Research Studio Backend Running' });
});

// Debug: check env vars are set (never expose actual values)
app.get('/debug', (req, res) => {
  res.json({
    CONTEXT_API_KEY_SET: !!process.env.CONTEXT_API_KEY,
    CONTEXT_API_KEY_LENGTH: process.env.CONTEXT_API_KEY ? process.env.CONTEXT_API_KEY.length : 0,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
