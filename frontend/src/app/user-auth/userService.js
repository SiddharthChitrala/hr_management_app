const userModel = require('../user-auth/userModel');

module.exports = {
    createUserDBService: async (userDetails) => {
        try {
            const userModelData = new userModel({
                username: userDetails.username,
                email: userDetails.email,
                password: userDetails.password // Store the password as is (not hashed)
            });

            const savedEmp = await userModelData.save();

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
            const user = await userModel.findOne({ email });
            return user;
        } catch (error) {
            return null;
        }
    }
};
