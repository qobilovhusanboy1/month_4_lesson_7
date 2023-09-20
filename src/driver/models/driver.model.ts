import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Builder } from "src/builder/model/builder.model";
import { Machine } from "src/machine/models/machine.model";
import { MachineDriver } from "src/machine_driver/models/machine_driver.model";





interface DriverAttributes{
    firstname:string;
    lastname:string;
    phone:string;
    driver_license:string;
}


@Table({tableName: "driver"})
export class Driver extends Model<Driver,DriverAttributes>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type:DataType.STRING,
        allowNull: true,
        unique: true
    })
    firstname:string;

    @Column({
        type:DataType.STRING,
        allowNull: true
    })
    lastname:string;

    @Column({
        type:DataType.STRING,
        allowNull: true
    })
    phone:string;

    @Column({
        type:DataType.STRING,
        allowNull: true
    })
    driver_license:string;


    @HasMany(()=>MachineDriver)
    machinedriver:MachineDriver[];

}