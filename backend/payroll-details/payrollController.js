var usePayrollService = require('./payrollService');

var getPayrollDataControllerFn = async (req, res) => {
    try {
        var userPayrollDetails = await usePayrollService.getPayrollDataFromDBService();
        res.send({ "status": true, 'data': userPayrollDetails });
    } catch (error) {
        console.error('Error getting payroll data:', error);
        res.status(500).json({ error: 'Error getting payroll data' });
    }
};

var createPayrollDataControllerFn = async (req, res) => {
    try {
        var status = await usePayrollService.createPayrollDetailsDBService(req.body);
        if (status) {
            res.send({ "status": true, "message": "Successfully Applied" });
        } else {
            res.send({ "status": false, "message": "Error while Applying" });
        }
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(500).json({ error: 'Error creating payroll data' });
    }
};

var updatePayrollDataControllerFn = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    var result = await usePayrollService.updatePayrollDBService(req.params.id, req.body);
    if (result) {
        res.send({ 'status': true, "message": "Status updated" })
    } else {
        res.send({ "status": false, "message": "Status Pending" })
    }
}

var deletePayrollDataControllerFn = async (req, res) => {
    console.log(req.params.id);
   
    var result = await usePayrollService.deletePayrollDBService(req.params.id);
    if (result) {
        res.send({ "status": true, "message": "Rejected" })
    } else {
        res.send({ "status": false, "message": "Not Rejected" })
    }
}

module.exports = {
    getPayrollDataControllerFn,
    createPayrollDataControllerFn,
    updatePayrollDataControllerFn,
    deletePayrollDataControllerFn
};
