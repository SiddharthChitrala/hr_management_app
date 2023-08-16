const hrModel = require('../hr-admin-Auth/hrModel');

module.exports = {
    createHrDBService: async (hrDetails) => {
        try {
            const hrModelData = new hrModel({
                username: hrDetails.username,
                email: hrDetails.email,
                password: hrDetails.password // Store the password as is (not hashed)
            });

            const savedEmp = await hrModelData.save();

            if (savedEmp) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    },
    getHrByEmail: async (email) => {
        try {
            const user = await hrModel.findOne({ email });
            return user;
        } catch (error) {
            return null;
        }
    }
};
