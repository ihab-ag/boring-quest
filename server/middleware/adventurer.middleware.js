const adventurerMiddleware = (req, res, next) => {

    const TYPE = 'adventurer'
    const type = req.type

    type === TYPE ? next() : res.status(401).send('unauthorized')
}

module.exports = adventurerMiddleware