import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserService from '../user/user.service';
import config from '../../config/config';

const generateToken = (payload: string | object) => {
  const secret = config.server.token.secret;
  const expiresIn = config.server.token.expiresIn;
  return jwt.sign(payload, secret, { expiresIn });
};

class AuthService {
  async signup(user: { name: string; email: string; password: string }) {
    const { name, email, password } = user;
    const foundUser = await UserService.getOneByEmail(email);
    if (foundUser) {
      return { message: `User with email ${email} already exists` };
    }
    const hashPassword = bcrypt.hashSync(password);
    const newUser = await UserService.create({
      name,
      email,
      password: hashPassword,
    });
    const token = generateToken(newUser._id);
    return { message: `Successfuly signed up ${name}`, token };
  }

  async signin(user: { email: string; password: string }) {
    const { email, password } = user;
    const foundUser = await UserService.getOneByEmail(email);
    if (!foundUser) {
      return { message: `User with email ${email} not found` };
    }
    const isValidPassword = bcrypt.compareSync(password, foundUser.password);
    if (!isValidPassword) {
      return { message: `Incorrect password` };
    }
    const token = generateToken(foundUser._id);
    return { message: `Successfuly signed in ${email}`, token };
  }
}

export default new AuthService();
