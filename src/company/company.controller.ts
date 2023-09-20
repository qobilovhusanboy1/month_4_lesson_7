import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyService } from './company.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Company } from './models/company.model';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService:CompanyService){}

    @Post('create')
    async createCompany(@Body() createCompanyDto:CreateCompanyDto): Promise<Company>{
        return this.companyService.createCompany(createCompanyDto)
    }
    @Get('get')
    async getcompany():Promise<Company[]>{
        const info = await this.companyService.getcompany()
        return info;
    }

    @Get('get/:id')
    async getscompany(@Param("id") id:number):Promise<Company>{
        const getOneinfo = await this.companyService.getOneCompany(id)
        return getOneinfo;
    }


    @Delete('delete/:id')
    async deleteonecompany(@Param("id") id:number):Promise<number>{
        const deleted = await this.companyService.deletecompany(id)
        return deleted;
    }

    // @Put('update')
    // async updatecompany(@Body("id") id:number,createCompanyDto:CreateCompanyDto):Promise<Company> {
    //     const updateOneinfo =await this.companyService.updateOneCompany(id, createCompanyDto)
    //     return updateOneinfo;
    // }
}
