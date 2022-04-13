import bcrypt from 'bcryptjs';

import User from '../user/user.model';

class AuthService {
  async signup(user: { name: string; email: string; password: string }) {
    const { name, email, password } = user;
    const hashPassword = bcrypt.hashSync(password);
    await User.create({ name, email, password: hashPassword });
    return { message: `Successfuly signed up ${user.name}` };
  }

  async signin(user: { email: string; password: string }) {
    return { message: `Signin ${user.email}` };
  }
}

export default new AuthService();