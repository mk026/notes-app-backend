import { Schema, model } from 'mongoose';

import IImage from './image.interface';

const imageSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    url: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

export default model<IImage>('Image', imageSchema);
