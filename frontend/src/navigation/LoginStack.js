import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'

const LoginNavigator = createStackNavigator()

const screens = {
    'Login': LoginScreen
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

        </LoginNavigator.Navigator>
    )
}

export default LoginStack
