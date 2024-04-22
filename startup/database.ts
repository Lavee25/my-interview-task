
import 'reflect-metadata';
import {DataSource} from 'typeorm';
import { Student } from '../entities/Student';
import { StudentProfile } from '../entities/StudentProfile';



export const AppDataSource=new DataSource({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"",
    database:"typeorm-database",
    //entities:['enti-rel/*.ts'],
    entities:[Student,StudentProfile],
    synchronize: true,
    logging:false,
   // migrationsTableName:"user_Pfile_migration_table",
   // migrations: ["migrations/*.ts"]

})
export const entityManager = AppDataSource.manager;


const dbConnections=()=>{
    AppDataSource.initialize().then(()=>{
        console.log('app connected to database')
    })
}
export default dbConnections;
