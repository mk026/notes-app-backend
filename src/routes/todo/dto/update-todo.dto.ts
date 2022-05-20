import { ObjectId } from 'mongoose';

export default class UpdateTodoDto {
  constructor(
    public readonly _id: ObjectId,
    public readonly userId: ObjectId,
    public readonly title?: string,
    public readonly completed?: boolean
  ) {}
}
