import { View, Modal, FlatList } from 'react-native'
import MONTHS from '../constants/Months';
import { Item } from '../components/ListPickerItem';
import ModalHeader from '../components/ModalHeader';
import { useSelector, useDispatch } from 'react-redux'
import { setMonth, incrementYear, decrementYear } from '../redux/slices/dateSlice';
import Counter from '../components/Counter';
import ModalLayout from '../layouts/ModalLayout';

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
        <ModalLayout modalVisible={modalVisible}>
            <ModalHeader onPress={() => setModalVisible(false)} title='Select Month and Year' />
            <View className='h-56 bg-white'>
                <Counter count={year}
                    increment={() => dispatch(incrementYear())}
                    decrement={() => dispatch(decrementYear())} 
                    />
                <FlatList
                    data={MONTHS}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={month}
                    initialScrollIndex={month - 1}
                />
            </View>
        </ModalLayout>
    )
}

export default MonthYearPickerModal