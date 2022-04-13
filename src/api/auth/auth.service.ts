import bcrypt from 'bcryptjs';

import User from '../user/user.model';

class AuthService {
  async signup(user: { name: string; email: string; password: string }) {
    const { name, email, password } = user;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return { message: `User with email ${email} already exists` };
    }
    const hashPassword = bcrypt.hashSync(password);
    await User.create({ name, email, password: hashPassword });
    return { message: `Successfuly signed up ${name}` };
  }

  async signin(user: { email: string; password: string }) {
    const { email, password } = user;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return { message: `User with email ${email} not found` };
    }
    const isValidPassword = bcrypt.compareSync(password, foundUser.password);
    return { message: `Successfuly signed in ${email}` };
  }
}

export default new AuthService();
