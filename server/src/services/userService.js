const prisma = require('../prisma');

const newUser = async (email, password, name) => {
   const newUser = await prisma.user.create({
        data: { email, password, name, },
        select: {
            id: true,
            email: true,
            name: true,
            balance: true,
            portfolio: true,
        },
    });
    return newUser
} 
const getUser = async (email, password) => {
    const user = await prisma.user.findMany({
        where: { email: email, password: password },
        select: {
            id: true,
            email: true,
            name: true,
            balance: true,
            portfolio: true,
        },
    });
    return user
} 
const updateUser = async (id, balance, portfolio) => {
    await prisma.user.update({
        where: { id: id },
        data: { balance, portfolio },
    });
} 

module.exports = { 
    newUser,
    getUser,
    updateUser,
}
