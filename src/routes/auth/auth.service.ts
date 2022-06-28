import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongoose';

import userService from '../user/user.service';
import generateToken from '../../utils/generateToken';
import CreateUserDto from '../user/dto/create-user.dto';
import SigninUserDto from './dto/signin-user.dto';
import ApiError from '../../exceptions/ApiError';

class AuthService {
  async signup(dto: CreateUserDto) {
    const { name, email, password } = dto;
    const foundUser = await userService.getOneByEmail(email);
    if (foundUser) {
      throw ApiError.BadRequest(`User with email ${email} already exists`);
    }
    const hashPassword = bcrypt.hashSync(password);
    const newUser = await userService.create({
      name,
      email,
      password: hashPassword,
    });
    const token = generateToken({ id: newUser._id });
    const userData = { name: newUser.name, email: newUser.email };
    return { user: userData, token };
  }

  async signin(dto: SigninUserDto) {
    const { email, password } = dto;
    const foundUser = await userService.getOneByEmail(email);
    if (!foundUser) {
      throw ApiError.BadRequest(`Incorrect email or password`);
    }
    const isValidPassword = bcrypt.compareSync(password, foundUser.password);
    if (!isValidPassword) {
      throw ApiError.BadRequest('Incorrect email or password');
    }
    const token = generateToken({ id: foundUser._id });
    const userData = { name: foundUser.name, email: foundUser.email };
    return { user: userData, token };
  }

  async check(id: ObjectId) {
    const foundUser = await userService.getOne(id);
    if (!foundUser) {
      throw ApiError.BadRequest('User not found');
    }
    const token = generateToken({ id: foundUser._id });
    const userData = { name: foundUser.name, email: foundUser.email };
    return { user: userData, token };
  }
}

export default new AuthService();
