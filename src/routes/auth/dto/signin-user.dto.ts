export default class SigninUserDto {
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {}
}
