import { Text } from 'react-native'
import React from 'react'

const LabelText = ({ title, color }) => {
    return (
        <Text className={`font-inter-medium ${color} text-base`}>{title}</Text>
    )
}

export default LabelText