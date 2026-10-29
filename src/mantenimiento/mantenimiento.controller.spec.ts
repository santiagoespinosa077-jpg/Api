import { Test, TestingModule } from '@nestjs/testing';
import { MantenimientoController } from './mantenimiento.controller.js';
import { MantenimientoService } from './mantenimiento.service.js';

describe('MantenimientoController', () => {
  let controller: MantenimientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MantenimientoController],
      providers: [MantenimientoService],
    }).compile();

    controller = module.get<MantenimientoController>(MantenimientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
