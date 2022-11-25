import { Pressable, Text, View } from "react-native"


const DayTab = ({ day, backgroundColor, onPress }) => {

    return (
        <Pressable onPress={onPress}>
            <View className={`w-11 h-11 mr-2 ${backgroundColor} rounded justify-center items-center`}>
                <Text className='font-inter text-lg text-white'>{day}</Text>
            </View>
        </Pressable>
    )
}

export default DayTab