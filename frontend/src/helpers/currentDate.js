const currentdate = new Date()

export const currentDay = currentdate.getDate()

export const currentMonth = currentdate.getMonth() + 1

export const currentYear = currentdate.getFullYear()

export const getMonthDays = ( year, month ) => {
    const date = new Date(year, month, 0)
    return date.getDate()
}