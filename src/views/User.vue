<template>
    <div>
        <h1>user</h1>
        <p>userid: {{ $route.params.userid }}</p>
        <p>query: {{ $route.query }}</p>
        <router-link :to="`/user/${$route.params.userid}/setting`">Setting</router-link>
        <router-view />

       <div class="row">
            <div class="col-4" v-for="(user, index) in users" :key="index">
                <div class="card shadow-sm mb-2">
                    <h4 class="card-title">{{user.name}}</h4>
                    <h6 class="card-body">{{user.email}}</h6>
                    <p class="card-footer">{{user.job}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import Navbar from "@/components/Navbar.vue"
import { useUserStore } from '@/store/user.js'
import { mapState, mapActions } from 'pinia'

export default {
    name: 'User',
    computed:{
        ...mapState(useUserStore, ['users']),
    },
    async mounted() {
        const param = this.$route.params.userid
        

        await this.fetchUsers()
        console.log(this.users[0])
    },
    methods:{
        ...mapActions(useUserStore, ['fetchUsers']),
    }
    
}
</script>