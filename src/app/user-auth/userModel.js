var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is mandatory']
    },
    email: {
        type: String,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 1024,
        required: true
    }
});

module.exports = mongoose.model('User_Auth', userSchema);
