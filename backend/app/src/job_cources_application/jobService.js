var userJobModel = require('./jobModel')

const path = require('path');

module.exports.getJobDataFromDBService = () => {
    return new Promise((resolve, reject) => {
        userJobModel.find({})
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.createJobDetailsDBService = (userJobDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userJobModelData = new userJobModel(userJobDetails);
        userJobModelData.save()
            .then(result => {
                resolve(true);
            })
            .catch(error => {
                reject(false);
            });
    });
}
