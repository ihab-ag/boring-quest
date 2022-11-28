import React, { useEffect } from 'react'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated'

const TwoTransitioningImages = () => {
    const opacity = useSharedValue(1)

    const config = {
        duration:1000
    }

    const imageStyle = useAnimatedStyle(() =>{
        return{
        opacity: withTiming(opacity.value,config)
    }
    })

    const toggleOpacity = () => {
        opacity.value = opacity.value === 0 ? 1 : 0
    }

    setInterval(toggleOpacity,5000)
    
    return (
        <>
            <Animated.Image className='h-full w-full absolute'  source={require('../../assets/city_bg.gif')} />
            <Animated.Image className='h-full w-full absolute' style={imageStyle} source={require('../../assets/lake_bg.gif')} />
        </>
    )
}

export default TwoTransitioningImages