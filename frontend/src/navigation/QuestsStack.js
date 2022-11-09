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

const QuestsNavigator = createStackNavigator()

const QuestsStack = () => {

    return (
        <QuestsNavigator.Navigator initialRouteName='Quests' screenOptions={{ headerShown: false }}>
            <QuestsNavigator.Group>
                {
                    Object.keys(screens).map((name) => (
                        <QuestsNavigator.Screen key={name} name={name} component={screens[name]} />
                    ))
                }
            </QuestsNavigator.Group>
            <QuestsNavigator.Group screenOptions={{ presentation: 'modal' }}>
            {
                    Object.keys(modals).map((name) => (
                        <QuestsNavigator.Screen key={name} name={name} component={modals[name]} />
                    ))
                }
            </QuestsNavigator.Group>
        </QuestsNavigator.Navigator>
    )
}

export default QuestsStack