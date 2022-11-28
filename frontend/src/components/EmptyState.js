import { View, Text, Image } from 'react-native'
import React from 'react'

const EmptyState = () => {
    return (
        <View className='bg-primary items-center rounded-xl mt-2 flex-row justify-between px-4 border-2 border-medium'>
            <Text className='text-white font-inter-medium text-lg' >Nothing to see here !</Text>
            <Image className='h-20 w-20' resizeMode='cover' source={require('../../assets/empty_state.gif')} />
        </View>
    )
}

export default EmptyState