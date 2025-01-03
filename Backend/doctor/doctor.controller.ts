import { Controller, Post, Get, Body } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.entity';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post('create')
  async create(@Body() doctor: Partial<Doctor>): Promise<Doctor> {
    return this.doctorService.createDoctor(doctor);
  }

  @Get()
  async findAll(): Promise<Doctor[]> {
    return this.doctorService.findAll();
  }
}
