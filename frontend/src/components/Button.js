import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({onPress, title, color}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        className={`flex-1 flex-row ${color} p-2 justify-center items-center rounded`}>
            <Text className='text-white font-inter-bold text-base'>{title}</Text>
            <View className='flex-row h-full justify-around absolute right-0 gap-x-1'>
                <View className=' h-full w-2 bg-easy/90 rounded-sm' />
                <View className=' h-full w-2 bg-medium/90 rounded-sm' />
                <View className=' h-full w-2 bg-hard/90 rounded-sm' />
            </View>
        </TouchableOpacity>
    )
}

export default Button