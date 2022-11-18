import { Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const DateModal = ({ setModalVisible, setFieldValue, due }) => {

    const onChange = (event, selectedDate) => {
        setModalVisible(Platform.OS === 'ios')
        setFieldValue('due', selectedDate)
    }

    return (
        <DateTimePicker
            value={due}
            mode='date'
            onChange={onChange}
            minimumDate={new Date()}
        />
    )
}

export default DateModal