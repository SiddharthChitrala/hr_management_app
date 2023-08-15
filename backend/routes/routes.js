const express = require('express');


const empController = require('../src/app/employee-auth/empController');
const userController = require('../src/app/user-auth/userController');
const hrController = require('../src/app/hr-admin-Auth/hrController');
const jobDataController = require('../src/app/job_cources_application/jobController');

const router = express.Router();


router.post('/emp/login', empController.loginEmpControllerFn);
router.post('/emp/register', empController.createEmpControllerFn);
router.post('/user/login', userController.loginUserControllerFn);
router.post('/user/register', userController.createUserControllerFn);
router.post('/hr/login', hrController.loginHrControllerFn);
router.post('/hr/register', hrController.createHrControllerFn);

router.get('/get/job', jobDataController.getJobDataControllerFn);
router.post('/create/job', jobDataController.createJobDataControllerFn);

module.exports = router;
