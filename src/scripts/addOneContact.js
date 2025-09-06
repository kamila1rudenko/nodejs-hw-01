import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    const updated = [...contacts, newContact];

    await writeContacts(updated);

    console.log('Added contact:', newContact.id);
    console.log(`Total contacts: ${updated.length}`);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();
