import { ObjectId } from 'mongoose';

export default class CreateNoteDto {
  constructor(
    public readonly userId: ObjectId,
    public readonly title: string,
    public readonly content: string
  ) {}
}
