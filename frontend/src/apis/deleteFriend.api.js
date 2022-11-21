const { axiosDeleteReq } = require("./configs/axios.config");

const route = 'users/friends/'

export const deleteFriend = (data) => axiosDeleteReq(route+data, null)