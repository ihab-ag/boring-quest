import { createStackNavigator } from '@react-navigation/stack'
import { FastField } from 'formik'
import SignUpModal from '../modals/SignUpModal'
import LoginScreen from '../screens/LoginScreen'

const LoginNavigator = createStackNavigator()

const screens = {
    'Login': LoginScreen
}

const modals = {
    'Sign Up': SignUpModal,
}

const LoginStack = () => {

    return (
        <LoginNavigator.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <LoginNavigator.Group>
                {
                    Object.keys(screens).map((name) => (
                        <LoginNavigator.Screen key={name} name={name} component={screens[name]} />
                    ))
                }
            </LoginNavigator.Group>
            <LoginNavigator.Group screenOptions={{ presentation: 'transparentModal' }}>
                {
                    Object.keys(modals).map((name) => (
                        <LoginNavigator.Screen key={name} name={name} component={modals[name]}  />
                    ))
                }
            </LoginNavigator.Group>
        </LoginNavigator.Navigator>
    )
}

export default LoginStack
