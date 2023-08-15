const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserJobSchema = new Schema({
    full_name: {
        type: String,
        required: [true, 'Full name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists']
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    position: {
        type: String
    },
    job_type: {
        type: String
    },
    education: {
        type: String
    },
    experience: {
        type: String
    },
    cover_letter: {
        type: String
    },
    resume: {
        type: String, // You can adjust the type based on your file handling approach
        // required:[true,'Upload Resume']
    },
    status: {
        type: String,
        default: 'Pending'
    }
});

module.exports = mongoose.model("Job_Data", UserJobSchema);
