const { DateTime } = require('luxon')

const incrementDay = (date) => {
    return DateTime.fromISO(date).plus({days: 1})
}

module.exports = {
    incrementDay
}