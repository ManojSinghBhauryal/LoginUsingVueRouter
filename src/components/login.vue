<template>
    <div class="main">  
       <div class="form">
            <h1>Login</h1>
            <p>
                <input type="text" 
                class="input user" 
                placeholder="Username"
                v-model="name">    
            </p>
            <p>
                <input type="password" 
                class="input pass" 
                placeholder="Password"
                v-model="password">
            </p>
            <p>
                <button class="submit" 
                value="submit" 
                v-on:click="handleClick">
                    Submit
                </button>
            </p>
        </div>
    </div>
</template>

<script>
import {login} from '../services/login.service'
export default {
    data(){
        return{
            name:null,
            password:null
        }
    },

    methods:{
        handleClick:function(){
            const {name, password} = this;
            const isAuthenticated = login(name, password);
            if(isAuthenticated){
                localStorage.setItem('isAuthenticated', 'true');
                this.$router.push('/dash')
                console.log(localStorage.getItem('isAuthenticated'))
            }
        }
    }
}
</script>

<style scoped>
.form{
    border:1px solid;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border:none;
    box-shadow: 2px 2px 4px 2px rgba(56, 21, 21, 0.3);
}
.input{
    padding: 8px;
    width:200px;
    font-size:16px;
    transition: width 0.4s ease-in-out;
    
}
.input:focus{
    border: 1px solid rgb(56, 21, 21, 0.3);
    width: 250px;
    
}
.submit{
    border:none;
    padding:10px;
    font-size:20px;
    
}

</style>