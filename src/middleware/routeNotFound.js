const routeNotFound = (req, res, next) => {
    return res.status(404).json({error : "Route not found"});
}

module.exports = routeNotFound