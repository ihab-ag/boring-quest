import { View} from 'react-native'
import React from 'react'
import { useSelector} from 'react-redux'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated'
import { useEffect } from 'react'

const MessageFloater = () => {
    
    const { status } = useSelector(state => state.globalMessage)

    const position = useSharedValue(-50)

    const config = {
        duration: 500
    }

    useEffect(() => {
            position.value = withTiming(0, config,()=>{
                position.value = withDelay(1000,withTiming(-50,config))
            })
    },[status])


    const viewStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: position.value
             }],
        }
    })

    const messageOutput = {
        good: {
            message: "All good and nothing to do",
            color: "bg-hard"
        },
        welcome: {
            message: "Welcome!",
            color: "bg-medium"
        },
        bad: {
            message: "All bad",
            color: "bg-easy"
        },
    }
    return (
        <View className='justify-center items-center absolute w-full my-6'>
                <Animated.View className={`justify-center w-fit items-center ${messageOutput[status].color} p-2 rounded`} style={viewStyle}>
                    <Animated.Text className='font-inter-medium size-sm text-secondary/90'>{messageOutput[status].message}</Animated.Text>
                </Animated.View>
        </View>

    )
}

export default MessageFloater