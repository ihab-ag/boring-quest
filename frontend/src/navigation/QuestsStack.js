import { createStackNavigator } from '@react-navigation/stack'
import AdventureModal from '../modals/AdventureModal'
import QuestModal from '../modals/QuestModal'
import QuestScreen from '../screens/QuestScreen'
import QuestsScreen from '../screens/QuestsScreen'

const screens = {
    'Quests ': QuestsScreen,
    'Quest' : QuestScreen
}

const modals = {
    'New Quest': QuestModal,
    'New Adventure': AdventureModal,
}

const QuestsStack = createStackNavigator()

const QuestsNavigator = () => {

    return (
        <QuestsStack.Navigator initialRouteName='Quests' screenOptions={{ headerShown: false }}>
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
                        <QuestsStack.Screen key={name} name={name} component={modals[name]} />
                    ))
                }
            </QuestsStack.Group>
        </QuestsStack.Navigator>
    )
}

export default QuestsNavigator