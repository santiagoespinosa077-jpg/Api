import { Injectable } from '@nestjs/common';
import { CreateInmuebleDto } from './dto/create-inmueble.dto.js';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto.js';

@Injectable()
export class InmuebleService {
  create(createInmuebleDto: CreateInmuebleDto) {
    return 'This action adds a new inmueble';
  }

  findAll() {
    return `This action returns all inmueble`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inmueble`;
  }

  update(id: number, updateInmuebleDto: UpdateInmuebleDto) {
    return `This action updates a #${id} inmueble`;
  }

  remove(id: number) {
    return `This action removes a #${id} inmueble`;
  }
}
