import { convertISODateToDateArray } from "./convertISODateToDateArray"
import { getMonthDays } from "./currentDate"

export const mapQuestToDays = (quests, quest) => {

    let new_quests = { ...quests }
    const quest_id = quest._id

    const start_date = convertISODateToDateArray(quest.created_on)
    const due_date = convertISODateToDateArray(quest.due)

    let start_day = start_date[0]
    let start_month = start_date[1]
    let start_year = start_date[2]

    const due_day = due_date[0]
    const due_month = due_date[1]
    const due_year = due_date[2]
    // if start month and due month are not equal we're gonna map the quests to till end of the year
    while (start_year !== due_year) {
        new_quests[start_year] = { ...new_quests[start_year] }
        for (let month = start_month; month <= 12; month++) {
            new_quests[start_year][month] = { ...new_quests[start_year][month] }
            for (let day = start_day; day <= getMonthDays(start_year, month); day++) {
                new_quests[start_year][month][day] = { ...new_quests[start_year][month][day] }
                new_quests[start_year][month][day][quest_id] = { quest }
            }
            // start of the month
            start_day = 1
        }
        // start of the year
        start_month = 1
        start_year += 1
    }
    // when we reach the due year we map the quests till the due month and day
    new_quests[start_year] = { ...new_quests[start_year] }
    for (let month = start_month; month <= due_month; month++) {
        new_quests[start_year][month] = { ...new_quests[start_year][month] }
        for (let day = start_day; day <= (month !== due_month ? getMonthDays(start_year, month) : due_day); day++) {
            new_quests[start_year][month][day] = { ...new_quests[start_year][month][day] }
            new_quests[start_year][month][day][quest_id] = { quest }
        }
        start_day = 1
    }


    return new_quests

}

export const mapQuestsToDays = (quests, questsArray) => {
    let new_quests = { ...quests }

    for (const quest of questsArray) {
        new_quests = mapQuestToDays(new_quests, quest)
    }

    return new_quests
}