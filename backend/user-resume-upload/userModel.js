const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name: String, // Original name of the uploaded resume file
    full_name: String,
    email: String,
    phone: String,
    address: String,
    position: String,
    job_type: {
        type: String,
        enum: ['', 'Full Time', 'Part Time', 'Internship'],
    },    
    path: String,
    education: String,
    experience: String,
    cover_letter: String,
    status: {
        type: String,
        default: 'Pending',
    },
});

module.exports = mongoose.model('Resume', resumeSchema);
