import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { LoginDTO, SignupDTO } from './dtos/auth';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: SignupDTO) {
    return this.authService.signup(body);
  }

  @Post('login')
  async login(@Body() body: LoginDTO) {
    return this.authService.login(body);
  }

  @UseGuards(AuthGuard)
  @Get('check')
  check() {
    return {
      isAuthenticated: true,
      message: 'You are authenticated. Thank you for using Enter The Nest.',
    };
  }
}
