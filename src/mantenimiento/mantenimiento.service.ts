import { Injectable } from '@nestjs/common';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto.js';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto.js';
import { Mantenimiento } from './entities/mantenimiento.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MantenimientoService {
  constructor(
    @InjectRepository(Mantenimiento, 'mssql-connection')
    private mantenimientoRepository: Repository<Mantenimiento>
  ) {}

  async create(data: CreateMantenimientoDto) {
    const register = this.mantenimientoRepository.create(data);
    return await this.mantenimientoRepository.save(register);
  }

  async findAll() {
    return await this.mantenimientoRepository.find();
  }

  async findOne(id_in: number) {
    return await this.mantenimientoRepository.findOneBy({ id_in });
  }

  async update(id_in: number, data: UpdateMantenimientoDto) {
    return await this.mantenimientoRepository.update(id_in, data);
  }

  async remove(id_in: number) {
    return await this.mantenimientoRepository.delete(id_in);
  }
}