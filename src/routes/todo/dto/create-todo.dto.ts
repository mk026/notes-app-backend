import { ObjectId } from 'mongoose';

export default class CreateTodoDto {
  readonly userId: ObjectId;
  readonly title: string;
}
