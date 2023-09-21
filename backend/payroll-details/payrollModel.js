const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserPayrollSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required']
    },
    bankName: {
        type: String
    },
    accountNumber: {
        type: String
    },
    cvv: {
        type: String
    },
    expirationDate: {
        type: String
    },
});

module.exports = mongoose.model("Payroll_Data", UserPayrollSchema);
