import bcrypt from 'bcryptjs';

import User from './user.model';
import IUser from './user.interface';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserDto from './dto/update-user.dto';

class UserService {
  async getOne(id: IUser['_id']) {
    const user = await User.findById(id);
    return user;
  }

  async getAccountInfo(id: IUser['_id']) {
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

  async update(id: IUser['_id'], dto: UpdateUserDto) {
    const updatedUser = await User.findByIdAndUpdate(id, dto, {
      new: true,
    });
    return updatedUser;
  }

  async updatePassword(id: string, oldPassword: string, newPassword: string) {
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

  async delete(id: IUser['_id']) {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  }
}

export default new UserService();
