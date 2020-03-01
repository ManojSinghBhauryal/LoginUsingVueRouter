<template>
    <div class="main">
            <div class="navBar">
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
                <pre> Project tasks</pre>
            </div>
            <div class="belowTask">
                <div class="navBar2">
                    <input class="search" />
                    <div class="navList2">
                        <button class="button2">serve<br>Running</button>
                        <button class="button2">build<br>Compiles and minfies</button>
                        <button class="button2">lint<br>Lint and fix files</button>
                        <button class="button2">inspect<br>Inspect the revolved web...</button>
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

<style scoped>
.main{
    height:100%;
    width:100%;    
    display: flex;
    background-color: white;
    
}
.navBar{
    box-shadow: 1px -2px 4px 0px rgba(68, 92, 74, 0.3);
    /* width:13.5%; */
    width:170px;
    z-index:20;
}
.findButton{
    text-align: center;
    margin:10px 10px 10px 18px;
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
    width: 100%;
    display: block;
}
.navList .button:hover{
    background-color: #D7F1E6;
}

.tasks{
    height:100%;
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
}
.logout:hover{
    background-color: #BBE6D6;
}

.belowTask{
    height:100%;
    width:100%;
    background-color: #C4E7DB;
}
.navBar2{
    /* width:18%; */
    width:250px;
    background-color:#E4F5EF;
    height:680px;
}

.search{
    width:75%;
    border-radius:25px;
    margin:10px;
    border:none;
    height:30px;
}
.navList2 .button2{
  background-color:#E4F5EF;
  border:none;
  color: black;
  padding:22px;
  text-align: left;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  display: block;
  
  
}
.navList2{
    overflow:hidden;
    

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

</style>