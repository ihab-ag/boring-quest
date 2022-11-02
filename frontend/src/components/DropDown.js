import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Entypo } from '@expo/vector-icons';
import MONTHS from '../constants/Months';

const DropDown = ({ onPress }) => {
    const { month } = useSelector(state => state.date)
    
    return (
        <TouchableOpacity onPress={onPress}>
            <View className='px-2 border-2 border-secondary rounded flex-row justify-between items-center'>
                <Text className='font-inter text-primary'>{MONTHS[month - 1].name}</Text>
                <Entypo name="chevron-small-down" size={25} color='#073B4C' />
            </View>
        </TouchableOpacity>
    )
}

export default DropDown