import { Module } from '@nestjs/common';
import { InmuebleService } from './inmueble.service.js';
import { InmuebleController } from './inmueble.controller.js';

@Module({
  controllers: [InmuebleController],
  providers: [InmuebleService],
})
export class InmuebleModule {}
