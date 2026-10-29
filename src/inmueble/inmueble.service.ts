import { Injectable } from '@nestjs/common';
import { CreateInmuebleDto } from './dto/create-inmueble.dto.js';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto.js';
import {Inmueble} from './entities/inmueble.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InmuebleService {
constructor(
    @InjectRepository(Inmueble,'mssql-connection')
    private inmuebleRepository:Repository<Inmueble>
  ){}

  async create(data: CreateInmuebleDto) {
    const register=this.inmuebleRepository.create(data);
    return await this.inmuebleRepository.save(register);
  }

  async findAll() {
    return await this.inmuebleRepository.find();
  }

  async findOne(id_im: number) {
    return await this.inmuebleRepository.findOneBy({id_im});
  }

  async update(id_im: number, data: UpdateInmuebleDto) {
    return await this.inmuebleRepository.update(id_im,data);
  }

  async remove(id_im: number) {
    return this.inmuebleRepository.delete(id_im);
  }
}
