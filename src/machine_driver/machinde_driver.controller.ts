
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MachineDriver } from './models/machine_driver.model';
import { MachineDriverService } from './machinedrivers.service';
import { MachinedriverDto } from './dto/create-machinde_driver';

@Controller('machineDriver')
export class MachindeDriveController {
    constructor(private readonly companyService:MachineDriverService){}

    @Post('create')
    async machinedriverss(@Body() machinedriverDto:MachinedriverDto): Promise<MachineDriver>{
        return this.companyService.machinedriver(machinedriverDto)
    }
    @Get('get')
    async getmachinedrivers():Promise<MachineDriver[]>{
        const info = await this.companyService.getmachinedriverss()
        return info;
    }

    @Get('get/:id')
    async getOnemachindeDriver(@Param("id") id:number):Promise<MachineDriver>{
        const getOneinfo = await this.companyService.getOnemachindedrivers(id)
        return getOneinfo;
    }


    @Delete('delete/:id')
    async deletemachinedriver(@Param("id") id:number):Promise<number>{
        const deleted = await this.companyService.deletemachinedriver(id)
        return deleted;
    }

}