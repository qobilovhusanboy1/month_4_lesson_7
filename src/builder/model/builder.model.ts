import { Company } from 'src/company/models/company.model';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";





interface BuilderAttributes {
    fullname:string;
    birth_day:string;
    salary:number;
    companyID:number;
}

@Table({tableName: "builder"})
export class Builder extends Model<Builder,BuilderAttributes>{
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
    fullname:string;

    @Column({
        type:DataType.STRING,
        allowNull: true
    })
    birth_day:string;

    @Column({
        type:DataType.DECIMAL,
        allowNull: true
    })
    salary:number;

    @ForeignKey(()=>Company)
    @Column({type:DataType.INTEGER, onDelete:'RESTRICT',onUpdate:'CASCADE'})
    companyID:number

    @BelongsTo(()=>Company)
    company:Company

}
