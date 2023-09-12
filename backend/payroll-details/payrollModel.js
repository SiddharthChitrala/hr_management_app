// payrollModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PayrollSchema = new Schema({
    BankName: {
        type: String,
        required: [true, 'Bank Name is required']
    },
    AccountNumber: {
        type: String,
        required: [true, 'Account Number is required'],
        unique: [true, 'Account Number already exists']
    },
    CVV: {
        type: String
    },
    ExpirationDate: {
        type: String
    }
});

module.exports = mongoose.model("Payroll_details", PayrollSchema);