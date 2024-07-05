import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../users/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly JwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.JwtService.signAsync(payload),
    };
  }

  async register(userDto: UserDto) {
    const existingUser = await this.userService.findByEmail(userDto.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    return this.userService.createUser(userDto);
  }
}
