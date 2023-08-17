const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserJobSchema = new Schema({
    Name: {
        type: String,
        required: [true, 'Full name is required']
    },
    Email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists']
    },
    Date: {
        type: String
    },
    Time: {
        type: String
    }
});

module.exports = mongoose.model("Attendance_details", UserJobSchema);
