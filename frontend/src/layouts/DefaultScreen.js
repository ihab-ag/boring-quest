import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const DefaultScreen = ({ children }) => {
    return (
        <View className='flex-1 bg-screen-bg px-6 pb-1'>
            <ScrollView showsVerticalScrollIndicator={false}>
            {children}
            </ScrollView>
        </View>
    )
}

export default DefaultScreen