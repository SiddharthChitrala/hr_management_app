const express = require('express');
const router = express.Router();

const empController = require('../employee-auth/empController');
const userController = require('../user-auth/userController');
const hrController = require('../hr-admin-Auth/hrController');
const jobDataController = require('../job_cources_application/jobController');
const attendanceDetailsController = require('../attendance-detalis/detailsController');
const payrollDetailsController = require('../payroll-details/payrollController')
const empDetailsController=require('../employee-details/empController')


// Authentication Routes

router.post('/emp/login', empController.loginEmpControllerFn);
router.post('/emp/register', empController.createEmpControllerFn);
router.post('/user/login', userController.loginUserControllerFn);
router.post('/user/register', userController.createUserControllerFn);
router.post('/hr/login', hrController.loginHrControllerFn);
router.post('/hr/register', hrController.createHrControllerFn);

// Job Data Routes

router.get('/job', jobDataController.getJobDataControllerFn);
router.post('/job', jobDataController.createJobDataControllerFn);
router.patch('/job/:id', jobDataController.updateJobDataControllerFn);
router.delete('/job/:id', jobDataController.deleteJobDataControllerFn);

// Attendance Details Routes

router.get('/attendance', attendanceDetailsController.getEmpJobDataControllerFn);
router.post('/attendance', attendanceDetailsController.createEmpJobDataControllerFn);
router.patch('/attendance/:id', attendanceDetailsController.updateEmpJobDataControllerFn);
router.delete('/attendance/:id', attendanceDetailsController.deleteEmpJobDataControllerFn);

// Payroll Details Routes

router.get('/payroll', payrollDetailsController.getPayrollDataControllerFn);
router.post('/payroll', payrollDetailsController.createPayrollDataControllerFn);
router.patch('/payroll/:id', payrollDetailsController.updatePayrollDataControllerFn);
router.delete('/payroll/:id', payrollDetailsController.deletePayrollDataControllerFn);

//Employee Management Routes

router.get('/emp', empDetailsController.getEmpDataControllerFn);
router.post('/emp', empDetailsController.createEmpDataControllerFn);
router.patch('/emp/:id', empDetailsController.updateEmpDataControllerFn);
router.delete('/emp/:id', empDetailsController.deleteEmpDataControllerFn);

module.exports = router;
