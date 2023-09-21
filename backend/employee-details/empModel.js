const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserEmpSchema = new Schema({
    empName: {
        type: String,
        required: true
      },
      phoneNo: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      bloodGroup: {
        type: String,
      }
});

module.exports = mongoose.model("Employee_Data", UserEmpSchema);
