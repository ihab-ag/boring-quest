import React from 'react'
import DefaultScreen from '../layouts/DefaultScreen'
import QuestsSection from './QuestsSection'
import DatePickerSection from './DatePickerSection'

const QuestsSections = ({navigation}) => {
    
    return (
        <DefaultScreen>
            <DatePickerSection />
            <QuestsSection navigation={navigation} />
            <QuestsSection />
            <QuestsSection />
        </DefaultScreen>
    )
}

export default QuestsSections