const errorHandler = (err, req, res, next) => {
    // Log the error stack (you can log more details here if needed)
    console.error(err.stack);

    // Customize response based on the environment
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Default to 500 if status is 200

    // Provide a more detailed message only in development mode
    res.status(statusCode).json({
        message: statusCode === 500 ? 'Server error, please try again later' : err.message,
        // Include stack trace only in development
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};

module.exports = errorHandler;
