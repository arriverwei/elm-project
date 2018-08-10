<template>
<div class="detail_wrap">
    <div v-show="show=='finding'" class="show">
        <Detailone></Detailone>
    </div>
    <div v-show="show2==true" class="show">
        <Detailtwo :data="data" ref='pagetwo'></Detailtwo>
    </div>
    <page class="detail" :scrollcc="change" :height="230" :scrollcc2="change2" :height2="430">
        <div class="head">
            <img :src="arr.img | img">
            <i class="iconfont icon-zuo" @click="push()"></i>
        </div>
        <div class="message">
            <div class="name">
                <span>{{arr.name}}</span>
                <i class="iconfont icon-jiantou"></i>
            </div>
            <p>评价{{arr.rating}}   &nbsp;&nbsp;月售{{arr.mouthshow}}单  &nbsp;&nbsp; 商家配送约{{arr.time}}分钟</p>
            <div class="active">
                <div class="huodong">
                        <span class="start" style="background:rgb(240, 115, 115)">{{arr.icon_name}}</span>
                        <span class="how">{{arr.dececription}}</span>
                    </div>
                <div class="num" @click="showlist()">
                    <span>{{much}}个优惠</span>
                    <i class="iconfont icon-xia"></i>
                </div>
            </div>
            <p class="p">公告：1、本店使用饿了么网上订餐，优先配送!</p>
        </div>
        <div class="btn">
            <span class="color">点餐</span>
            <span>评价</span>
            <span>商家</span>
        </div>
        <div class="yy"></div>
        <div class="storeList">
            <ul class="left">
                <li v-for="(item,i) in data" :key="i">
                    <span>{{item.name}}</span>
                </li>
            </ul>
            <div class="shopping">
                <List v-for="(item,i) in data" :key='i' :dataAll="item"></List>
            </div>
        </div>
    </page>
</div>
</template>

<script>
import {storeDetail,getstore} from '@/services/filmServers'
import Detailone from '@/components/home/index/Detailone'
import Detailtwo from '@/components/home/index/Detailtwo'
import List from '@/components/home/index/List'
export default {
    components:{
        Detailone,
        Detailtwo,
        List
    },
    data(){
        return{
            show:'',
            show2:'',
            data:[],
            arr:[],
            first:{},
            much:'',
            arr2:{},
        }
    },
    created(){
        console.log('ddd')
        // this.$center.$on("getstore",(result)=>{
        //     this.arr2=result;
        //     console.log(result)
        // })
    },
    mounted(){
        
        console.log('dd')
        // console.log(this.arr2)
        this.arr=this.$route.query;
        this.first=this.arr.content;
        this.much=this.arr.content.length;
        storeDetail(this.arr.id).then(result=>{
            this.data=result;
            this.$nextTick(()=>{
                    this.$refs.pagetwo.fresh();
            })
        });
    },
    // beforeDestroy(){
    //     this.$center.$off("getstore")
    // },
    methods:{
        change(y){
            this.show=y;
        },
        change2(y){
            this.show2=y;
        },
        push(){
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped>
    .yy{
        height: 200px;
        background: blue;
    }
    .oo{
        height: 1900px;
        background: black;
    }
    .show{
        position: relative;
        z-index: 10;
    }
    .head{
        height: 96px;
        background: rgb(71, 53, 53);
        position: relative;
        padding-left: 4%;
        margin-bottom: 30px;
        padding-top: 4px;
    }
    .head i{
        font-size: 18px;
        color: white;
        font-weight: 900;
    }
    .head img{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -20%;
        width: 72px;
        height: 72px;
        border-radius: 4px;
    }
    .message{
        padding: 0 10%;
        height: 100px;
    }
    .message .name{
        margin: 0 auto;
        font-size: 20px;
        font-weight: 900;
        width: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgb(51, 51, 51);
    }
    .message .name i{
        font-size: 12px;
        display: inline-block;
        vertical-align: middle;
        margin-top: 4px;
    }
    .message .name span{
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .message p{
        color: rgb(102, 102, 102);
        font-size: 11px;
        text-align: center;
        margin-top: 4px;
        margin-bottom: 8px;
    }
    .active{
        display: flex;
        font-size: 11px;
        justify-content: space-between;
    }
    .start{
        font-size: 10px;
        display: inline-block;
        color: white;
        line-height: 14px;
        padding-left: 1px;
        padding-right: 2px;
    }
    .how{
        color: rgb(51, 51, 51);
    }
    .num i{
        font-size: 10px;
    }
    .num{
        color: rgb(153, 153, 153);
    }
    .message .p{
        color:rgb(153, 153, 153);
    }
    .btn{
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid rgba(233, 238, 240, 0.993);
        overflow: hidden;
    }
    .btn span{
        display: inline-block;
        color: rgb(102, 102, 102);
        font-size: 16px;
        line-height: 30px;
    }
    .btn .color{
        border-bottom: 2px solid rgb(0, 119, 255);
        color: rgb(51, 51, 51);
        font-weight: 900;
    }
    .storeList{
        display: flex;
        justify-content: space-between;
    }
    .left li{
        width: 60px;
        line-height: 14px;
        padding: 18px 9px;
        font-size: 12px;
        color: rgb(102, 102, 102);
        display: flex;
        align-items: center;
        background: rgb(250, 247, 247);
    }
</style>
