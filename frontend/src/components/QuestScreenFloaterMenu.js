import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FloaterMenuItem from './FloaterMenuItem';
import FloaterMenu from '../layouts/FloaterMenu';

const QuestScreenFloaterMenu = ({ menuStyle, menuItemStyle, navigation }) => {

    const navigateToQuest = () => {
        navigation.navigate('New Quest')
    }

    const navigateToAdventure = () => {
        navigation.navigate('AdventureModal')
    }

    return (
        <FloaterMenu menuStyle={menuStyle}>
            <FloaterMenuItem  title='Adventure' menuItemStyle={menuItemStyle} onPress={navigateToAdventure}>
                <MaterialCommunityIcons name="sword-cross" size={24} color="white" />
            </FloaterMenuItem>
            <FloaterMenuItem  title='Quest' menuItemStyle={menuItemStyle} onPress={navigateToQuest}>
                <FontAwesome5 name="scroll" size={18} color="white" />
            </FloaterMenuItem>
        </FloaterMenu>
    )
}

export default QuestScreenFloaterMenu