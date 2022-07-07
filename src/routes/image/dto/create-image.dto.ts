import { ObjectId } from 'mongoose';

export default class CreateImageDto {
  readonly userId: ObjectId;
  readonly url: string;
  readonly title: string;
  readonly description: string;
}
