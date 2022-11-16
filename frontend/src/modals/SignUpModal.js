import { View, Text } from 'react-native'
import React from 'react'
import LoginFormLayout from '../layouts/LoginFormLayout'
import LoginForm from '../forms/LoginForm'
import SignUpForm from '../forms/SignUpForm'

const SignUpModal = ({navigation, route}) => {
    return (
        <>
            <View className='w-full h-1/3' />
            <LoginFormLayout route={route}>
                <SignUpForm navigation={navigation} />
            </LoginFormLayout>
        </>
    )
}

export default SignUpModal