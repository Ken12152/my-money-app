module.exports = (req, res, next) => {
    res.header('Access-Contro-Allow-Origin', '*')
    res.header('Access-Contro-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Contro-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') 
    next()
}