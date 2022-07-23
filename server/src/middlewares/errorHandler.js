const errorHandler = (error, _req, res, _next) => {
    console.log('ERROR', error.message);
    return res.status(error.status || 500).json({ message: error.message });
};
 
module.exports = errorHandler;  