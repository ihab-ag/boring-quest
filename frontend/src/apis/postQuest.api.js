const { axiosPostReq } = require("./configs/axios.config");

const route = 'quests'

export const postQuest = (data) => axiosPostReq(route, data)