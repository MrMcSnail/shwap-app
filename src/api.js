import axios from 'axios'

const shwapApi = axios.create({baseURL: "https://shwap-marketplace.herokuapp.com/api"})

export default shwapApi;