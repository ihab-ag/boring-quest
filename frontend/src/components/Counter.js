import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Counter = ({ decrement, increment, count }) => {
    return (
        <View className='bg-white py-4 border-b-2 mb-2 border-medium flex-row justify-around'>
            <TouchableOpacity onPress={decrement}>
                <AntDesign name="caretleft" size={24} color={'#073B4C'} />
            </TouchableOpacity>
            <Text className='text-lg text-primary font-inter-medium'>{count}</Text>
            <TouchableOpacity onPress={increment}>
                <AntDesign name="caretright" size={24} color="#073B4C" />
            </TouchableOpacity>
        </View>
    )
}

export default Counter