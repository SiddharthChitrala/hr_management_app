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

var updateJobDataControllerFn = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    var result = await useJobService.updateJobDBService(req.params.id, req.body);
    if (result) {
        res.send({ 'status': true, "message": "Job Status updated" })
    }
    else {
        res.send({ "status": false, "message": "Job Status Pending" })
    }
}

var deleteJobDataControllerFn=async(req,res)=>{
    console.log(req.params.id);
   
    var result=await useJobService.deleteJobDBService(req.params.id);
    if(result){
        res.send({"status":true,"message":"Rejected"})
    }
    else{
        res.send({"status":false,"message":"Not Rejected"})
    }
    console.log('done')
}

module.exports = {

    getJobDataControllerFn,
    createJobDataControllerFn,
    updateJobDataControllerFn,
    deleteJobDataControllerFn
};
