import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PatientService } from 'src/paitent/patient.service';
import { Patient } from './patient.entity';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post('create')
  async create(@Body() patient: Partial<Patient>): Promise<Patient> {
    return this.patientService.createPatient(patient);
  }

  @Get()
  async findAll(): Promise<Patient[]> {
    return this.patientService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Patient> {
    return this.patientService.findById(id);
  }
}
