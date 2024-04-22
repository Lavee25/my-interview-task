import express from 'express';
const router=express.Router();
import studentController from '../controller/studentController';
import upload from '../common/utils'

//user rotes....>>>>
router.post('/addStudent',studentController.addStudentData);
//router.get('/getdata',studentController.getStudentData);
router.post('/upload-profile',[upload],studentController.updateProfile)

export default router;