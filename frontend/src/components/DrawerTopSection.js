import { View, Text } from 'react-native'
import React from 'react'
import Avatar from './Avatar'
import { useSelector } from 'react-redux'

const DrawerTopSection = () => {
    const user = useSelector( state => state.user)
    const name = user.name
    const username = user.username
    const avatar = user.avatar
    return (
        <View className='flex-row px-3 py-5 mb-5 bg-primary items-center justify-start gap-x-7'>
            <View className='border-medium border-2 rounded-sm border-solid'>
                <Avatar avatar={avatar} />
            </View>
            <View className='flex-1 border-2 border-l-0 pr-3 border-solid border-medium h-20 justify-center'>
                <Text className='font-inter-semibold text-white text-base m-0 tracking-wider capitalize'>{name}</Text>
                <Text className='font-inter text-white'>{username}</Text>
            </View>
        </View>
    )
}

export default DrawerTopSection