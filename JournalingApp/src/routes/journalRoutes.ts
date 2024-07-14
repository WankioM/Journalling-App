import { Router } from 'express';
import { getJournalEntries } from '../controllers/journalController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.get('/entries', authMiddleware, getJournalEntries);

export default router;
