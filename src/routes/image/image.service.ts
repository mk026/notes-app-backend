import { ObjectId } from 'mongoose';
import CreateImageDto from './dto/create-image.dto';

import Image from './image.model';

class ImageService {
  async getAll(userId: ObjectId) {
    const images = await Image.find({ userId });
    return images;
  }

  async create(dto: CreateImageDto) {
    const newImage = await Image.create(dto);
    return newImage;
  }

  async update() {}

  async delete() {}
}

export default new ImageService();
