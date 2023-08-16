const empService = require('../employee-auth/empService');

const loginEmpControllerFn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await empService.getUserByEmail(email);

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


// Create Employee Controller Function
const createEmpControllerFn = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const empDetails = {
            username: username,
            email: email,
            password: password
        };

        console.log("empDetails:", empDetails); // Log empDetails before saving
        const status = await empService.createEmpDBService(empDetails);

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
    loginEmpControllerFn,
    createEmpControllerFn
};
