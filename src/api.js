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

export function fetchItemsByCategory(category_name) {
  return shwapApi.get(`/items?category_name=${category_name}`).then((res) => {
    return res.data.items;
  })
} 

export function sellItem(body) {
  return shwapApi.post(`/items`, body).then((res) => {
    return res.data.item;
  })
}

export function createNewUser(body) {
  return shwapApi.post(`/users`, body).then((res) => {
    return res.data.user;
  })
} 

export function fetchAllUsers() {
  return shwapApi.get(`/users`).then((res) => {
    return res.data.users;
  })
} 

export function patchKudos(body) {
  return shwapApi.patch(`/users/${body.username}`, body.kudos_inc).then((res) => {
    console.log(res)
  })
}

export function fetchBasket(username) {
  return shwapApi.get(`/users/${username}/basket`).then((res) => {
    return res.data.items;
  })
}
;