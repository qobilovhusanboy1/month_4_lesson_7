import { BuilderDto } from './dto/create-builder';
import { BuilderService } from './builder.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {  Builder} from './model/builder.model';

@Controller('builder')
export class BuilderController {
    constructor(private readonly companyService:BuilderService){}

    @Post('create')
    async builderss(@Body() builderDto:BuilderDto): Promise<Builder>{
        return this.companyService.builders(builderDto)
    }
    @Get('get')
    async getBuilders():Promise<Builder[]>{
        const info = await this.companyService.getbuilder()
        return info;
    }

    @Get('get/:id')
    async getscompany(@Param("id") id:number):Promise<Builder>{
        const getOneinfo = await this.companyService.getOneBuiler(id)
        return getOneinfo;
    }


    @Delete('delete/:id')
    async deleteonecompany(@Param("id") id:number):Promise<number>{
        const deleted = await this.companyService.deletebuilder(id)
        return deleted;
    }

}
