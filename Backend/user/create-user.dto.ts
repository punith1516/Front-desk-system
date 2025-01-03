// src/user/dto/create-user.dto.ts
import { IsString, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(4, 100)
  username: string='';

  @IsString()
  @IsNotEmpty()
  @Length(6, 255)  // Ensure the password is strong enough
  password: string='';

  @IsString()
  @IsOptional()  // Default value 'staff' if not provided
  role?: string;
}
