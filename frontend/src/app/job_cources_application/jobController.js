var useJobService = require('./jobService');

var getJobDataControllerFn = async (req, res) => {
    try {
        var userJobDetails = await useJobService.getJobDataFromDBService();
        res.send({ "status": true, 'data': userJobDetails });
    } catch (error) {
        console.error('Error getting job data:', error);
        res.status(500).json({ error: 'Error getting job data' });
    }
};

var createJobDataControllerFn = async (req, res) => {
    try {
        var status = await useJobService.createJobDetailsDBService(req.body);
        if (status) {
            res.send({ "status": true, "message": "Successfully Applied" });
        } else {
            res.send({ "status": false, "message": "Error while Applying" });
        }
    } catch (error) {
        console.error('Error creating job data:', error);
        res.status(500).json({ error: 'Error creating job data' });
    }
};

module.exports = {

    getJobDataControllerFn,
    createJobDataControllerFn
};
