import { ObjectId } from 'mongoose';

export default class UpdateTodoDto {
  readonly _id: ObjectId;
  readonly userId: ObjectId;
  readonly title?: string;
  readonly completed?: boolean;
}
