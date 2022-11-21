import { axiosGetReq } from "./configs/axios.config"

const route = 'users/search/'

export const usersSearchReq = (data) => axiosGetReq (route + data)