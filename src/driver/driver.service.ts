
import { Injectable, Delete } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Driver } from './models/driver.model';
import { DriverDto } from './dto/create-driver';



@Injectable()
export class DriverService {
    constructor(@InjectModel(Driver) private companyRepo:typeof Driver){}

    async driver(driverDto:DriverDto) :Promise<Driver>{
        const company = await this.companyRepo.create(driverDto);
        return company;
    }

    async getdrivers():Promise<Driver[]>{
        const getall = await this.companyRepo.findAll({include:{all:true}});
        return getall;
    }

    async getOnedrivers(id:number):Promise<Driver>{
        const getOneinfo = await this.companyRepo.findByPk(id);
        
        return getOneinfo;
    }
    async deletedrivers(id:number):Promise<number>{
        const info = await this.companyRepo.destroy({where:{id:id}})
        return info;
    }



}