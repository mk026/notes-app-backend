import { ObjectId } from 'mongoose';

export default class CreateNoteDto {
  readonly userId: ObjectId;
  readonly title: string;
  readonly content: string;
}
