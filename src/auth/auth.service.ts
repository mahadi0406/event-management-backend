import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../users/user.dto';
import bcrypt from 'bcrypt';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly JwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };
    const accessToken = await this.JwtService.signAsync(payload);

    return {
      access_token: accessToken,
    };
  }

  async register(userDto: UserDto): Promise<User> {
    const existingUser = this.userService.findByEmail(userDto.email);
    if (!existingUser) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = bcrypt.hash(userDto.password, 10);
    const newUserDto = { ...userDto, password: hashedPassword };

    console.log(newUserDto);
    return this.userService.createUser({
      ...userDto,
      password: hashedPassword,
    });
  }
}
