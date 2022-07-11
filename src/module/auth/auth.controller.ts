import {
  Controller,
  Post,
  // Request,
  Body,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto, SignInDto } from './entity/dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async signinLocal(@Body() data: SignInDto) {
    return this.authService.login(data);
  }

  @Post('/register')
  async singup(@Body() data: SignUpDto) {
    return await this.authService.register(data);
  }
}
