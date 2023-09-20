import { Machine } from 'src/machine/models/machine.model';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Driver } from 'src/driver/models/driver.model';





interface MachinesDriverAttributes{
    machineID:number;
    driverID:number;
}

@Table({tableName: "machinedriver"})
export class MachineDriver extends Model<Machine,MachinesDriverAttributes>{

    @ForeignKey(()=>Machine)
    @Column({type:DataType.INTEGER, onDelete:'RESTRICT',onUpdate:'CASCADE'})
    machineID:number

    @BelongsTo(()=>Machine)
    machine:Machine

    @ForeignKey(()=>Driver)
    @Column({type:DataType.INTEGER, onDelete:'RESTRICT',onUpdate:'CASCADE'})
    driverID:number

    @BelongsTo(()=>Driver)
    driver:Driver



}