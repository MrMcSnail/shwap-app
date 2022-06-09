import axios from 'axios'

const shwapApi = axios.create({baseURL: "https://shwap-marketplace.herokuapp.com/api"})

export default function fetchAllItems() {
  return shwapApi.get('/items').then((res) => {
    return res.data.items;
  })
} ;