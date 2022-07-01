import { ObjectId, Document } from 'mongoose';

export default interface IImage extends Document {
  userId: ObjectId;
  url: string;
  title: string;
  description?: string;
}
