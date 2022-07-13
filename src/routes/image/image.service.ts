import { ObjectId } from 'mongoose';

import Image from './image.model';
import CreateImageDto from './dto/create-image.dto';
import UpdateImageDto from './dto/update-image.dto';

class ImageService {
  async getAll(userId: ObjectId) {
    const images = await Image.find({ userId });
    return images;
  }

  async create(dto: CreateImageDto) {
    const newImage = await Image.create(dto);
    return newImage;
  }

  async update(dto: UpdateImageDto) {
    const updatedImage = await Image.findByIdAndUpdate(dto._id, dto, {
      new: true,
    });
    return updatedImage;
  }

  async delete() {}
}

export default new ImageService();
