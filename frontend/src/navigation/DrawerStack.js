import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import QuestsScreen from "../screens/QuestsScreen";


const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='Quests' component={QuestsScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
}