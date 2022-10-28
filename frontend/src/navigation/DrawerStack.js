import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import QuestsScreen from "../screens/QuestsScreen";


export const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
    return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Quests" useLegacyImplementation screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Quests" component={QuestsScreen} />
        </Drawer.Navigator>
    </NavigationContainer>)
}

