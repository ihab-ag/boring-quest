import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const DifficultyTab = ({ name, color, text_color, onPress }) => {
    return (
        <TouchableOpacity className={`${color} p-2 w-28 justify-center items-center rounded`}
            onPress={onPress} >
            <Text className={`font-inter-bold ${text_color}`} > {name} </Text>
        </TouchableOpacity>
    )
}

export default DifficultyTab