const express = require('express');
const cors = require('cors');
import dotenv from 'dotenv';
import { authMiddleware } from './middleware/authMiddleware';
import authRoutes from './routes/authRoutes';
import journalRoutes from './routes/journalRoutes';
import jwt from 'jsonwebtoken';
import pool from './config';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

app.use('/api/journal', journalRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
