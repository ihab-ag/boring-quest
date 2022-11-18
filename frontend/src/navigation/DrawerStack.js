import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "../components/CustomDrawer";
import { Octicons } from '@expo/vector-icons';
import QuestsStack from "./QuestsStack";
import LoginStack from "./LoginStack";
import StatisticsStack from "./StatisticsStack";

const screens = {
    'Quests': QuestsStack,
    'Statistics': StatisticsStack,
}

export const DrawerNavigator = createDrawerNavigator()

export const Drawer = () => {
    return (
        <DrawerNavigator.Navigator
            initialRouteName="Quests"
            drawerContent={props => <CustomDrawer {...props} />}
            useLegacyImplementation
            screenOptions={{
                headerShown: false,
                drawerIcon: () => (<Octicons name="diamond" size={24} color="white" />),
                drawerLabelStyle: {
                    marginLeft: -16,
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'Inter-Medium'
                },
                drawerActiveBackgroundColor: '#073B4C',
                drawerStyle: {
                    backgroundColor: '#118AB2'
                },
                drawerItemStyle: {
                    padding: 4,
                },
            }}>
            {
                Object.keys(screens).map((name) => (
                    <DrawerNavigator.Screen key={name} name={name} component={screens[name]} />
                ))
            }
        </DrawerNavigator.Navigator>)
}

