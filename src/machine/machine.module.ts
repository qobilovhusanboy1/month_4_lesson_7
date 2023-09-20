import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Machine } from './models/machine.model';
import { MachineService } from './machine.service';
import { MachineController } from './machine.comtroller';

@Module({
  imports:[SequelizeModule.forFeature([Machine]) ],
  providers: [MachineService],
  controllers: [MachineController]
})
export class MachineModule {}