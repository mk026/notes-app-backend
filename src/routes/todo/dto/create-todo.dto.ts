import { ObjectId } from 'mongoose';

export default class CreateTodoDto {
  constructor(
    public readonly userId: ObjectId,
    public readonly title: string
  ) {}
}
