import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';
import { DEVICE_HEIGHT } from '../constants/Dimensions';
import QuestScreenFloaterMenu from './QuestScreenFloaterMenu';
import DiamondIconContainer from './DiamondIconContainer';

const Floater = ({navigation}) => {

    // animation values
    const rotation = useSharedValue(45)
    const bottom = useSharedValue(-30)
    const height = useSharedValue(0)
    const opacity = useSharedValue(0)
    // animation configuration
    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    }
    // animatable styles
    const floaterStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: withTiming(rotation.value + 'deg', config) }],
        }
    })
    const menuItemStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: withTiming(rotation.value - 45 + 'deg', config) }],
        }
    })
    const menuStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: '#fff4',
            height: withTiming(height.value, config),
            bottom: withTiming(bottom.value, config),
            opacity: withTiming(opacity.value, { duration: 700 })
        }
    })
        // close and open floater menu
    const toggleMenu = () => {
        // change value depending on rotation value to keep values in sync
        rotation.value = rotation.value === 45 ? -270 : 45
        height.value = rotation.value === 45 ? DEVICE_HEIGHT * 0.2 : 0
        bottom.value = rotation.value === 45 ? 0 : -40
        opacity.value = rotation.value === 45 ? 1 : 0
    }

    return (
        <View className='absolute right-6 bottom-8 justify-center items-center'>
            <QuestScreenFloaterMenu menuItemStyle={menuItemStyle} menuStyle={menuStyle} navigation={navigation} />
            <TouchableOpacity onPress={toggleMenu} >
                <DiamondIconContainer style={floaterStyle} size='lg'>
                    <AntDesign name="plus" size={42} color="white" />
                </DiamondIconContainer>
            </TouchableOpacity>
        </View>
    )
}

export default Floater