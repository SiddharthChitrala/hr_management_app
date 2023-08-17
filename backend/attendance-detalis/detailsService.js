const { model } = require('mongoose');
var userJobModel = require('./detailsModel')

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

module.exports.updateJobDBService = async (id, userJobDetails) => {
    try {
        console.log(userJobDetails);
        const result = await userJobModel.findByIdAndUpdate(id, userJobDetails);
        if (result) {
            return result; // Resolve with the updated document
        } else {
            throw new Error("Job not found"); // Reject if job not found
        }
    } catch (error) {
        throw error; // Rethrow the error
    }
};

module.exports.deleteJobDBService = async (id) => {
    try {
        const result = await userJobModel.findByIdAndDelete(id);
        if (result) {
            return result; // Resolve with the deleted document
        } else {
            throw new Error("Job not found"); // Reject if job not found
        }
    } catch (error) {
        throw error; // Rethrow the error
    }
};
