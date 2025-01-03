import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QueueSchema } from 'src/queue/queue.schema';
import { QueueService } from './queue.service';
import { QueueController } from './queue.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Queue', schema: QueueSchema }])],
  providers: [QueueService],
  controllers: [QueueController],
})
export class QueueModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Queue } from './queue.entity';
import { QueueService } from './queue.service';
import { QueueController } from './queue.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Queue])],
  providers: [QueueService],
  controllers: [QueueController],
})
export class QueueModule {}
