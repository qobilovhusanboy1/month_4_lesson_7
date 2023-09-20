import { MachineDto } from './dto/create-machine';
import { MachineService } from './machine.service'
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Machine } from './models/machine.model';


@Controller('machine')
export class MachineController {
    constructor(private readonly companyService:MachineService){}

    @Post('create')
    async machiness(@Body() machineDto:MachineDto): Promise<Machine>{
        return this.companyService.machines(machineDto)
    }
    @Get('get')
    async getmachine():Promise<Machine[]>{
        const info = await this.companyService.getmachines()
        return info;
    }

    @Get('get/:id')
    async getOnemachine(@Param("id") id:number):Promise<Machine>{
        const getOneinfo = await this.companyService.getOnemachine(id)
        return getOneinfo;
    }


    @Delete('delete/:id')
    async deletemachines(@Param("id") id:number):Promise<number>{
        const deleted = await this.companyService.deletemachine(id)
        return deleted;
    }

}
