import { ObjectId } from 'mongoose';

import Note from './note.model';
import CreateNoteDto from './dto/create-note.dto';
import UpdateNoteDto from './dto/update-note.dto';

class NoteService {
  async getAll(userId: ObjectId) {
    const notes = await Note.find({ userId });
    return notes;
  }

  async create(dto: CreateNoteDto) {
    const newNote = await Note.create(dto);
    return newNote;
  }

  async update(dto: UpdateNoteDto) {
    const updatedNote = await Note.findByIdAndUpdate(dto._id, dto, {
      new: true,
    });
    return updatedNote;
  }

  async delete(id: string) {
    const deletedNote = await Note.findByIdAndDelete(id);
    return deletedNote;
  }
}

export default new NoteService();
