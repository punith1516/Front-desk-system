import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn()
  id: number=0;

  @Column()
  name: string='';

  @Column()
  age: number=0;

  @Column()
  gender: string='';

  @Column({ unique: true })
  phone: string='';

  @CreateDateColumn()
  createdAt: Date=;
}
