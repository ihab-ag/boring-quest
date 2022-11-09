import { View, Text } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import TwoTransitioningImages from './TwoTransitioningImages'

const AnimatedBackground = () => {
    return (
        <>
            <Animated.View className='h-2/5 w-full absolute'>
                <TwoTransitioningImages />
            </Animated.View>
            <View className='w-full h-1/3 justify-center items-center bg-black/10'>
                <View className='mt-2 border-2 border-secondary rounded justify-center items-center p-4 pb-2 bg-white/60'>
                    <Text className='font-spaceMono-bold tracking-wider text-primary text-4xl'>Boring Quest</Text>
                </View>
            </View>
        </>
    )
}

export default AnimatedBackground