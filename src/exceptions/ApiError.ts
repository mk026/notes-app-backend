export default class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }

  static BadRequest(message: string) {
    return new ApiError(400, message);
  }

  static Unauthorized() {
    return new ApiError(401, 'Unauthorized');
  }
}
