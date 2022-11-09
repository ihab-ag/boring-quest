import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const LoginFormLayout = ({ route, children }) => {
    return (
        <View className='bg-white w-full h-2/3 p-1 pb-0 rounded-t-2xl'>
            <Text className='text-2xl text-primary font-spaceMono-bold px-6 py-1' >{route.name}</Text>
            <View className='bg-white border-4 p-2 border-primary border-b-0 flex-1 rounded-t-2xl'>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {children}
                </ScrollView>
            </View>
        </View>
    )
}

export default LoginFormLayout