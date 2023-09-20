import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DriverService } from './driver.service';
import { DriverController } from './driver.controller';
import { Driver } from './models/driver.model';

@Module({
  imports:[SequelizeModule.forFeature([Driver]) ],
  providers: [DriverService],
  controllers: [DriverController]
})
export class DriverModule {}