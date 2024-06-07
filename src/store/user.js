import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('users', {
  state: () => ({
    users: []
  }),
  actions: {
    async fetchUsers() {
      const {data} = await axios.get("http://172.23.128.253:69/users")
      //const {data} = await axios.get(`${process.env.VUE_APP_API}/users`)
      this.users = data
     //console.log(data)
    }
  }
  
})