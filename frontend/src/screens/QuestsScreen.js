import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CustomHeader from '../components/CustomHeader'
import Floater from '../components/Floater'
import UserProgressCard from '../components/UserProgressCard'
import QuestsSections from '../components/QuestsSections'

const QuestsScreen = ({ navigation, route }) => {
    const user = useSelector(state => state.user)
    const { year, month, day } = useSelector(state => state.date)
    const quests_obj = useSelector(state => state.quests.map)
    let questsMap = {}

        const daily_quests = []
        const weekly_quests = []
        const monthly_quests = []
        const todo_quests = []
        const adventures = []
        
        try {
            // sort current day quests into adjacent quest type array
            for (const quest in quests_obj[year][month][day]) {
                if (quests_obj[year][month][day][quest]['quest']['type'] === 'daily')
                    daily_quests.push(quests_obj[year][month][day][quest]['quest'])
                else if (quests_obj[year][month][day][quest]['quest']['type'] === 'weekly')
                    weekly_quests.push(quests_obj[year][month][day][quest]['quest'])
                else if (quests_obj[year][month][day][quest]['quest']['type'] === 'monthly')
                    monthly_quests.push(quests_obj[year][month][day][quest]['quest'])
                else if (quests_obj[year][month][day][quest]['quest']['type'] === 'todo')
                    todo_quests.push(quests_obj[year][month][day][quest]['quest'])
                else
                    adventures.push(quests_obj[year][month][day][quest]['quest'])
                
            }
            // store quests array in quests map object
            questsMap = {
                'daily': daily_quests,
                'weekly': weekly_quests,
                'monthly': monthly_quests,
                'todo': todo_quests,
                'adventures': adventures
            }
        }
        catch (error) {
            // empty state
        }

    return (
        <>
            <CustomHeader navigation={navigation} route={route} type='drawer' />
            <UserProgressCard user={user}/>
            <QuestsSections navigation={navigation} quests={questsMap} />
            <Floater navigation={navigation} />
        </>
    )
}

export default QuestsScreen