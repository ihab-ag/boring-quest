import { View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setMessage } from '../redux/slices/globalMessageSlice'

const MessageFloater = () => {

    const position = useSharedValue(-50)
    const display = useSharedValue('none')

    const config = {
        duration: 500
    }

    useEffect(() => {
        display.value = 'flex'
        position.value = withTiming(0, config, () => {
            position.value = withDelay(1000, withTiming(-50, config, () => {
                display.value = 'none'
            }))
        })
    })


    const viewStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: position.value
            }],
            elevation: 100,
            display: display.value
        }
    })
     
    return (
        <View className='justify-center items-center absolute w-full my-6'>
            <Animated.View className={`justify-center w-fit items-center bg-hard p-2 rounded`} style={viewStyle}>
                <Animated.Text className='font-inter-medium size-sm text-secondary/90'>An Error occurred</Animated.Text>
            </Animated.View>
        </View>

    )
}

export default MessageFloater