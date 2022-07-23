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

module.exports = { 
    newUser,
    getUser,
}
