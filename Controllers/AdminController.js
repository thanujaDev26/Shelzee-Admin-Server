let Admin = require('../Models/AdminModel');

exports.createAdmin = async (req, res) => {
    try {
        let admin = (await Admin.create(req.body));
        if (admin) {
            res.status(201).json({
                status: 'successfully created Admin',
                data: {
                    admin
                }
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.loginAdmin = async (req, res) => {
    try {
        let { contact, password } = req.body;
        let admins = await Admin.find({contact, password });
        // let admins = await Admin.find();
        console.log(req.query)
        if (admins.length > 0) {
            res.status(200).json({
                status: 'success',
                count: admins.length,
                data: {
                    admins
                }
            });
            console.log(admins);
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'Admin user not found or incorrect credentials'
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}