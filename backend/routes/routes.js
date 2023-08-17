const express = require('express');


const empController = require('../employee-auth/empController');
const userController = require('../user-auth/userController');
const hrController = require('../hr-admin-Auth/hrController');
const jobDataController = require('../job_cources_application/jobController');
const attendanceDetailsController=require('../attendance-detalis/detailsController')

const router = express.Router();


router.post('/emp/login', empController.loginEmpControllerFn);
router.post('/emp/register', empController.createEmpControllerFn);
router.post('/user/login', userController.loginUserControllerFn);
router.post('/user/register', userController.createUserControllerFn);
router.post('/hr/login', hrController.loginHrControllerFn);
router.post('/hr/register', hrController.createHrControllerFn);

router.get('/get/job', jobDataController.getJobDataControllerFn);
router.post('/create/job', jobDataController.createJobDataControllerFn);
router.patch('/update/job/:id',jobDataController.updateJobDataControllerFn);
router.delete('/remove/job/:id',jobDataController.deleteJobDataControllerFn);

router.get('/get', attendanceDetailsController.getJobDataControllerFn);
router.post('/create', attendanceDetailsController.createJobDataControllerFn);
router.patch('/update/:id',attendanceDetailsController.updateJobDataControllerFn);
router.delete('/remove/:id',attendanceDetailsController.deleteJobDataControllerFn);

module.exports = router;
