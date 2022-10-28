import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "../components/CustomDrawer";
import QuestsScreen from "../screens/QuestsScreen";
import { Octicons } from '@expo/vector-icons';

const screens = {
    'Quests': QuestsScreen,
}

export const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
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
                    drawerStyle:{  
                        backgroundColor: '#118AB2'
                    },
                    drawerItemStyle:{
                        padding: 4,
                    },
                }}>
                {
                    Object.keys(screens).map((name)=> (
                    <Drawer.Screen key={name} name={name} component={screens[name]} />
                    ))
                }
            </Drawer.Navigator>
        </NavigationContainer>)
}

