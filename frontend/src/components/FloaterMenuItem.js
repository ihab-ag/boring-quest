import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'

const FloaterMenuItem = ({ menuItemStyle, children, title, onPress }) => {
    return (
        <TouchableOpacity
            className='justify-center items-center mb-3'
            onPress={onPress}
        >
            <Animated.View
                style={menuItemStyle}
                className='bg-primary w-10 h-10 justify-center items-center mb-2'>
                <View className='-rotate-45'>
                    {children}
                </View>
            </Animated.View>
            <Text className='text-secondary font-inter-medium text-xs'>{title}</Text>
        </TouchableOpacity>
    )
}

export default FloaterMenuItem