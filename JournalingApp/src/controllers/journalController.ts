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

export const addJournalEntry = async (req: Request, res: Response) => {
  const { title, content, category } = req.body;
  const userId = (req as any).user.id;

  const query = 'INSERT INTO journal_entries (user_id, title, content, category, date) VALUES (?, ?, ?, ?, CURDATE())';
  const values = [userId, title, content, category];

  pool.query(query, values, (error: any, results: any) => {
    if (error) {
      console.error('Error adding journal entry:', error);
      return res.status(500).json({ error: 'Error adding journal entry' });
    }
    res.status(201).json({ message: 'Journal entry added successfully', entryId: results.insertId });
  });
};

