import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Upload from '@/views/Upload.vue'
import Service from '@/views/Service.vue'
import User from '@/views/User.vue'
import Setting from '@/components/users/Setting.vue'
import Profile from '@/components/users/Profile.vue'
import Login from '@/views/Login.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/upload', component: Upload },
    { path: '/service', component: Service },
    { path: '/user/:userid', component: User, children:[
        { path: '', component: Profile},
        { path: 'setting', component: Setting}
      ]
    },
    { path: '/login', component: Login }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })


  export default router