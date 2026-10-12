import { Module } from '@nestjs/common';
import { SensorService } from './sensor.service.js';
import { SensorController } from './sensor.controller.js';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Sensor} from './entities/sensor.entity.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SensorService
    ],"postgres-connection")
  ],
  controllers: [SensorController],
  providers: [SensorService],
})
export class SensorModule {}
