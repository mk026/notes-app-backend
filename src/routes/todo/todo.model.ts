import { Schema, model } from 'mongoose';

import ITodo from './todo.interface';

const todoSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default model<ITodo>('Todo', todoSchema);
