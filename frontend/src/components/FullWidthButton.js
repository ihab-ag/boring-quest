import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const FullWidthButton = ({ title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} className='p-4 w-full bg-primary items-center justify-center' >
            <Text className='font-inter-semibold text-white text-lg'>{title}</Text>
        </TouchableOpacity >
    )
}

export default FullWidthButton