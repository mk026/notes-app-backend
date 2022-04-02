import { Schema, model } from 'mongoose';

import INote from './note.interface';

const noteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

export default model<INote>('Note', noteSchema);
