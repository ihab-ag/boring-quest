const { DateTime } = require('luxon')

const incrementDay = (date) => {
    return DateTime.fromISO(date).plus({days: 1})
}

const incrementWeek = (date) => {
    return DateTime.fromISO(date).plus({weeks: 1})
}

const incrementMonth = (date) => {
    return DateTime.fromISO(date).plus({months: 1})
}

module.exports = {
    incrementDay,
    incrementMonth,
    incrementWeek
}