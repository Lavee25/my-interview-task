import express,{Request,Response} from 'express'
import studentRoutes from '../routes/studentRoutes';



module.exports=((app:any)=>{
app.get('/',(req:Request,res:Response)=>{res.status(200).send({message:"welcome to app"})});  
app.use(express.json());
app.use('/api/v1/student',studentRoutes);


})