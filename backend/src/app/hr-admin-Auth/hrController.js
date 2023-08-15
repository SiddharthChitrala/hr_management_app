const hrService = require('../hr-admin-Auth/hrService');

const loginHrControllerFn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await hrService.getHrByEmail(email);

        if (!user) {
            throw new Error('User not found');
        }

        if (user.password !== password) {
            throw new Error('Invalid password');
        }

        res.send({
            "status": true,
            "message": "Employee login successful"
        });
    } catch (error) {
        console.error(error);
        res.status(400).send({
            "status": false,
            "message": "Error during login"
        });
    }
};


// Create user Controller Function
const createHrControllerFn = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const hrDetails = {
            username: username,
            email: email,
            password: password
        };

        console.log("hrDetails:", hrDetails); // Log empDetails before saving
        const status = await hrService.createHrDBService(hrDetails);

        if (status) {
            res.send({
                "status": true,
                "message": "hr created successfully"
            });
        } else {
            throw new Error('Error in creating HR');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send({
            "status": false,
            "message": "Error during Hr signup"
        });
    }
};


module.exports = {
    loginHrControllerFn,
    createHrControllerFn
};
