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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
