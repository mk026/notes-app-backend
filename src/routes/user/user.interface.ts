import { ObjectId } from 'mongoose';

export default interface IUser {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
}
