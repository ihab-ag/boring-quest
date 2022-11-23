import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const LoginFormLayout = ({ route, children }) => {
    return (
        <View className='bg-white w-full h-2/3 p-4 pb-0 rounded-t-2xl border-2 border-primary'>
            <Text className='text-2xl text-primary font-spaceMono-bold px-6 py-1 text-center' >{route.name}</Text>
                <ScrollView showsVerticalScrollIndicator={false} >
                    {children}
                </ScrollView>
        </View>
    )
}

export default LoginFormLayout