import bcrypt from 'bcryptjs';

import User from './user.model';
import IUser from './user.interface';

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

  async create(user: { name: string; email: string; password: string }) {
    const newUser = await User.create(user);
    return newUser;
  }

  async update(id: IUser['_id'], user: IUser) {
    const updatedUser = await User.findByIdAndUpdate(id, user, {
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
