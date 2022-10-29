import { View, Text } from 'react-native'
import React from 'react'

const ProgressBar = ({color}) => {
    return (
        <View className='h-2.5 bg-white mt-0.5'>
            <View className={`h-2.5 bg-${color} w-2/5`} />
        </View>
    )
}

export default ProgressBar