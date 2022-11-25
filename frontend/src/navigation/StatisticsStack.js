import { createStackNavigator } from '@react-navigation/stack'
import StatisticsScreen from '../screens/StatisticsScreen'

const screens = {
    'Statistics ': StatisticsScreen
}

const StatisticsNavigator = createStackNavigator()

const StatisticsStack = () => {
    return (
        <StatisticsNavigator.Navigator initialRouteName='Statistics' screenOptions={{ headerShown: false }}>
            <StatisticsNavigator.Group>
                {
                    Object.keys(screens).map((name) => (
                        <StatisticsNavigator.Screen key={name} name={name} component={screens[name]} />
                    ))
                }
            </StatisticsNavigator.Group>
        </StatisticsNavigator.Navigator>
    )
}

export default StatisticsStack