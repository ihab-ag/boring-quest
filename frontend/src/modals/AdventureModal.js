import React, { useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import AdventureForm from '../forms/AdventureForm'
import QuestForm from '../forms/QuestForm'

const AdventureModal = ({ navigation, route }) => {

    return (
        <>
            <CustomHeader navigation={navigation} route={route} type='modal' />
            <AdventureForm navigation={navigation}/>
        </>
    )
}

export default AdventureModal