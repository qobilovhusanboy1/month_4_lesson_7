import { BuilderDto } from './dto/create-builder';
import { Injectable, Delete } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Builder } from './model/builder.model';


@Injectable()
export class BuilderService {
    constructor(@InjectModel(Builder) private companyRepo:typeof Builder){}

    async builders(builderDto:BuilderDto) :Promise<Builder>{
        const company = await this.companyRepo.create(builderDto);
        return company;
    }

    async getbuilder():Promise<Builder[]>{
        const getall = await this.companyRepo.findAll({include:{all:true}});
        return getall;
    }

    async getOneBuiler(id:number):Promise<Builder>{
        const getOneinfo = await this.companyRepo.findByPk(id);
        
        return getOneinfo;
    }
    async deletebuilder(id:number):Promise<number>{
        const info = await this.companyRepo.destroy({where:{id:id}})
        return info;
    }
}