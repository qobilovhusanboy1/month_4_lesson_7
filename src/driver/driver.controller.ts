import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverDto } from './dto/create-driver';
import { Driver } from './models/driver.model';

@Controller('driver')
export class DriverController {
    constructor(private readonly companyService:DriverService){}

    @Post('create')
    async Driver(@Body() createCompanyDto:DriverDto): Promise<Driver>{
        return this.companyService.driver(createCompanyDto)
    }
    @Get('get')
    async getDrivers():Promise<Driver[]>{
        const info = await this.companyService.getdrivers()
        return info;
    }

    @Get('get/:id')
    async getoneDriver(@Param("id") id:number):Promise<Driver>{
        const getOneinfo = await this.companyService.getOnedrivers(id)
        return getOneinfo;
    }


    @Delete('delete/:id')
    async deleteonedriver(@Param("id") id:number):Promise<number>{
        const deleted = await this.companyService.deletedrivers(id)
        return deleted;
    }

}