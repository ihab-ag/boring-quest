import React from 'react'
import CustomHeader from '../components/CustomHeader'
import Floater from '../components/Floater'
import QuestsScreenTopSection from '../components/QuestsScreenTopSection'
import QuestsSections from '../components/QuestsSections'

const QuestsScreen = ({ navigation, route }) => {
    return (
        <>
            <CustomHeader navigation={navigation} route={route} type='drawer' />
            <QuestsScreenTopSection />
            <QuestsSections />
            <Floater navigation={navigation} />
        </>
    )
}

export default QuestsScreen