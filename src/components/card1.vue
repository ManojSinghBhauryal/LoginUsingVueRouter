<template>
    <div class="outerCard">
        <div class="text">
            Serve
        </div>
        <div class="card1">
            
        </div> <br>
        <div class="card2">
            <div class="subCard21"></div>
            <div class="subCard22"></div>
        </div><br>
         <div class="card3">

        </div> <br>
        <div class="card4">
            <div class="subCard41"></div>
            <div class="subCard42"></div>
        </div>  
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.outerCard{
    margin:10px;
}
.text{
    width:100%;
    height:100px;
    font-size: 30px;
}
.card1{
    height:50px;
    width:auto;
    background-color: black;
    padding:10px;
    border-radius: 15px; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
} 
.card2{
    height:250px;
    width:100%;
    display: flex;
    justify-content: space-between;
}  
.subCard21{
    height:auto;
    background-color: white;
    flex-grow: 2;
    border-radius: 20px;
    margin-right:20px;
}
.subCard22{
    height:auto;
    background-color: white;
    flex-grow:1;
    border-radius: 20px;
}
.card3{
    height:120px;
    width:100%;
    background-color: white;
    /* margin:10px; */
    border-radius: 15px;    
} 
.card4{
    height:250px;
    width:100%;
    display: flex;
    justify-content: space-between;
}  
.subCard41{
    height:auto;
    background-color: white;
    flex-grow: 2;
    border-radius: 20px;
    margin-right:20px;
}
.subCard42{
    height:auto;
    background-color: white;
    flex-grow:1;
    border-radius: 20px;
}

</style>