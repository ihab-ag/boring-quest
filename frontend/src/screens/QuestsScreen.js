import React from 'react'
import CustomHeader from '../components/CustomHeader'
import QuestsScreenTopSection from '../components/QuestsScreenTopSection'
import QuestsSections from '../components/QuestsSections'

const QuestsScreen = ({ navigation, route }) => {
    return (
        <>
            <CustomHeader navigation={navigation} route={route} />
            <QuestsScreenTopSection />
            <QuestsSections />
        </>
    )
}

export default QuestsScreen