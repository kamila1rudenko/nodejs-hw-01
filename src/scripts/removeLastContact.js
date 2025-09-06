import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (!Array.isArray(contacts) || contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    const removed = contacts.pop();
    await writeContacts(contacts);

    console.log(
      `Last contact removed: ${removed?.name ?? 'Unnamed'} (id: ${
        removed?.id ?? 'n/a'
      })`,
    );
    console.log(`Contacts left: ${contacts.length}`);
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();
