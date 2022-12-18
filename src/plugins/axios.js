import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1',
  headers: {
    'app-id': '639e28615ec180400d2578e9'
  }
})

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$axios', { value: instance })
  }
}
