import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const raw = await fs.readFile(PATH_DB, 'utf-8');
    return raw.trim() ? JSON.parse(raw) : [];
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    console.error('Error reading contacts:', error);
    return [];
  }
};
