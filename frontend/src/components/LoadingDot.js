import { Entypo } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

const colors = {
    easy: '#06D6A0',
    medium: '#FFD166',
    hard: '#EF476F'
}

const LoadingDot = ({ color, style }) => {

    return (
        <Animated.View className='-m-2 ' style={style}>
            <Entypo name="dot-single" size={32} color={colors[color]} />
        </Animated.View>
    )
}

export default LoadingDot