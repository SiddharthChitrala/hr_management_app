const empPayrollService = require('./payrollService');

async function getEmpPayrollDataControllerFn(req, res) {
    try {
        var empPayrollDetails = await empPayrollService.getPayrollDataFromDBService();
        res.send({ "status": true, 'data': empPayrollDetails });
    } catch (error) {
        console.error('Error getting payroll data:', error);
        res.status(500).json({ error: 'Error getting payroll data' });
    }
}

async function createEmpPayrollDataControllerFn(req, res) {
    try {
        var status = await empPayrollService.createPayrollDetailsDBService(req.body);
        if (status) {
            res.send({ "status": true, "message": "Successfully Applied" });
        } else {
            res.send({ "status": false, "message": "Error while Applying" });
        }
    } catch (error) {
        console.error('Error creating payroll data:', error);
        res.status(500).json({ error: 'Error creating payroll data' });
    }
}

async function updateEmpPayrollDataControllerFn(req, res) {
    console.log(req.params.id);
    console.log(req.body);
    var result = await empPayrollService.updatePayrollDBService(req.params.id, req.body);
    if (result) {
        res.send({ 'status': true, "message": "Payroll Status updated" });
    } else {
        res.send({ "status": false, "message": "Payroll Status Pending" });
    }
}

async function deleteEmpPayrollDataControllerFn(req, res) {
    console.log(req.params.id);
    var result = await empPayrollService.deletePayrollDBService(req.params.id);
    if (result) {
        res.send({ "status": true, "message": "Payroll Rejected" });
    } else {
        res.send({ "status": false, "message": "Payroll Not Rejected" });
    }
}

module.exports = {
    getEmpPayrollDataControllerFn,
    createEmpPayrollDataControllerFn,
    updateEmpPayrollDataControllerFn,
    deleteEmpPayrollDataControllerFn
};
