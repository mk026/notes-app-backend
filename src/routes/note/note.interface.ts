import { Document, ObjectId } from 'mongoose';

export default interface INote extends Document {
  userId: ObjectId;
  title: string;
  content: string;
}
