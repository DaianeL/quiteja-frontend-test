import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1',
  headers: {
    'app-id': process.env.VUE_APP_ID
  }
})

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$axios', { value: instance })
  }
}
