import { ObjectId } from 'mongoose';

export default interface ITodo {
  _id: ObjectId;
  userId: ObjectId;
  title: string;
  completed: boolean;
}
