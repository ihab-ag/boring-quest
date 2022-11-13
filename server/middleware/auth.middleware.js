const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    try{
        if(!token)

        throw 'invalid token'

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.id = decoded.id
        req.type = decoded.type

        next()

    }catch(error){
        res.status(401).send(error.message)
    }
    
}

module.exports = authMiddleware