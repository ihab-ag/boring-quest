import axios from "axios"
import store from "../../redux/store"

const BASE_URL = 'http://192.168.44.177:8000/'

const TOKEN = store.getState().auth.token

const HEADERS = {
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    }
}

export const axiosPostReq = async (route, data) => {
    try {
        return await axios.post(BASE_URL + route, data, HEADERS)
    } catch (error) {
        return error;
    }
}