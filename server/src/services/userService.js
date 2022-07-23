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

module.exports = { 
    newUser,
}
