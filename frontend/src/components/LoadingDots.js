import { View, Text } from 'react-native'
import React from 'react'
import LoadingDot from './LoadingDot'
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    withRepeat
} from 'react-native-reanimated';
import { useEffect } from 'react';

const LoadingDots = () => {

    const dotPosition = useSharedValue(-10)
    const viewRotation = useSharedValue(0)

    useEffect(() => {
        dotPosition.value = withRepeat(
            withTiming(10, {
                duration: 400
            }),
            -1, true)

        viewRotation.value = withRepeat(
            withTiming(720, {
                duration: 5000
            }),
            -1, true)
    }, [])


    const endDotsStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: dotPosition.value }]
        }
    })

    const middleDotStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: dotPosition.value * -1 }]
        }
    })

    const viewStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: viewRotation.value + 'deg' }],
        }
    })

    return (
        <Animated.View className='flex-row' style={viewStyle}>
            <LoadingDot color='easy' style={endDotsStyle} />
            <LoadingDot color='medium' style={middleDotStyle} />
            <LoadingDot color='hard' style={endDotsStyle} />
        </Animated.View>
    )
}

export default LoadingDots