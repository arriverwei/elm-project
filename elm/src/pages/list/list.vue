<template>
    <div class="list">
    <div class="header">
        <i class="iconfont icon-zuo" @click="jumppage()"></i>
        <span class="header-search">订单</span>        
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
.list{
    width: 100%;
    height: 50px;
    background: #008dff;
    text-align: center;
    position: relative;
}
.list i{
    position: absolute;
    font-size: 18px;
    top:15px;
    left:15px;
    color: #fff;
}
.list .header-search{
    line-height: 50px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
}
</style>
