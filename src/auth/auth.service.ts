import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUser(username);
    if (!user) return null
    const isValidPassword = await bcrypt.compare(pass, user.password);
    if (isValidPassword) {
      return user;
    }
    return null;
  }
  async login(user: any) {
    if (user.message === "Unauthorized")
      return user;
    const payload = { id: user.id, role: user.userType };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
