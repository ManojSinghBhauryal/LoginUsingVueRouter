<template>
    <div class="main">
    <div class="nav" v-bind:class="{'active': toggle}">
        <button class="findButton">dashboard</button>
        <button class="iconClose" v-on:click="toggle = !toggle">&times;</button>
        <div class="navList">
            <button class="button">Dashboard</button>
            <button class="button">Plugins</button>
            <button class="button">Dependencies</button>
            <button class="button">Configuration</button>
            <button class="button">Tasks</button>
        </div>    
    </div>
        <div class="tasks "> 
            <div class="projectTasks">
                <button class="logout" v-on:click="handleLogout">Logout</button>
                <button class="icon" v-on:click="toggle = !toggle">&#9776;</button>
             Project tasks
            </div>
            <div class="belowTask">
                <div class="navBar2">
                    <input class="search" />
                    <div class="navList2">
                        <router-link to="/dash/card1" style="text-decoration:none;"><div class="button2">serve<br><span class="nav2text">Running</span></div></router-link>
                        <router-link to="/dash/card2" style="text-decoration:none;"><div class="button2">build<br><span class="nav2text">Compiles and minfies</span></div></router-link>
                        <router-link to="/dash/card3" style="text-decoration:none;"><div class="button2">lint<br><span class="nav2text">Lint and fix files</span></div></router-link>
                        <router-link to="/dash/card4" style="text-decoration:none;"><div class="button2">inspect<br><span class="nav2text">Inspect the revolved web...</span></div></router-link>
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
    height:740px;
    width:100%;    
    display: flex;
    background-color: white;
    overflow:hidden;
}
.navBar{
    box-shadow: 1px -2px 4px 0px rgba(68, 92, 74, 0.3);
    height: 620px;
}
.sideNavBar{
    box-shadow: 1px -2px 4px 0px rgba(68, 92, 74, 0.3);
    z-index:20;
    height: 620px;
    background-color: white;
 }

.findButton{
    text-align: center;
    margin:10px;
    border:none;
    background-color: #EBF8F3;
    text-align: center;
    padding:10px;
    border-radius:25px;
    width:150px;
    
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
    width: -webkit-fill-available;
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
}
.projectTasks{
    height:65px;
    width:100%;
    padding-left:5px;
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
    width:360px;
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
    display: flex;
}
.navList2{
    background-color:#E4F5EF;
    color: black;
    text-align: left;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    border:none;
}
.button2{
    background-color:#E4F5EF;
    color: black;
    padding:18px;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
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
}
.icon{
    display: none;
    margin:5px;
    border:none;
}
.iconClose{
    font-size: 25px;
    margin:8px;
    display: none;
    float:right;
    padding:0px 5px 0px 5px;
    border:none;
}
@media only screen and (max-width: 768px){
    .nav{
        width: 240px;
        height: 100vh;
        position: fixed;
        transition: transform .5s;
        left: 0;
        top: 0;
        z-index: 1;
        background: white;
        transform: translateX(-240px);
    }
    .active {
        transform: translateX(0);
    }
    .icon{
        display: block;    
    }
    .iconClose{
        display: block;
    }
    .belowTask{
        display: inline-block;
    }
    .nav2text{
        display: none;
    }
    .search{
        display: none;
    }
    .button2{
        width:100%;
        
    }
    .navList2{
        width: 90%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .navBar2{
        width:100%;
    }
}   
@media only screen and(max-width:1024){
    .button2{
        width:auto;
    }
    .navBar2{
        width:auto;
        display:flex;
        justify-content: center;
        align-items: stretch; 
    }
    
}
    
</style>