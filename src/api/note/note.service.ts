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

  async update(note: INote) {
    const updatedNote = await Note.findByIdAndUpdate(note._id, note, {
      new: true,
    });
    return updatedNote;
  }

  delete() {}
}

export default new NoteService();
