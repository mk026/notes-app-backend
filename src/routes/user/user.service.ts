import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongoose';

import User from './user.model';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserDto from './dto/update-user.dto';

class UserService {
  async getOne(id: ObjectId) {
    const user = await User.findById(id);
    return user;
  }

  async getAccountInfo(id: ObjectId) {
    const userInfo = await User.findById(id).select('name email').exec();
    return userInfo;
  }

  async getOneByEmail(email: string) {
    const user = await User.findOne({ email });
    return user;
  }

  async create(dto: CreateUserDto) {
    const newUser = await User.create(dto);
    return newUser;
  }

  async update(id: ObjectId, dto: UpdateUserDto) {
    const updatedUser = await User.findByIdAndUpdate(id, dto, {
      new: true,
    });
    return updatedUser;
  }

  async updatePassword(id: ObjectId, oldPassword: string, newPassword: string) {
    const user = await User.findById(id);
    const isValidPassword = bcrypt.compareSync(user!.password, oldPassword);
    if (!isValidPassword) {
      throw new Error('Incorrect password');
    }
    const hashPassword = bcrypt.hashSync(newPassword);
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { password: hashPassword },
      { new: true }
    );
    return updatedUser;
  }

  async delete(id: ObjectId) {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  }
}

export default new UserService();
