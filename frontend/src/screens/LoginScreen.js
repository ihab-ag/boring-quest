import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AnimatedBackground from '../components/AnimatedBackground'
import LoginFormLayout from '../layouts/LoginFormLayout'
import LoginForm from '../forms/LoginForm'

const LoginScreen = ({ navigation, route }) => {

    return (
        <>
            <AnimatedBackground />
            <LoginFormLayout route={route}>
                <LoginForm navigation={navigation} />
            </LoginFormLayout>
            <StatusBar backgroundColor='#fff0' barStyle='dark-content' />
        </>
    )
}

export default LoginScreen