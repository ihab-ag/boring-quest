const { axiosPutReq } = require("./configs/axios.config");

const route = 'quests/submit'

export const putSubmit = (id, data) => axiosPutReq(`${route}/${id}`, data)