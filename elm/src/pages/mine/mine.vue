<template>
    <div class="mine">
    <div class="header">
        <i class="iconfont icon-zuo" @click="jumppage()"></i>
        <span class="header-search">我的</span>        
    </div>
    
</div>
</template>

<script>
export default {
     methods:{
        jumppage(){
           this.$router.push('/home')
        }
    }
}
</script>

<style scoped>
.mine{
    width: 100%;
    height: 50px;
    background: #008dff;
    text-align: center;
    position: relative;
}
.mine i{
    position: absolute;
    font-size: 18px;
    top:15px;
    left:15px;
    color: #fff;
}
.mine .header-search{
    line-height: 50px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
}
</style>
