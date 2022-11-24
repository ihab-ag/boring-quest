import { afternoon, midnight, morning, night } from "../constants/Data"
import { convertISODateToDateArray } from "./convertISODateToDateArray"


export const getQuestData = (quests) => {
    const midnight_array = [...midnight]
    const morning_array = [...morning]
    const afternoon_array = [...afternoon]
    const night_array = [...night]
    const bar_data = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]
    const total_quests = quests.length
    let total_submitted = 0

    for (const quest of quests) {
        try {
            if (quest.submitted_on) {
                total_submitted++
                const date_array = convertISODateToDateArray(quest.submitted_on)
                const hour = date_array[3]
                const month = date_array[1]

                if (hour < 6)
                    midnight_array[hour] = { ...midnight_array[hour], value: midnight_array[hour].value + 1 }

                else if (hour < 12)
                    morning_array[hour - 6] = { ...morning_array[hour - 6], value: morning_array[hour - 6].value + 1 }

                else if (hour < 18)
                    afternoon_array[hour - 12] = { ...afternoon_array[hour - 12], value: afternoon_array[hour - 12].value + 1 }

                else
                    night_array[hour - 18] = { ...night_array[hour - 18], value: night_array[hour - 18].value + 1 }

                bar_data[month] = { ...bar_data[month], value: bar_data[month].value + 1 }
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return [midnight_array, morning_array, afternoon_array, night_array, total_quests, total_submitted, bar_data]
}