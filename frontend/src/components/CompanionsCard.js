import { View, Text } from 'react-native'
import React from 'react'
import TopColoredSection from '../layouts/TopColoredSection'
import Avatar from '../components/Avatar'
import ProgressBar from '../components/ProgressBar'

const CompanionsCard = ({user}) => {
    const health = user.health
    const level = user.level
    const exp = user.exp
    const total_exp = level * 5
    const username = user.username
  return (
    <View className={`bg-primary w-full px-6 py-3 flex-row`}>
                <Avatar />
                <View className='flex-1 ml-6 justify-around'>
                    <View className='flex-row justify-between items-end'>
                        <Text className='font-inter-medium text-white text-lg capitalize'>{username}</Text>
                        <Text className='font-inter-medium text-white text-base'>lv. {level}</Text>
                    </View>
                    <ProgressBar bg_color='bg-hard' value={health} total={1000} />
                    <ProgressBar bg_color='bg-medium' value={exp} total={total_exp} />

                </View>
            </View>
  )
}

export default CompanionsCard