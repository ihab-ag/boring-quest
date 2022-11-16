import axios from "axios"
import store from "../../redux/store"

const BASE_URL = '192.168.44.177:8000/'

const TOKEN = store.getState().auth.token

const HEADERS = {
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    }
}

