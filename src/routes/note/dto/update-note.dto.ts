import { ObjectId } from 'mongoose';

export default class UpdateNoteDto {
  readonly _id: ObjectId;
  readonly userId: ObjectId;
  readonly title?: string;
  readonly content?: string;
}
