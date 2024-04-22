import{Request,Response} from 'express';
import { entityManager } from '../startup/database';
import { Student } from "../entities/Student";
import { StudentProfile } from '../entities/StudentProfile';

class StudentController{
    constructor(){}
        addStudentData =async(req:Request,res:Response)=>{
            try{
                const{name,rollnumber,date}=req.body;
                let student=await entityManager.getRepository(Student);
                const studentData=await student.save({name,rollnumber,date})
                 return res.status(200).send({message:'user add successfully',data:studentData}) //userToken:token
                }
              catch(error:any){
                  return res.status(400).send({messages:"error" , ERROR:error.message})
              }
            }
        updateProfile = async (req: Request, res: Response) => {
            try{
                console.log(req.file);
                let student=await entityManager.getRepository(StudentProfile);
                const imageData=await student.save({image_url:req.file?.filename})
                return res.status(200).send({message:'student image add successfully',data:imageData}) //userToken:token
            }
              catch(error:any){
                  return res.status(400).send({messages:"error" , ERROR:error.message})
              }
            } 
      



    
}

const studentController = new StudentController;
export default studentController; 