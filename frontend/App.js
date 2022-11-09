import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback } from 'react';
import { Drawer } from './src/navigation/DrawerStack';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import MessageFloater from './src/components/MessageFloater';
import LoginStack from './src/navigation/LoginStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  // Load fonts
  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/static/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/static/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/static/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/static/Inter-Bold.ttf'),
    'SpaceMono-Bold': require('./assets/fonts/static/SpaceMono-Bold.ttf')
  })

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded)
      await SplashScreen.hideAsync();

  }, [fontsLoaded]);

  if (!fontsLoaded)
    return null;


  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Drawer /> */}
        <LoginStack />
        {/* <MessageFloater /> */}
        <View onLayout={onLayoutRootView}>
          <SafeAreaView>
            {/* <StatusBar backgroundColor='#fff' barStyle='dark-content' /> */}
          </SafeAreaView>
        </View>
      </NavigationContainer>
    </Provider>
  );
}


