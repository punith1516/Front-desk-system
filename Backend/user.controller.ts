import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Signup endpoint
  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.signUp(createUserDto);
      return { message: 'User created successfully', user };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException('An unknown error occurred', HttpStatus.BAD_REQUEST);
      }
    }
  }

  // Login endpoint
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    try {
      const isValid = await this.userService.login(loginUserDto);
      if (isValid) {
        return { message: 'Login successful' };
      }
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
      } else {
        throw new HttpException('An unknown error occurred', HttpStatus.UNAUTHORIZED);
      }
    }
  }
}
