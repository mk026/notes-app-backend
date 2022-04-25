import Note from './note.model';
import INote from './note.interface';

class NoteService {
  async getAll(userId: INote['userId']) {
    const notes = await Note.find({ userId });
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

  async delete(id: INote['_id']) {
    const deletedNote = await Note.findByIdAndDelete(id);
    return deletedNote;
  }
}

export default new NoteService();
