import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const DropDown = ({ onPress, value }) => {
    
    return (
        <TouchableOpacity onPress={onPress}>
            <View className='px-2 border-2 border-secondary rounded flex-row justify-between items-center'>
                <Text className='font-inter text-primary'>{value}</Text>
                <Entypo name="chevron-small-down" size={25} color='#073B4C' />
            </View>
        </TouchableOpacity>
    )
}

export default DropDown