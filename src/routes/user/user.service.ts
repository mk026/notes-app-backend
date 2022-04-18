import User from './user.model';
import IUser from './user.interface';

class UserService {
  async getOne(id: IUser['_id']) {
    const user = await User.findById(id);
    return user;
  }

  async getOneByEmail(email: string) {
    const user = await User.findOne({ email });
    return user;
  }

  async create(user: { name: string; email: string; password: string }) {
    const newUser = await User.create(user);
    return newUser;
  }

  async update(user: IUser) {
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    return updatedUser;
  }

  async delete(id: IUser['_id']) {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  }
}

export default new UserService();
