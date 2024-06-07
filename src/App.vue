<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
    <div>
      <p>{{ $t('message.count') }}: {{ count }}</p>
      <button @click="increment">{{ $t('message.increment') }}</button>
      <button @click="decrement">{{ $t('message.decrement') }}</button>
    </div>
  </div>

</template>

<script>
import Navbar from "@/components/Navbar.vue"
import { useCounterStore } from '@/store/counter'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'App',
  components: {
    Navbar
  },
    computed:{
    ...mapState(useCounterStore, ['count']),
  },
  methods:{
    ...mapActions(useCounterStore, ['increment','decrement']),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
