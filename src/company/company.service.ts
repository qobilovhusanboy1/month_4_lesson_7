import { CreateCompanyDto } from './dto/create-company.dto';
import { Injectable, Delete } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './models/company.model';


@Injectable()
export class CompanyService {
    constructor(@InjectModel(Company) private companyRepo:typeof Company){}

    async createCompany(createCompanyDto:CreateCompanyDto) :Promise<Company>{
        const company = await this.companyRepo.create(createCompanyDto);
        return company;
    }

    async getcompany():Promise<Company[]>{
        const getall = await this.companyRepo.findAll({include:{all:true}});
        return getall;
    }

    async getOneCompany(id:number):Promise<Company>{
        const getOneinfo = await this.companyRepo.findByPk(id);
        
        return getOneinfo;
    }
    async deletecompany(id:number):Promise<number>{
        const info = await this.companyRepo.destroy({where:{id:id}})
        return info;
    }

    
    // async updateOneCompany(id:number,createCompanyDto:CreateCompanyDto):Promise<Company>{
    //     const updated = await this.companyRepo.update({id:id},{createCompanyDto});
    //     return updated;
    // }

}
