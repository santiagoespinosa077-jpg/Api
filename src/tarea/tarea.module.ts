import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller.js';
import { TareaService } from './tarea.service.js';
import {Tarea} from './entities/tarea.entity.js';
import {TypeOrmModule} from '@nestjs/typeorm';



@Module({
  imports:[
    TypeOrmModule.forFeature([
      Tarea
    ],"mssql-connection")
  ],
  controllers: [TareaController],
  providers: [TareaService],
})
export class TareaModule {}
