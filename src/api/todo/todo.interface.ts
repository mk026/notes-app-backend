import { Document } from 'mongoose';

export default interface ITodo extends Document {
  title: string;
  completed: boolean;
}
