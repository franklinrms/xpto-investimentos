const { newUser, getUser } = require('../services/userService')

const createNewUser = async (req, res) => {
    const { email, password, name } = req.body;
    const user = await newUser(email, password, name );

    return res.status(201).json(user);
};
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await getUser(email, password);

    if (!user.length) {
        return res.status(404).json({message: "email ou senha inválidos"});
    }

    return res.status(200).json(user);
};

module.exports = {
    createNewUser,
    login,
}
