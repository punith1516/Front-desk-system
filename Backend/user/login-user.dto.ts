// src/user/dto/login-user.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  username: string='';

  @IsString()
  @IsNotEmpty()
  password: string='';
}
