const express =require('express')
const router =express.Router();
const regadmin=require('./controllers/admin.controller');
const student=require('./controllers/student.controller')



router.post('/register',regadmin.register);
router.post('/authenticate',regadmin.authenticate)
router.post('/student',student.student)
router.get('/studentprofile',student.studentProfile)




module.exports=router