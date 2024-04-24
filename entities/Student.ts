import {
    Entity,
    Column,
    OneToOne,
    JoinColumn,
    PrimaryGeneratedColumn} from "typeorm";
import { StudentProfile } from "./StudentProfile";
   
    @Entity()
    export class Student{
      @PrimaryGeneratedColumn()
       public id: number;
    
      @Column()
       public name: string;
    
       @Column()
       public rollnumber: number;
        
       @Column()
       public date: Date;

       @OneToOne(()=>StudentProfile,{cascade:true,eager:true})
       @JoinColumn({name:'profile_id'})
        public profile:StudentProfile ;
    }