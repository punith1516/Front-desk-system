import { Schema, Document } from 'mongoose';

export const QueueSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  queueNumber: { type: Number, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export interface Queue extends Document {
  name: string;
  age: number;
  queueNumber: number;
  createdAt: Date;
}
