import { View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'

const DiamondIconContainer = ({style={}, children, size='sm'}) => {
    
    const dimensions = {
        'sm' : 'w-6 h-6',
        'md' : 'w-10 h-10',
        'lg' : 'w-14 h-14'
    }
    
    return (
        <Animated.View className='justify-center items-center rotate-45' style={style}>
            <View className={`bg-primary ${dimensions[size]} justify-center items-center`}>
                <View className='-rotate-45'>
                    {children}
                </View>
            </View>
        </Animated.View>
    )
}

export default DiamondIconContainer