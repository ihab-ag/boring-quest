import React from 'react'
import { useSelector } from 'react-redux'
import CustomHeader from '../components/CustomHeader'
import Floater from '../components/Floater'
import QuestsScreenTopSection from '../components/QuestsScreenTopSection'
import QuestsSections from '../components/QuestsSections'
import { mapQuestToDays } from '../helpers/mapQuestToDays'

const QuestsScreen = ({ navigation, route }) => {

    const { year, month, day } = useSelector(state => state.date)

    const quests = useSelector(state => state.quests)
    let quests_obj = {}
    for (const quest of quests.array) {
        quests_obj = mapQuestToDays(quests_obj, quest)
    }
    let questsMap = {}
    const daily_quests = []
    const weekly_quests = []
    const monthly_quests = []
    const todo_quests = []

    try {
        for (const quest in quests_obj[year][month][day]) {
            if (quests_obj[year][month][day][quest]['quest']['type'] === 'daily')
                daily_quests.push(quests_obj[year][month][day][quest]['quest'])
            else if (quests_obj[year][month][day][quest]['quest']['type'] === 'weekly')
                weekly_quests.push(quests_obj[year][month][day][quest]['quest'])
            else if (quests_obj[year][month][day][quest]['quest']['type'] === 'monthly')
                monthly_quests.push(quests_obj[year][month][day][quest]['quest'])
            else if (quests_obj[year][month][day][quest]['quest']['type'] === 'todo')
                todo_quests.push(quests_obj[year][month][day][quest]['quest'])
        }
        questsMap = {
            'daily': daily_quests,
            'weekly': weekly_quests,
            'monthly': monthly_quests,
            'todo': todo_quests
        }
    }
    catch (error) {
        // empty state
    }

    return (
        <>
            <CustomHeader navigation={navigation} route={route} type='drawer' />
            <QuestsScreenTopSection />
            <QuestsSections navigation={navigation} quests={questsMap} />
            <Floater navigation={navigation} />
        </>
    )
}

export default QuestsScreen