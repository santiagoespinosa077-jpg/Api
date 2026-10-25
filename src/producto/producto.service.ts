import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';
import {Producto} from './entities/producto.entity.js';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto, 'mariadb-connection')
    private productoRepository: Repository<Producto>
  ) {}


  async create(data: CreateProductoDto){
    const register=this.productoRepository.create(data);
    return await this.productoRepository.save(register);

  }
  async findAll() {
    return await this.productoRepository.find();
  }

  async findOne(id_producto: number) {
    return await this.productoRepository.findBy({id_producto});
  }

  async update(id_producto: number, data: UpdateProductoDto) {
    return await this.productoRepository.update(id_producto,data);
  }

  async remove(id_producto: number) {
    return await this.productoRepository.delete(id_producto);
  }
}
