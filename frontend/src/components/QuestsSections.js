import React from 'react'
import DefaultScreen from '../layouts/DefaultScreen'
import QuestsSection from './QuestsSection'
import DatePickerSection from './DatePickerSection'

const QuestsSections = () => {
    
    return (
        <DefaultScreen>
            <DatePickerSection />
            <QuestsSection />
        </DefaultScreen>
    )
}

export default QuestsSections