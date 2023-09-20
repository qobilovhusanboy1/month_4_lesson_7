import { MachineDto } from './dto/create-machine';
import { Injectable, Delete } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Machine } from './models/machine.model';


@Injectable()
export class MachineService {
    constructor(@InjectModel(Machine) private companyRepo:typeof Machine){}

    async machines(builderDto:MachineDto) :Promise<Machine>{
        const company = await this.companyRepo.create(builderDto);
        return company;
    }

    async getmachines():Promise<Machine[]>{
        const getall = await this.companyRepo.findAll({include:{all:true}});
        return getall;
    }

    async getOnemachine(id:number):Promise<Machine>{
        const getOneinfo = await this.companyRepo.findByPk(id);
        
        return getOneinfo;
    }
    async deletemachine(id:number):Promise<number>{
        const info = await this.companyRepo.destroy({where:{id:id}})
        return info;
    }
}