import { createStackNavigator } from "@react-navigation/stack"
import CompanionsScreen from "../screens/CompanionsScreen"

const CompanionsNavigator = createStackNavigator()

const screens = {
    'Companions': CompanionsScreen
}


const CompanionsStack = () => {

    return (
        <CompanionsNavigator.Navigator initialRouteName='Companions' screenOptions={{ headerShown: false }}>
            <CompanionsNavigator.Group>
                {
                    Object.keys(screens).map((name) => (
                        <CompanionsNavigator.Screen key={name} name={name} component={screens[name]} />
                    ))
                }
            </CompanionsNavigator.Group>
        </CompanionsNavigator.Navigator>
    )
}

export default CompanionsStack
