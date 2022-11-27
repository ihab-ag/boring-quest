import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
const CheckBox = ({ value, setValue }) => {
    return (
        <TouchableOpacity 
        onPress={()=> setValue(!value)}
        className='p-2 mt-2 flex-row gap-x-2 items-center justify-start'>
            <View className={`w-5 h-5 border-2 border-secondary rounded ${value ? 'bg-secondary' : 'bg-white'}`}>
                <Entypo name="check" size={16} color="white" />
            </View>
            <Text className='font-inter-medium text-primary text-base'>Remember me</Text>

        </TouchableOpacity>
    )
}

export default CheckBox