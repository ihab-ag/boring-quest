import { View } from 'react-native'
import { convertValueToProgressbarWidth } from '../helpers/convertValueForProgressbarWidth'

const ProgressBar = ({ bg_color, value, total }) => {
    const width = convertValueToProgressbarWidth(value,total)
    return (
        <View className={`h-4 bg-white mt-0.5 border-primary border-2 rounded-sm border-solid`}>
            <View className={`flex-1 ${bg_color} ${width}`} />
        </View>
    )
}

export default ProgressBar