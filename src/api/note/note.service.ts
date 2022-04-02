import Note from './note.model';

class NoteService {
  async getAll() {
    const notes = await Note.find();
    return notes;
  }

  create() {}

  update() {}

  delete() {}
}

export default new NoteService();
