
const getMonthDaysArray = (days) => {
    const arr = []
    for (let i = 1; i <= days; i++)
        arr.push(i)
    return arr
}

export default getMonthDaysArray