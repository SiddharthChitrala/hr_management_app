const userEmpModel = require('./empModel');

module.exports.getEmpDataFromDBService = () => {
    return new Promise((resolve, reject) => {
        userEmpModel.find({})
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.createEmpDetailsDBService = (userEmpDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userEmpModelData = new userEmpModel(userEmpDetails);
        userEmpModelData.save()
            .then(result => {
                resolve(true);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.updateEmpDBService = async (id, userEmpDetails) => {
    try {
        console.log(userEmpDetails);
        const result = await userEmpModel.findByIdAndUpdate(id, userEmpDetails);
        if (result) {
            return result; // Resolve with the updated document
        } else {
            throw new Error("Not found"); // Reject if data not found
        }
    } catch (error) {
        throw error; // Rethrow the error
    }
};

module.exports.deleteEmpDBService = async (id) => {
    try {
        const result = await userEmpModel.findByIdAndDelete(id);
        if (result) {
            return result; // Resolve with the deleted document
        } else {
            throw new Error("Not found"); // Reject if data not found
        }
    } catch (error) {
        throw error; // Rethrow the error
    }
};
