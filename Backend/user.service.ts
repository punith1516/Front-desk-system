// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Handle user signup
  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, role } = createUserDto;

    // Check if the username already exists
    const existingUser = await this.userRepository.findOne({ where: { username } });
    if (existingUser) {
      throw new Error('Username already exists');
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({
      username,
      password: hashedPassword,
      role: role || 'staff',  // default role is 'staff'
    });

    return await this.userRepository.save(newUser);
  }

  // Handle user login
  async login(loginUserDto: LoginUserDto): Promise<boolean> {
    const { username, password } = loginUserDto;

    // Find user by username
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    return true;  // Return true if login is successful
  }
}
