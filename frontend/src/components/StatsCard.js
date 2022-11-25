import { View, Text } from 'react-native'
import React from 'react'

const StatsCard = ({user, quests}) => {
    return (
        <View className='rounded-lg border-2 border-primary mt-4 '>
            <View className='p-2 justify-between flex-row'>
                <Text className='font-inter-medium text-lg text-secondary capitalize'>{user.name}</Text>
                <Text className='font-inter-medium text-lg text-secondary capitalize'>{user.type}</Text>
            </View>
            <View className='p-2 justify-between flex-row'>
                <Text className='font-inter-medium text-lg text-secondary capitalize'>submitted quests</Text>
                <Text className='font-inter-medium text-lg text-easy capitalize'>{quests.total_submitted}/{quests.total_quests}</Text>
            </View>
            <View className='p-2 justify-between flex-row'>
                <Text className='font-inter-medium text-lg text-secondary capitalize'>deaths</Text>
                <Text className='font-inter-medium text-lg text-hard capitalize'>{user.deaths}</Text>
            </View>
        </View>
    )
}

export default StatsCard