const empPayrollModel = require('./payrollModel');

function getPayrollDataFromDBService() {
    return empPayrollModel.find({});
}

function createPayrollDetailsDBService(empPayrollDetails) {
    const empPayrollModelData = new empPayrollModel(empPayrollDetails);
    return empPayrollModelData.save()
        .then(() => true)
        .catch(() => false);
}

function updatePayrollDBService(id, empPayrollDetails) {
    return empPayrollModel.findByIdAndUpdate(id, empPayrollDetails);
}

function deletePayrollDBService(id) {
    return empPayrollModel.findByIdAndDelete(id);
}

module.exports = {
    getPayrollDataFromDBService,
    createPayrollDetailsDBService,
    updatePayrollDBService,
    deletePayrollDBService
};
