<template>
 <div class="center">
        <div class="mian-header" @click="changgepage()">
            <span class="main-one">一</span><span class="main-dott"></span>
            <span class="iconfont icon-hongbao"></span>
            <span class="mian-time" >限时好礼</span>
            <span class="main-dott"></span><span class="main-one two">一</span>
        </div>
        <div class="mian-center" @click="changgepage()">
            <p>金币换豪礼</p>
        </div>    
         <div class="main-main">
            <div class="main" v-for="(item,index) in activitylist" :key="index">
                <span class="marker">{{item.corner_marker}}</span>
                <img :src="item.image_hash | img"/>
                <p class="title">{{item.title}}</p>
                <span class="required">{{item.points_required}}金币</span>
                <span class="price">￥{{item.original_price}}</span>
                
            </div>
        </div> 
        <div class="main-bottom" @click="changgepage()">
            查看更多>
        </div>    
    </div>    
</template>

<script>
import {getSearchSuggest} from '@/services/filmServers.js'
export default {
    data(){
        return{
            isshow:false,
            activitylist:[],
        } 
    },
    methods:{
        changgepage(){
            this.$router.push('/shopping')
        }
    },
    mounted() {
        getSearchSuggest().then(result=>{           
           this.activitylist=result.slice(0,3);
        })
    },
}
</script>

<style scoped>
.center{
    width: 100%;  
}
.mian-header{
    height: 20px;
    width: 100%;
    position: relative;
    text-align: center;
    margin-top:20px; 
    line-height: 20px;
    background: #fff;
}
.mian-header  .main-one{
    color: #000;
    font-size: 12px;
}
.mian-header .two{
    padding-left:5px;
}
.mian-header .main-dott{
    display: inline-block;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    top:10px;
}
.mian-header .iconfont{
    padding-left: 2px;
    color: palevioletred;
}
.mian-header .mian-time{
    font-size: 18px;
    padding: 0 2px;
    font-weight: 600;
}
.mian-center{
    height: 20px;
    width: 100%;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #ccc;
    background: #fff;
}
.main-main{
    width: 330px;
    height: 190px;
    display: flex;
    flex-wrap:wrap; 
    margin: 0 auto;
    margin-top: 10px;
    background: #fff;
}
.main-main .main{
    width: 110px;
    height: 170px;
    position: relative;
}
.main .marker{
    position: absolute;
    display: block;
    background: #413d3c;
    color: #fff;
    font-size: 12px;
    padding:2px;
}
.main .title{
    font-size: 12px;
    color: #333;
}
.main .required{
    color: #ff5339;
    font-size: 12px;
}
.price{
    font-size: 12px;
    color:#666;
    text-decoration: line-through;
}
.main-bottom{
    width: 100%;
    height: 67px;
    color: #999;
    text-align: center;
    font-size: 12px;
}
</style>
