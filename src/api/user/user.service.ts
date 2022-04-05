import User from './user.model';
import IUser from './user.interface';

class UserService {
  async getOne(id: IUser['_id']) {
    const user = await User.findById(id);
    return user;
  }

  async update() {
    return null;
  }

  async delete() {
    return null;
  }
}

export default new UserService();
