import { SafeAreaView, StatusBar, View } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback } from 'react';


export default function App() {

  // Load fonts
  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/static/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/static/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/static/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/static/Inter-Bold.ttf'),
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

    <View onLayout={onLayoutRootView}>
      <SafeAreaView>
        <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
      </SafeAreaView>
    </View>
  );
}


