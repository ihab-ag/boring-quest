import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const ModalHeader = ({ title, onPress }) => {
    return (
        <View className='bg-primary flex-row py-2 px-3 justify-between items-center'>
            <Text className='text-lg text-white font-inter-medium'>{title}</Text>
            <TouchableOpacity
                onPress={onPress}
            >
                <AntDesign name="close" size={26} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default ModalHeader