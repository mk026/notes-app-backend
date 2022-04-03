import Note from './note.model';
import INote from './note.interface';

class NoteService {
  async getAll() {
    const notes = await Note.find();
    return notes;
  }

  async create(note: INote) {
    const newNote = await Note.create(note);
    return newNote;
  }

  update() {}

  delete() {}
}

export default new NoteService();
