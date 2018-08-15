<template>
<div class="discover">
    <div class="header">
        <i class="iconfont icon-zuo" @click="jumppage()"></i>
        <span class="header-search">发现</span>        
    </div>
    <Search></Search>
    <Appmain></Appmain>
</div>
</template>

<script>
import Appmain from '@/components/discover/index/Appmain'
import Search from '@/components/discover/index/Search'
export default {
    components:{
        Appmain,
        Search
    },
    methods:{


        jumppage(){
           this.$router.push('/home')
           
        }
    }
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 50px;
    background: #008dff;
    text-align: center;
    position: relative;
}
.header i{
    position: absolute;
    font-size: 18px;
    top:15px;
    left:15px;
    color: #fff;
}
.header .header-search{
    line-height: 50px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
}

</style>
