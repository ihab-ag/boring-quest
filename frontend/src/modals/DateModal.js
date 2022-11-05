import { Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const DateModal = ({ setModalVisible, setFieldValue, date }) => {

    const onChange = (event, selectedDate) => {
        setModalVisible(Platform.OS === 'ios')
        setFieldValue('date', selectedDate)
    }

    return (
        <DateTimePicker
            value={date}
            mode='date'
            onChange={onChange}
            minimumDate={new Date()}
        />
    )
}

export default DateModal