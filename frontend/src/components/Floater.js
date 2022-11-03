import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import QuestScreenFloaterMenu from './QuestScreenFloaterMenu';
import DiamondIconContainer from './DiamondIconContainer';

const Floater = () => {

    return (
        <View className='absolute right-6 bottom-8 justify-center items-center'>
            <QuestScreenFloaterMenu menuItemStyle={menuItemStyle} menuStyle={menuStyle} />
            <TouchableOpacity onPress={toggleMenu} >
                <DiamondIconContainer style={floaterStyle} size='lg'>
                    <AntDesign name="plus" size={42} color="white" />
                </DiamondIconContainer>
            </TouchableOpacity>
        </View>
    )
}

export default Floater