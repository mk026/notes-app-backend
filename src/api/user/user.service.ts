import User from './user.model';
import IUser from './user.interface';

class UserService {
  async getOne(id: IUser['_id']) {
    const user = await User.findById(id);
    return user;
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
