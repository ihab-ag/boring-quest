import React from 'react'
import DefaultScreen from '../layouts/DefaultScreen'
import QuestsSection from './QuestsSection'
import DatePickerSection from './DatePickerSection'

const QuestsSections = ({ navigation, quests }) => {
    
    return (
        <DefaultScreen>
            <DatePickerSection />
            <>
                {   
                    Object.entries(quests).map((quest) => 
                        quest[1].length > 0 && <QuestsSection navigation={navigation} name={quest.shift()} quests={quest[0]} />
                    )

                }
            </>
        </DefaultScreen>
    )
}

export default QuestsSections