import { Injectable, Delete } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MachineDriver } from './models/machine_driver.model';
import { MachinedriverDto } from './dto/create-machinde_driver';


@Injectable()
export class MachineDriverService {
    constructor(@InjectModel(MachineDriver) private companyRepo:typeof MachineDriver){}

    async machinedriver(machineDriverDto:MachinedriverDto) :Promise<MachineDriver>{
        const company = await this.companyRepo.create(machineDriverDto);
        return company;
    }

    async getmachinedriverss():Promise<MachineDriver[]>{
        const getall = await this.companyRepo.findAll({include:{all:true}});
        return getall;
    }

    async getOnemachindedrivers(id:number):Promise<MachineDriver>{
        const getOneinfo = await this.companyRepo.findByPk(id);
        
        return getOneinfo;
    }
    async deletemachinedriver(id:number):Promise<number>{
        const info = await this.companyRepo.destroy({where:{id:id}})
        return info;
    }
}