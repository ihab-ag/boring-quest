
export const convertISODateToDateArray = (iso_date) => {

    const date = new Date(iso_date)

    const day = date.getDate()

    const month = date.getMonth()+1

    const year = date.getFullYear()

    const hour = date.getHours()

    const date_array = [day, month, year, hour]

    return date_array
}