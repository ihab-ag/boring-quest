import { View, Text } from 'react-native'
import React from 'react'
import Avatar from './Avatar'
import ProgressBar from './ProgressBar'
import TopColoredSection from '../layouts/TopColoredSection'

const UserProgressCard = ({user}) => {
    
    const health = user.health
    const level = user.level
    const exp = user.exp
    const total_exp = level * 5
    const avatar = user.avatar
    
    return (
        <TopColoredSection color='bg-primary' flex='flex-row'>
            <Avatar avatar={avatar}/>
            <View className='flex-1 ml-6 justify-around'>
                <View>
                    <View className='flex-row justify-between items-end'>
                        <Text className='font-inter-medium text-white text-base'>Health</Text>
                        <Text className='font-inter text-white text-sm'>{health}/1000</Text>
                    </View>
                    <ProgressBar bg_color='bg-hard' value={health} total={1000}/>
                </View>
                <View>
                    <View className='flex-row justify-between items-end'>
                        <Text className='font-inter-medium text-white text-base'>lv. {level}</Text>
                        <Text className='font-inter text-white text-sm'>{exp}/{total_exp}</Text>
                    </View>
                    <ProgressBar bg_color='bg-medium' value={exp} total={total_exp} />
                </View>
            </View>
        </TopColoredSection>
    )
}

export default UserProgressCard