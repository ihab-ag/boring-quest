import { View, ScrollView } from 'react-native'
import React from 'react'
import SectionTitleText from './SectionTitleText'
import ProgressBar from './ProgressBar'
import QuestCard from './QuestCard'

const QuestsSection = () => {
    return (
        <View className='mt-3 h-72'>
            <View className='mb-4'>
                <SectionTitleText>Daily</SectionTitleText>
                <ProgressBar color='easy' />
            </View>
            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
                <QuestCard difficulty='hard' />
                <QuestCard difficulty='easy' />
                <QuestCard difficulty='medium' />
                <QuestCard difficulty='secondary' />
            </ScrollView>
        </View>
    )
}

export default QuestsSection