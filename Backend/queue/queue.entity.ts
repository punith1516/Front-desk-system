import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn } from 'typeorm';
import { Patient } from '../patient/patient.entity';

@Entity('queues')
export class Queue {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patient, { eager: true })
  patient: Patient;

  @Column()
  queueNumber: number;

  @Column({ default: 'waiting' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}
