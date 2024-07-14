import { Request, Response } from 'express';
import pool from '../config';

export const getJournalEntries = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;

  pool.query('SELECT * FROM journal_entries WHERE user_id = ?', [userId], (error, results) => {
    if (error) {
      console.error('Error fetching journal entries:', error);
      return res.status(500).json({ error: 'Error fetching journal entries' });
    }

    res.status(200).json({ entries: results });
  });
};

