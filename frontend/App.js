import { Text, View } from 'react-native'
import { useFonts } from 'expo-font'

export default function App() {

  // Load fonts
  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/static/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/static/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/static/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/static/Inter-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }


  return (
    <View>

    </View>
  );
}


