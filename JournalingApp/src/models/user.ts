import pool from '../config';
import bcrypt from 'bcryptjs';

export type User = {
  id: number;
  username: string;
  password: string;
};

export const createUser = async (username: string, password: string): Promise<User> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  const values = [username, hashedPassword];
  return new Promise((resolve, reject) => {
    pool.query(query, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newUser: User = {
          id: results.insertId,
          username,
          password: hashedPassword,
        };
        resolve(newUser);
      }
    });
  });
};

export const findUserByUsername = async (username: string): Promise<User | null> => {
  const query = 'SELECT * FROM users WHERE username = ?';
  const values = [username];
  return new Promise((resolve, reject) => {
    pool.query(query, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length === 0) {
          resolve(null);
        } else {
          const user: User = {
            id: results[0].id,
            username: results[0].username,
            password: results[0].password,
          };
          resolve(user);
        }
      }
    });
  });
};
