import bcrypt from 'bcryptjs';

import UserService from '../user/user.service';
import generateToken from '../../utils/generateToken';
import IUser from '../user/user.interface';
import CreateUserDto from './dto/create-user.dto';
import SigninUserDto from './dto/signin-user.dto';

class AuthService {
  async signup(dto: CreateUserDto) {
    const { name, email, password } = dto;
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
    const userData = { name: newUser.name, email: newUser.email };
    return { message: `Successfuly signed up ${name}`, user: userData, token };
  }

  async signin(dto: SigninUserDto) {
    const { email, password } = dto;
    const foundUser = await UserService.getOneByEmail(email);
    if (!foundUser) {
      return { message: `User with email ${email} not found` };
    }
    const isValidPassword = bcrypt.compareSync(password, foundUser.password);
    if (!isValidPassword) {
      return { message: `Incorrect password` };
    }
    const token = generateToken({ id: foundUser._id });
    const userData = { name: foundUser.name, email: foundUser.email };
    return { message: `Successfuly signed in ${email}`, user: userData, token };
  }

  async check(id: IUser['_id']) {
    const foundUser = await UserService.getOne(id);
    if (!foundUser) {
      return { message: `User not found` };
    }
    const token = generateToken({ id: foundUser._id });
    const userData = { name: foundUser.name, email: foundUser.email };
    return {
      message: `Successfuly generated new token`,
      user: userData,
      token,
    };
  }
}

export default new AuthService();
