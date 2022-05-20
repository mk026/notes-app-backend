import { ObjectId, Document } from 'mongoose';

export default interface ITodo extends Document {
  userId: ObjectId;
  title: string;
  completed: boolean;
}
