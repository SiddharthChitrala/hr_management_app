const empModel = require('../employee-auth/empModel');

module.exports = {
    createEmpDBService: async (empDetails) => {
        try {
            const empModelData = new empModel({
                username: empDetails.username,
                email: empDetails.email,
                password: empDetails.password // Store the password as is (not hashed)
            });

            const savedEmp = await empModelData.save();

            if (savedEmp) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    },
    getUserByEmail: async (email) => {
        try {
            const user = await empModel.findOne({ email });
            return user;
        } catch (error) {
            return null;
        }
    }
};
