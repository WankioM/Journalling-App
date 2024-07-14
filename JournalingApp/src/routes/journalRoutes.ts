import { Router } from 'express';
import { getJournalEntries } from '../controllers/journalController';
import { authMiddleware } from '../middleware/authMiddleware';
import { addJournalEntry } from '../controllers/journalController';

const router = Router();

router.get('/entries', authMiddleware, getJournalEntries);
router.post('/add', authMiddleware, addJournalEntry);

export default router;
