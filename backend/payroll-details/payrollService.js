const userPayrollModel = require('./payrollModel');

module.exports.getPayrollDataFromDBService = () => {
    return new Promise((resolve, reject) => {
        userPayrollModel.find({})
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.createPayrollDetailsDBService = (userPayrollDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userPayrollModelData = new userPayrollModel(userPayrollDetails);
        userPayrollModelData.save()
            .then(result => {
                resolve(true);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.updatePayrollDBService = async (id, userPayrollDetails) => {
    try {
        console.log(userPayrollDetails);
        const result = await userPayrollModel.findByIdAndUpdate(id, userPayrollDetails);
        if (result) {
            return result; // Resolve with the updated document
        } else {
            throw new Error("Not found"); // Reject if data not found
        }
    } catch (error) {
        throw error; // Rethrow the error
    }
};

module.exports.deletePayrollDBService = async (id) => {
    try {
        const result = await userPayrollModel.findByIdAndDelete(id);
        if (result) {
            return result; // Resolve with the deleted document
        } else {
            throw new Error("Not found"); // Reject if data not found
        }
    } catch (error) {
        throw error; // Rethrow the error
    }
};
