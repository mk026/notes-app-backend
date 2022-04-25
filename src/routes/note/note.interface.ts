import { ObjectId } from 'mongoose';

export default interface INote {
  _id: ObjectId;
  userId: ObjectId;
  title: string;
  content: string;
}
