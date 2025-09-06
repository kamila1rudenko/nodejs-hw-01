import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`${number} contacts generated.`);
  } catch (error) {
    console.error('Error generated contacts', error);
  }
};

generateContacts(5);
