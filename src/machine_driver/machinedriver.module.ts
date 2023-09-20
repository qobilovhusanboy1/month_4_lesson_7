import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MachineDriver } from './models/machine_driver.model';
import { MachineDriverService } from './machinedrivers.service';
import { MachindeDriveController } from './machinde_driver.controller';


@Module({
  imports:[SequelizeModule.forFeature([MachineDriver]) ],
  providers: [MachineDriverService],
  controllers: [MachindeDriveController]
})
export class MachindeDriverModule {}