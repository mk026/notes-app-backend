import { ObjectId } from 'mongoose';

export default class UpdateNoteDto {
  constructor(
    public readonly _id: ObjectId,
    public readonly userId: ObjectId,
    public readonly title?: string,
    public readonly content?: string
  ) {}
}
