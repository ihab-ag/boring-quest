import React from 'react'
import Animated from 'react-native-reanimated';

const FloaterMenu = ({ menuStyle, children }) => {
    return (
        <Animated.View className='justify-end items-center' style={menuStyle}>
            {children}
        </Animated.View>
    )
}

export default FloaterMenu