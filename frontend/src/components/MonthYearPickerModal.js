import { View, Modal, FlatList } from 'react-native'
import MONTHS from '../constants/Months';
import { Item } from './FlatlistPickerItem';
import ModalHeader from './ModalHeader';
import { useSelector, useDispatch } from 'react-redux'
import { setMonth, incrementYear, decrementYear } from '../redux/slices/dateSlice';
import Counter from './Counter';
import { currentYear } from '../helpers/currentDate';

const MonthYearPickerModal = ({ modalVisible, setModalVisible }) => {

    const { year, month } = useSelector(state => state.date)
    const dispatch = useDispatch()

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === month ? 'bg-primary' : 'bg-white'
        const color = item.id === month ? 'text-white' : 'text-primary'

        return (
            <Item
                item={item}
                onPress={() => {
                    dispatch(setMonth(item.id))
                }}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        )
    }
    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View className='flex-1 flex-row justify-center items-center p-6 bg-black/50'>
                <View className='flex-1 border-secondary border-2 rounded'>
                    <ModalHeader onPress={() => setModalVisible(false)} title='Select Month and Year' />
                    <View className='h-56 bg-white'>
                        <Counter count={year}
                            increment={() => dispatch(incrementYear())}
                            decrement={() => dispatch(decrementYear())}
                            decrementCondition={currentYear < year} />
                        <FlatList
                            data={MONTHS}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            extraData={month}
                            initialScrollIndex={month}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default MonthYearPickerModal