import { View } from 'react-native'
import React from 'react'

const TopColoredSection = ({ color, children, flex }) => {
    return (
        <View className={`${color} w-full px-6 pb-4 pt-2 ${flex}`}>
            {children}
        </View>
    )
}

export default TopColoredSection