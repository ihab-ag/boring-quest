import React, { useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import QuestForm from '../forms/QuestForm'

const QuestModal = ({ navigation, route }) => {

    return (
        <>
            <CustomHeader navigation={navigation} route={route} type='modal' />
            <QuestForm />
        </>
    )
}

export default QuestModal