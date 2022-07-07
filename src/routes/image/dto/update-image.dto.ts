import { ObjectId } from 'mongoose';

export default class UpdateImageDto {
  readonly _id: ObjectId;
  readonly userId: ObjectId;
  readonly url: string;
  readonly title?: string;
  readonly description?: string;
}
