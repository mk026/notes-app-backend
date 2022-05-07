import bcrypt from 'bcryptjs';

import UserService from '../user/user.service';
import generateToken from '../../utils/generateToken';
import IUser from '../user/user.interface';

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
    const token = generateToken({ id: newUser._id });
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
    const token = generateToken({ id: foundUser._id });
    return { message: `Successfuly signed in ${email}`, token };
  }

  async check(id: IUser['_id']) {
    const foundUser = await UserService.getOne(id);
    if (!foundUser) {
      return { message: `User not found` };
    }
    const token = generateToken({ id: foundUser._id });
    return { message: `Successfuly generated new token`, token };
  }
}

export default new AuthService();
