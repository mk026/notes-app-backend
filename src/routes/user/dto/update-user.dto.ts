export default class UpdateUserDto {
  readonly name?: string;
  readonly email?: string;
  readonly oldPassword?: string;
  readonly newPassword?: string;
}
