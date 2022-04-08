import { Schema, model } from 'mongoose';

import IUser from './user.interface';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<IUser>('User', userSchema);
