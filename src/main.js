import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import i18n from "./i18n"
import router from "./route"

const pinia = createPinia()

const app = createApp(App)
.use(pinia)
.use(router)
.use(i18n)
.mount('#app')
