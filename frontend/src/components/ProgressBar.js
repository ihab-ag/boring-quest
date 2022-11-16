import { View } from 'react-native'

const ProgressBar = ({ bg_color }) => {
    
    return (
        <View className={`h-4 bg-white mt-0.5 border-primary border-2 rounded-sm border-solid`}>
            <View className={`flex-1 ${bg_color} w-2/5`} />
        </View>
    )
}

export default ProgressBar