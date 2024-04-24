import{Request,Response,} from 'express';
import { entityManager } from '../startup/database';
import { Student } from "../entities/Student";
import { StudentProfile } from '../entities/StudentProfile';
import constant from '../common/constants';

class StudentController{
    constructor(){}
        addStudentData =async(req:Request,res:Response)=>{
    
        try {
            const { name, rollnumber, date } = req.body;
            if (!req.file?.filename) {
                return res.status(400).send({ message: 'Image is required for profile.' });
              }
            const image_url = req.file?.filename;
        
            // Create the student profile
            const studentProfile = new StudentProfile();
            studentProfile.image_url = image_url;
            
        
            // Create the student and associate the profile
            const student = new Student();
            student.name = name;
            student.rollnumber = rollnumber;
            student.date =date;
            student.profile = studentProfile;
        
            // Save the student -profile will be saved due to cascade option
            const savedStudent = await entityManager.getRepository(Student).save(student);
        
            return res.status(200).send({ message: 'Student and profile added successfully', data: savedStudent });
          } catch (error: any) {
            return res.status(400).send({ messages: "Error", ERROR: error.message });
          }
        };
        getStudentData=async(req:Request,res:Response)=>{
          try{
           
            const defaultpage=1;
            const defaultsize=5;
            //const page=parseInt(req.query.page as string,1)||defaultpage;
            //const size=parseInt(req.query.size as string,5)||defaultsize;
            const pageQuery = parseInt(req.query.page as string, 10);
            const sizeQuery = parseInt(req.query.size as string, 10);
    
            const page = isNaN(pageQuery) ? defaultpage : Math.max(1, pageQuery); // Ensure page is at least 1
            const size = isNaN(sizeQuery) ? defaultsize : Math.max(1, sizeQuery); // Ensure size is at least 1
    
            const skip=(page-1) * size
            const queryOptions = {
              relations: ['profile'],
              skip: skip,
              take: size,
          };
            const studentRepository = entityManager.getRepository(Student);
            const studentData = await studentRepository.find(queryOptions)
            const modifiedStudentData = studentData.map(student => {
              if (student.profile) {
                student.profile.image_url = constant.base_url+'/uploads/' + student.profile.image_url;
              }
              //here base_url= our server port 'http://localhost:8000'
              return student;
            });
            const totalRecords = await studentRepository.count();
            return res.status(200).send({  message: 'Found student data successfully', data: modifiedStudentData,  page: page,
            size: size, totalRecords:totalRecords});
          
          }catch(error: any){
            return res.status(400).send({ messages: "Error", ERROR: error.message });
          }


        }
     
    



    
}

const studentController = new StudentController;
export default studentController; 