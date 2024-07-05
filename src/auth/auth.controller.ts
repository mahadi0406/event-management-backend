import { Controller, Body, Post, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RecordDto } from './record.dto';
import { UserDto } from '../users/user.dto';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: RecordDto) {
    return this.authService.login(signInDto.email, signInDto.password);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signUp(@Body() userDto: UserDto) {
    try {
      return this.authService.register(userDto);
    } catch (error) {
      // Handle errors appropriately
      return error;
    }

    //
    // return this.authService.register(userDto);
  }
}
