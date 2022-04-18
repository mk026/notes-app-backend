import { Schema, model } from 'mongoose';

import ITodo from './todo.interface';

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default model<ITodo>('Todo', todoSchema);
