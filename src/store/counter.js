import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),

  // Action acts on state
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})