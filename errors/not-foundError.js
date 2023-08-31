
class NotFoundError extends Error {
    constructor (message, statusCode) {
        super(message);
        this.message = message,
        this.statusCode = statusCode;
    }
};

const createNotFoundError = (msg, code) => new NotFoundError(msg, code);

module.exports = { createNotFoundError, NotFoundError };