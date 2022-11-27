import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SwipableActionButton = ({ color, onPress, title }) => {
    return (
        <TouchableOpacity className={`${color} w-1/5 justify-center items-center`} onPress={onPress}>
            <Text className='text-white font-inter-medium text-4xl'>{title}</Text>
        </TouchableOpacity>
    )
}

export default SwipableActionButton