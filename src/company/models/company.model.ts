import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Builder } from "src/builder/model/builder.model";
import { Machine } from "src/machine/models/machine.model";





interface CompanyCreationAttr{
    name:string;
    address:string;
    phone:string;
}


@Table({tableName: "company"})
export class Company extends Model<Company,CompanyCreationAttr>{
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
    name:string;

    @Column({
        type:DataType.STRING,
        allowNull: true
    })
    address:string;

    @Column({
        type:DataType.STRING,
        allowNull: true
    })
    phone:string;


    @HasMany(()=>Builder)
    builders:Builder[];

    @HasMany(()=>Machine)
    machines:Machine[];
}
