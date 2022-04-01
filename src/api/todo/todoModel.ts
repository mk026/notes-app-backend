import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

export default model('Todo', todoSchema);
