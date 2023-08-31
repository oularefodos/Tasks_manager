
const asyncWrapper = (fnct) => {
    return async (req, res, next) => {
        try {
            await fnct(req, res, next);
        }
        catch (error) { next(error) }
    }
}

module.exports = asyncWrapper;