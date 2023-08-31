const { NotFoundError } = require("../../errors/not-foundError");

const errorHandler = (error, req, res, next) => {
    if (error instanceof NotFoundError) {
        return res.status(error.statusCode).json({msg : error.message});
    }
    res.status(500).json({msg : 'something goes wrong'});
}

module.exports = errorHandler;