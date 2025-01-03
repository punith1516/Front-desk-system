import { Controller, Post, Get, Body } from '@nestjs/common';
import { QueueService } from './queue.service';

@Controller('queues')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Post('add')
  async add(@Body() queue: Partial<Queue>) {
    return this.queueService.addToQueue(queue);
  }

  @Get()
  async getQueue() {
    return this.queueService.getQueue();
  }
}
