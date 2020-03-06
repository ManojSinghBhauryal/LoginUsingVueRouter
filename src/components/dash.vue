<template>
<transition name="slide">
    <div class="main">
            <div v-bind:class="[!toggle ? 'sideNavBar':'navBar']">
                <button class="findButton">dashboard </button>
                <div class="navList">
                    <button class="button">Dashboard</button>
                    <button class="button">Plugins</button>
                    <button class="button">Dependencies</button>
                    <button class="button">Configuration</button>
                    <button class="button">Tasks</button>
                </div>
            </div>
        <div class="tasks"> 
            <div class="projectTasks">
                <button class="logout" v-on:click="handleLogout">Logout</button>
                <button class="icon" v-on:click="toggle = !toggle">&#9776;</button>
             Project tasks
            </div>
            <div class="belowTask">
                <div class="navBar2">
                    <input class="search" />
                    <div class="navList2">
                        <router-link to="/dash/card1" style="text-decoration:none;"><button class="button2">serve<br><span class="nav2text">Running</span></button></router-link>
                        <router-link to="/dash/card2" style="text-decoration:none;"><button class="button2">build<br><span class="nav2text">Compiles and minfies</span></button></router-link>
                        <router-link to="/dash/card3" style="text-decoration:none;"><button class="button2">lint<br><span class="nav2text">Lint and fix files</span></button></router-link>
                        <router-link to="/dash/card4" style="text-decoration:none;"><button class="button2">inspect<br><span class="nav2text">Inspect the revolved web...</span></button></router-link>
                    </div>
                </div>
                <div class="cards"> 
                  <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="fixedBar">
            
        </div>
    
    </div>
</transition>

</template>

<script>

export default{
  data(){
      return{
        toggle: false
      }
  },
methods:{
    handleLogout:function(){  
        console.log(localStorage.getItem('isAuthenticated'));
        localStorage.removeItem('isAuthenticated', 'true');
        this.$router.push('/login');
        console.log(localStorage.getItem('isAuthenticated'));
        }
    }
}
</script>

<style lang="scss" scoped>
.main{
    height:800px;
    width:100%;    
    display: flex;
    background-color: white;
    overflow:hidden;
}
.navBar{
    box-shadow: 1px -2px 4px 0px rgba(68, 92, 74, 0.3);
    width:250px;
    z-index:20;
    height: 100%;
    
}
.sideNavBar{
    box-shadow: 1px -2px 4px 0px rgba(68, 92, 74, 0.3);
    width:250px;
    z-index:20;
    height: auto;
}
.slide-enter-active, .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

.slide-enter, .slide-leave-to 
    {
        transform: all;
    }
.findButton{
    text-align: center;
    margin:10px;
    border:none;
    background-color: #EBF8F3;
    text-align: center;
    padding:10px;
    border-radius:25px;
    width:80%;
}
.navList .button{
    border:none;
    height:100%;
    background-color: white;
    padding: 10px;
    text-align: left;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    width: inherit;
    display: block;
    outline: none;
}

.navList .button:hover{
    background-color: #D7F1E6;
        border:none;

}

.tasks{
    height:93%;
    width:100%;
    z-index:5;
}
.projectTasks{
    
    height:65px;
    width:100%;
    background-color: #BBE6D6;
    text-align: left;
    display: flex;
    align-items: center;
    font-size: 30px;
    position:relative;
}
.logout{
    position:absolute;
    right:0;
    margin-right:20px;
    font-size:15px;
    padding:10px;
    border:none;
    cursor: pointer;
}
.logout:hover{
    background-color: #BBE6D6;
}

.belowTask{
    height:100%;
    width:100%;
    background-color: #C4E7DB;
    display: flex;
}
.navBar2{
    width:330px;
    background-color:#E4F5EF;
    border:none;

}

.search{
    width:210px;
    border-radius:25px;
    margin:10px;
    border:none;
    height:30px;
    outline: none;
    padding-left:10px;
}
.navList2 .button2{
  background-color:#E4F5EF;
  color: black;
  padding:22px;
  text-align: left;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  outline: none;
  border:none;

}

.nav2text{
    color:grey;
}
.navList2 .button2:hover{
    background-color: #D7F1E6;
}
.cards{
    height:100%;
    width:100%;
    
}
.fixedBar{
    background-color:#2c3e50;
    position:fixed;
    bottom:0px;
    left:0px;
    right:0px;
    height:20px;
    margin-bottom:0px;
    z-index:20;
    
}
.icon{
    display: none;
}
@media only screen and (max-width: 720px){
    .main{
        height:100%;
    }
    .navBar{
        width:0;
        overflow: hidden;
        cursor:pointer;
        // display: none;
    }
    
    .findButton{
        width:230px;
    }
    .navList{
        width:inherit;
    }
    
    .button{
        display:none;
    }
    .icon{
        display:block;
        margin:5px;
    }
    .logout{
        padding:4px;
        display: block;
    }
    .search{
        display: none;
    }
       
    .navBar2{
        width:100%;
    }
    .navList2{
        display:flex;
        width: 100%;
        // padding-left: 15px;
    }
    .nav2text{
        display: none;
    }
    .belowTask{
        flex-direction: column;
    }
    .slide-enter-active, .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter, .slide-leave-to 
    {
        transform: all;
    }
   
}
</style>