import { Controller, Body, Post, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RecordDto } from './record.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: RecordDto) {
    return this.authService.login(signInDto.email, signInDto.password);
  }
}
