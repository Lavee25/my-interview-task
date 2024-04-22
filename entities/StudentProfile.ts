import {
    Entity,
    Column,
    PrimaryGeneratedColumn} from "typeorm";
   
    @Entity()
    export class StudentProfile{
      @PrimaryGeneratedColumn()
       public id: number;
    
      @Column()
       public image_url: string;
    
     

    }