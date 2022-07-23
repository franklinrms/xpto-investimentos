const { newUser } = require('../services/userService')

const createNewUser = async (req, res) => {
    const { email, password, name } = req.body;
    const user = await newUser(email, password, name );

    return res.status(201).json(user);
};

module.exports = {
    createNewUser,
}
