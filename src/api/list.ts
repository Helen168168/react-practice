import axios from 'axios'


export const getResouceList = () => axios.get("/api/get").then(res =>  res);


