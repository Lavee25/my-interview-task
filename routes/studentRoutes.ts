import express from 'express';
const router=express.Router();
import studentController from '../controller/studentController';
import upload from '../common/utils'

//student rotes....>>>>


router.post('/addStudent',[upload],studentController.addStudentData);
router.get('/getdata',studentController.getStudentData);
//router.get('/getdata/:id',studentController.getStudentDataById)

export default router;