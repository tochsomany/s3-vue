<template>
    <div>        
        <section class="vh-100 bg-image">
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card" style="border-radius: 15px;">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center mb-5">Upload</h2>

                                    <form @submit.prevent="handleSubimt">

                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <input type="file" id="form3Example3cg" class="form-control form-control-lg" @change="handleFile" multiple/>
                                        </div>


                                        <div class="d-flex justify-content-center">
                                            <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                                class="btn btn-primary btn-lg text-body" style="width:200px; color:white !important;">Upload</button>
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
  //name: "Register",
  data (){
    return{
      //file: null
      files : []
    }
  },
   methods: {
        async handleSubimt(){
            const formData = new FormData();
            // formData.append('file', this.file);
            
            for(let i=0; i<this.files.length; i++){
                formData.append('files', this.files[i]);
            }
            console.log(formData)

            // Make an API request to upload the file using Axios
            // const {data} = await axios.post('http://172.23.128.93:3000/upload-single', formData, {
            const {data} = await axios.post('http://172.23.128.93:3000/upload-multiple', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(data)
            //  .then(response => {
            //     console.log('File uploaded successfully:', response.data);
            // })
            // .catch(error => {
            //     console.error('Error uploading file:', error);
            // })
        
        },
        handleFile(event) {
            // const file = event.target.files[0]
            // if(file){
            //     this.file = file
            //     console.log(file)
            // }

            //console.log(event.target.files)
            const files = [...event.target.files]            
            files.forEach(file => {
                this.files.push(file)
            })
            //console.log(this.files)
        }
    }
}
</script>