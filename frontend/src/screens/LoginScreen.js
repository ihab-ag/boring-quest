import { View, Text, TouchableOpacity } from 'react-native'
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
                <LoginForm />
            </LoginFormLayout>
            <StatusBar translucent />
        </>
    )
}

export default LoginScreen