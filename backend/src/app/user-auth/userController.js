const userService = require('../user-auth/userService');

const loginUserControllerFn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userService.getUserByEmail(email);

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
const createUserControllerFn = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const userDetails = {
            username: username,
            email: email,
            password: password
        };

        console.log("userDetails:", userDetails); // Log empDetails before saving
        const status = await userService.createUserDBService(userDetails);

        if (status) {
            res.send({
                "status": true,
                "message": "Employee created successfully"
            });
        } else {
            throw new Error('Error in creating employee');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send({
            "status": false,
            "message": "Error during employee signup"
        });
    }
};


module.exports = {
    loginUserControllerFn,
    createUserControllerFn
};
