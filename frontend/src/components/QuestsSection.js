import { View, ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import SectionTitleText from './SectionTitleText'
import ProgressBar from './ProgressBar'
import mapQuests from '../helpers/mapQuests'

const QuestsSection = ({ navigation, quests, name }) => {

    const submitted_quests = quests.filter((quest) => quest.status === 'submitted')

    return (
        <View className='mt-3 flex-1'>
            <View className='mb-4'>
                <SectionTitleText>{name}</SectionTitleText>
                <ProgressBar bg_color='bg-easy' value={submitted_quests.length} total={quests.length} />
            </View>
            {mapQuests(quests, (key, quest) => {
                navigation.navigate('Quest', { quest })
            })}
        </View>
    )
}

export default QuestsSection