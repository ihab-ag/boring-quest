import { View } from 'react-native'
import React from 'react'

const ProgressBar = ({ color }) => {
    return (
        <View className={`h-4 bg-white mt-0.5 border-primary border-2 rounded-sm border-solid`}>
            <View className={`flex-1 bg-${color} w-2/5`} />
        </View>
    )
}

export default ProgressBar