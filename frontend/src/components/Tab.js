import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const Tab = ({ onPress, title, selected=false }) => {

    return (
        <View className='flex-1'>
        <TouchableOpacity
            onPress={onPress}
            className={`border-2 justify-center items-center ${ selected ? ' bg-primary' : 'bg-white'} border-primary py-1 rounded`} >
            <Text className={`font-inter-bold text-base ${ selected ? 'text-white' : 'text-primary'}`}>{title}</Text>
        </TouchableOpacity>
        </View>
    )
}

export default Tab