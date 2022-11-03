import { createStackNavigator } from '@react-navigation/stack'
import QuestsScreen from '../screens/QuestsScreen'

const screens = {
    'Quests': QuestsScreen,
}

const modals = {
    
}

const QuestsStack = createStackNavigator()

const QuestsNavigator = () => {

    return (
        <QuestsStack.Navigator screenOptions={{ headerShown: false }}>
            <QuestsStack.Group>
                {
                    Object.keys(screens).map((name) => (
                        <QuestsStack.Screen key={name} name={name} component={screens[name]} />
                    ))
                }
            </QuestsStack.Group>
            <QuestsStack.Group screenOptions={{ presentation: 'modal' }}>
            {
                    Object.keys(modals).map((name) => (
                        <QuestsStack.Screen key={name} name={name+'s'} component={screens[name]} />
                    ))
                }
            </QuestsStack.Group>
        </QuestsStack.Navigator>
    )
}

export default QuestsNavigator