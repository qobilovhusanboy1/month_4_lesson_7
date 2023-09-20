import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Builder } from "./builder/model/builder.model";
import { Company } from "./company/models/company.model";
import { BuilderModule } from "./builder/builder.module";
import { CompanyModule } from "./company/company.module";
import { MachineModule } from "./machine/machine.module";
import { Machine } from "./machine/models/machine.model";
import { MachineDriver } from "./machine_driver/models/machine_driver.model";
import { MachindeDriverModule } from "./machine_driver/machinedriver.module";
import { Driver } from "./driver/models/driver.model";
import { DriverModule } from "./driver/driver.module";


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath:'.env',
            isGlobal: true
        }),
        SequelizeModule.forRoot({
            dialect:'postgres',
            host: process.env.POSTGRES_HOST || 'localhost', 
            port: +process.env.POSTGRES_PORT || 5432,
            username:process.env.POSTGRES_USER || 'postgres',
            password:String(process.env.POSTGRES_PASSWORD) || 'root',
            database:process.env.POSTGRES_DB || 'nest_one',
            models:[Company,Builder,Machine,MachineDriver,Driver],
            autoLoadModels:true,
            logging:true
        }),
        CompanyModule,BuilderModule,MachineModule,MachindeDriverModule,DriverModule
    ],
    providers: [],
    controllers: [],
    exports: [],
})

export class AppModule {}