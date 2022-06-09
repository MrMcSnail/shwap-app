import axios from 'axios'

const shwapApi = axios.create({baseURL: "https://shwap-marketplace.herokuapp.com/api"})

export function fetchAllItems() {
  return shwapApi.get('/items').then((res) => {
    return res.data.items;
  })
} 

export function fetchAllCategories() {
  return shwapApi.get('/categories').then((res) => {
    return res.data.categories;
  })
} 
;