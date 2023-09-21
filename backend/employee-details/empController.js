var userEmpService = require('./empService');

var getEmpDataControllerFn = async (req, res) => {
    try {
        var userEmpDetails = await userEmpService.getEmpDataFromDBService();
        res.send({ "status": true, 'data': userEmpDetails });
    } catch (error) {
        console.error('Error getting  data:', error);
        res.status(500).json({ error: 'Error getting data' });
    }
};

var createEmpDataControllerFn = async (req, res) => {
    try {
        var status = await userEmpService.createEmpDetailsDBService(req.body);
        if (status) {
            res.send({ "status": true, "message": "Successfully Applied" });
        } else {
            res.send({ "status": false, "message": "Error while Applying" });
        }
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(500).json({ error: 'Error creating data' });
    }
};

var updateEmpDataControllerFn = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    var result = await userEmpService.updateEmpDBService(req.params.id, req.body);
    if (result) {
        res.send({ 'status': true, "message": "Status updated" })
    } else {
        res.send({ "status": false, "message": "Status Pending" })
    }
}

var deleteEmpDataControllerFn = async (req, res) => {
    console.log(req.params.id);
   
    var result = await userEmpService.deleteEmpDBService(req.params.id);
    if (result) {
        res.send({ "status": true, "message": "Rejected" })
    } else {
        res.send({ "status": false, "message": "Not Rejected" })
    }
}

module.exports = {
    getEmpDataControllerFn,
    createEmpDataControllerFn,
    updateEmpDataControllerFn,
    deleteEmpDataControllerFn
};
