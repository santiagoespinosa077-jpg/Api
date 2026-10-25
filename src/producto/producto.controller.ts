import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe} from '@nestjs/common';
import { ProductoService } from './producto.service.js';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';


@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  create(@Body(new ValidationPipe) createProductoDto: CreateProductoDto) {
    return this.productoService.create(createProductoDto);
  }

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id_producto')
  findOne(@Param('id_producto') id_producto: number) {
    return this.productoService.findOne(id_producto);
  }

  @Patch(':id_producto')
  update(@Param('id_producto') id_producto: number, @Body(new ValidationPipe) updateProductoDto: UpdateProductoDto) {
    return this.productoService.update(id_producto, updateProductoDto);
  }

  @Delete(':id_producto')
  remove(@Param('id_producto') id_producto: number) {
    return this.productoService.remove(id_producto);
  }
}
