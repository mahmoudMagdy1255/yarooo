<template>
<div class="card">
<article class="card-body mx-auto" style="max-width: 400px;">
	<h4 class="card-title mt-3 text-center">Create Account</h4>
	<p class="text-center">Get started with your free account</p>
	<p>
		<a href="" class="btn btn-block btn-twitter"> <i class="fab fa-twitter"></i>   Login via Twitter</a>
		<a href="" class="btn btn-block btn-facebook"> <i class="fab fa-facebook-f"></i>   Login via facebook</a>
	</p>
	<p class="divider-text">
        <span class="bg-light">OR</span>

        <span class="alert alert-danger" v-if="error">{{ error }}</span>
    </p>
	<form @submit.prevent="register">
	<div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input name="name" class="form-control" v-validate="'required|max:32|min:3|alpha_spaces'" placeholder="Full name" v-model="user.name" type="text">
        <br>
        <span class="alert alert-danger" v-if="errors.has('name')">{{ errors.first('name') }}</span>
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input name="email" class="form-control" v-model="user.email" v-validate="'required|email'" placeholder="Email address" type="email">
        <br>
        <span class="alert alert-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
    </div> <!-- form-group// -->
  

    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control" v-validate="'required|max:32|min:6|confirmed:confirmation_password'" v-model="user.password" name="password" placeholder="Create password" type="password">
        <br>
        <span class="alert alert-danger" v-if="errors.has('password')">{{ errors.first('password') }}</span>
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control" v-validate="'required|max:32|min:6'" ref="confirmation_password" placeholder="Repeat password" name="confirmation_password" type="password">
        <br>
        <span class="alert alert-danger" v-if="errors.has('confirmation_password')">{{ errors.first('confirmation_password') }}</span>
    </div> <!-- form-group// -->                                      
    
    <div class="form-group input-group">
        <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-home"></i> </span>
        </div>
        <input class="form-control" name="dob" v-model="user.dob" v-validate="'date_format:DD\MM\YYYY'" type="date">
        
        <br>
        <span class="alert alert-danger" v-if="errors.has('dob')">{{ errors.first('dob') }}</span>
    </div> <!-- form-group// -->                                      
    
    <div class="form-group input-group">
        <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-photo"></i> </span>
        </div>
        <input class="form-control" v-validate="'required|ext:jpg,jpeg,png|image|mimes:image/*|size:1999'" name="image" type="file" @change="uploadImage">
        <br>
        <span class="alert alert-danger" v-if="errors.has('image')">{{ errors.first('image') }}</span>
    </div> <!-- form-group// -->                                      

    <div class="form-group">
        <button type="submit" name="create" class="btn btn-primary btn-block"> Create Account  </button>
    </div> <!-- form-group// -->      
    <p class="text-center">Have an account? <router-link :to="{name:'Login'}">Log In</router-link> </p> 

</form>
</article>
</div>
</template>

<script>

import api from '../../Api/authApi'

  export default{
    data(){
        return{
            user:{
                name:'',
                email:'',
                password:'',
                dob:'',
                image:''
            },
            error:''
        }
    },
    methods:{
        register(){
            
            this.$validator.validateAll().then( ()=>{
                api.register(this.user);
                
            });
            

        },
        uploadImage(event){

            var fileReader = new FileReader();
            fileReader.readAsDataURL(event.target.files[0]);
            fileReader.onload = (e)=>{
                this.user.image = e.target.result;
            };
        }
    }

    
  }
</script>

<style scoped>
.divider-text {
    position: relative;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.divider-text span {
    padding: 7px;
    font-size: 12px;
    position: relative;   
    z-index: 2;
}
.divider-text:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #ddd;
    top: 55%;
    left: 0;
    z-index: 1;
}

.btn-facebook {
    background-color: #405D9D;
    color: #fff;
}
.btn-twitter {
    background-color: #42AEEC;
    color: #fff;
}
</style>