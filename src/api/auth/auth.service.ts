class AuthService {
  async signup(user: { name: string; email: string; password: string }) {
    return { message: `Signup ${user.name}` };
  }

  async signin(user: { email: string; password: string }) {
    return { message: `Signin ${user.email}` };
  }
}

export default new AuthService();
