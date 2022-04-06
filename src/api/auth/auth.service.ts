class AuthService {
  async signup() {
    return { message: 'Signup' };
  }

  async signin() {
    return { message: 'Signin' };
  }
}

export default new AuthService();
