import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../user/user.model';

class AuthService {
  async signup(user: { name: string; email: string; password: string }) {
    const { name, email, password } = user;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return { message: `User with email ${email} already exists` };
    }
    const hashPassword = bcrypt.hashSync(password);
    const newUser = await User.create({ name, email, password: hashPassword });
    const token = jwt.sign(newUser._id, 'secret', { expiresIn: '24h' });
    return { message: `Successfuly signed up ${name}`, token };
  }

  async signin(user: { email: string; password: string }) {
    const { email, password } = user;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return { message: `User with email ${email} not found` };
    }
    const isValidPassword = bcrypt.compareSync(password, foundUser.password);
    if (!isValidPassword) {
      return { message: `Incorrect password` };
    }
    const token = jwt.sign(foundUser._id, 'secret', { expiresIn: '24h' });
    return { message: `Successfuly signed in ${email}`, token };
  }
}

export default new AuthService();
