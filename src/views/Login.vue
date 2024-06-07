<template>
    <div>
        <router-link to="/">Go to home</router-link>

        <section class="vh-100 bg-image">
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card" style="border-radius: 15px;">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center mb-5">Log in</h2>

                                    <form @submit.prevent="login">

                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <input type="text" id="form3Example3cg" class="form-control form-control-lg" v-model="username"/>
                                            <label class="form-label" for="form3Example3cg" >Your Yousername</label>
                                        </div>

                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <input type="number" id="form3Example4cg" class="form-control form-control-lg" v-model="password" />
                                            <label class="form-label" for="form3Example4cg">Password</label>
                                        </div>

                                        <div class="d-flex justify-content-center">
                                            <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                                class="btn btn-primary btn-lg text-body" style="width:200px; color:white !important;">Login</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Register",
  data (){
    return{
      email: "",
      password: ""
    }
  },
   methods: {
        async login() {
                try {
                    const {data} = await axios.post(`${import.meta.env.VUE_APP_API}/login`, {
                        username: this.username,
                        password: this.password
                    });
                    console.log('Login successful:', data);
                    if(data.pass == "true"){
                        this.$router.push("/user")
                    }else{
                        this.$router.push("/login")
                    }
                } catch (error) {
                    console.error('Login failed:', error);
                }            
            }
        }
}
</script>
