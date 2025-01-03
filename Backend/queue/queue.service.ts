import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Queue } from './queue.entity';

@Injectable()
export class QueueService {
  constructor(
    @InjectRepository(Queue)
    private queueRepository: Repository<Queue>,
  ) {}

  async addToQueue(queue: Partial<Queue>): Promise<Queue> {
    const queueCount = await this.queueRepository.count();
    queue.queueNumber = queueCount + 1;
    return this.queueRepository.save(queue);
  }

  async getQueue(): Promise<Queue[]> {
    return this.queueRepository.find();
  }
}
