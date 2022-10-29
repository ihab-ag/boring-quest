import { View, Text } from 'react-native'
import React from 'react'
import Avatar from './Avatar'

const DrawerTopSection = () => {
    return (
        <View className='flex-row px-3 py-5 mb-5 bg-primary items-center justify-start gap-x-7'>
            <View className='border-medium border-2 rounded-sm border-solid'>
                <Avatar/>
            </View>
            <View className='border-2 border-l-0 pr-3 border-solid border-medium h-20 justify-center'>
                <Text className='font-inter-semibold text-lg text-white m-0 tracking-wider'>Username</Text>
                <Text className='font-inter text-md text-white'>Adventurer</Text>
            </View>
        </View>
    )
}

export default DrawerTopSection