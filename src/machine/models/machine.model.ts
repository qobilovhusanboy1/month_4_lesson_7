
import { Company } from 'src/company/models/company.model';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";





interface MachinesAttributes{
    model:string;
    name:string;
    companyID:number
}

@Table({tableName: "machine"})
export class Machine extends Model<Machine,MachinesAttributes>{
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
    model:string;

    @Column({
        type:DataType.STRING,
        allowNull: true
    })
    name:string;

    @ForeignKey(()=>Company)
    @Column({type:DataType.INTEGER, onDelete:'RESTRICT',onUpdate:'CASCADE'})
    companyID:number

    @BelongsTo(()=>Company)
    company:Company

}
