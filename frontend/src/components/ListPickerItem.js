import { TouchableOpacity, Text } from "react-native";

export const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} className={`p-2 ${backgroundColor}`}>
        <Text className={`font-inter-medium text-lg ${textColor}`}>{item.name}</Text>
    </TouchableOpacity>
)