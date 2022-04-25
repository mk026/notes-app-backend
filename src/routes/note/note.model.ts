import { Schema, model } from 'mongoose';

import INote from './note.interface';

const noteSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<INote>('Note', noteSchema);
