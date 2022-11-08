import { View, ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import SectionTitleText from './SectionTitleText'
import ProgressBar from './ProgressBar'
import mapQuests from '../helpers/mapQuests'
import { useDispatch } from 'react-redux'
import { setMessage } from '../redux/slices/globalMessageSlice'

const QuestsSection = ({navigation}) => {

    const dispatch = useDispatch()

    const [quests, setQuests] = useState([
        {id:1, title: 'dummy1', description: 'dummy desc', status:'in progress', difficulty: 'easy', date:new Date()},
        {id:2, title: 'dummy2', description: 'dummy desc something to get larger text bla shsg dhakd', status:'submitted', difficulty: 'hard', date:new Date()},
        {id:3, title: 'dummy3', description: 'dummy desc', status:'failed', difficulty: 'medium', date:new Date()},
        {id:4, title: 'dummy3', description: 'dummy desc', status:'in progress', difficulty: 'hard', date:new Date()},
    ])

    return (
        <View className='mt-3 flex-1'>
            <View className='mb-4'>
                <SectionTitleText>Daily</SectionTitleText>
                <ProgressBar bg_color='bg-easy' />
            </View>
            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} contentContainerStyle={{flex:1}}>
            { quests.length > 0 ? mapQuests(quests, (key, quest)=> {
            navigation.navigate('Quest', {quest})
            dispatch(setMessage('bad'))
            }) :
            (<Text> Empty State</Text>)}
            </ScrollView>
        </View>
    )
}

export default QuestsSection