import { ObjectId } from 'mongoose';

import Image from './image.model';

class ImageService {
  async getAll(userId: ObjectId) {
    const images = await Image.find({ userId });
    return images;
  }

  async create() {}

  async update() {}

  async delete() {}
}

export default new ImageService();
