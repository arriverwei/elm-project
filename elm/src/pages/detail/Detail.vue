<template>
    <div class="detail_wrap">
        <div v-show="coverC==true">
            <Coverdetail @cover="fu"></Coverdetail>
        </div>
        <div v-show="covershow==true">
            <Namedetail :data="arr2"></Namedetail>
        </div>
        <div v-show="covershow2==true">
            <Listdetail :listData="arr2"></Listdetail>
        </div>
        <div v-show="show=='finding'" class="show">
            <Detailone></Detailone>
        </div>
        <div v-show="show2==true" class="show">
            <Detailtwo :data="data" ref='pagetwo' @getY="height"></Detailtwo>
        </div>
        <Gobuy :title="arr2" :money="money" :moneyNo="moneyNo" :sumdel="sumd"></Gobuy>
        <page class="detail" :scrollcc="change" :height="230" :scrollcc2="change2" :height2="430" :disy="sumy" ref="pageone">
            <div class="head">
                <img :src="arr2.img | img">
                <i class="iconfont icon-zuo" @click="push()"></i>
            </div>
            <div class="message">
                <div class="name" @click="cover()">
                    <span>{{arr2.name}}</span>
                    <i class="iconfont icon-jiantou"></i>
                </div>
                <p>评价{{arr2.rating}}   &nbsp;&nbsp;月售{{arr2.mouthshow}}单  &nbsp;&nbsp; 商家配送约{{arr2.time}}分钟</p>
                <div class="active">
                    <div class="huodong">
                            <span class="start" style="background:rgb(240, 115, 115)">{{list1.icon_name}}</span>
                            <span class="how">{{list1.description}}</span>
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
            <!-- <Recommend></Recommend> -->
            <div class="yy"></div>
            <div class="storeList">
                <ul class="left">
                    <li v-for="(item,i) in data" :key="i" @click="height(i)">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
                <div class="shopping" ref="ul">
                    <List v-for="(item,i) in data" :key='i' :dataAll="item" :index="iNum" @action="getdisy" @money2="sumMoney" @moneysub2="sumMoney2" @delm="sumdel"></List>
                </div>
            </div>
        </page>
    </div>
</template>

<script>
import {storeDetail,getstore} from '@/services/filmServers'
import Detailone from '@/components/home/detail/Detailone'
import Detailtwo from '@/components/home/detail/Detailtwo'
import Coverdetail from '@/components/home/detail/Coverdetail'
import List from '@/components/home/detail/List'
import itm from '@/services/getdetail'
import Namedetail from '@/components/home/detail/Namedetail'
import Listdetail from '@/components/home/detail/Listdetail'
import Gobuy from '@/components/home/detail/Gobuy'
export default {
    components:{
        Detailone,
        Detailtwo,
        List,
        Coverdetail,
        Namedetail,
        Listdetail,
        Gobuy
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
            list1:'',
            covershow:'',
            coverC:'',
            covershow2:'',
            iNum:0,
            arrdisy:[],
            sumy:0,
            money1:0,
            money:0,
            moneyNo1:0,
            moneyNo:0,
            sumd:0,
            sumd1:0
        }
    },
    created(){
        this.arr2=itm.getGoodsItem();
        this.list1=this.arr2.content[0];
        this.much=this.arr2.content.length;
        this.list2=this.arr2.content[1];
    },
    
    mounted(){
        storeDetail(this.arr2.id).then(result=>{
            this.data=result;
            this.$nextTick(()=>{
                    this.$refs.pageone.fresh();
            })
        });
    },
    methods:{
        getdisy(y){
            this.arrdisy.push(y);
        },
        height(i){
            this.sumy=0;
            for(var k=0;k<=i-1;k++){
                this.sumy+=this.arrdisy[k];
            }
        },
        change(y){
            this.show=y;
        },
        change2(y){
            this.show2=y;
        },
        push(){
            this.$router.push('/home')
        },
        cover(){
            this.covershow=true;
            this.coverC=true;
        },
        fu(){
            if(this.covershow){
                this.covershow='';
            }
            else if(this.covershow2){
                this.covershow2='';
            }
            this.coverC='';
        },
        showlist(){
            this.coverC=true;
            this.covershow2=true;
        },
        sumMoney(price){
            this.money1+=parseInt(price*100);
            this.money=this.money1/100;
            console.log(this.money)
        },
        sumMoney2(price){
            this.moneyNo1+=parseInt(price*100);
            this.moneyNo=this.moneyNo1/100;
            console.log(this.moneyNo);
        },
        sumdel(a){
            this.sumd1+=parseInt(a*100);
            this.sumd=this.sumd1/100;
            console.log(this.sumd);
        }
    }
}
</script>

<style scoped>
    .detail_wrap .detail{
        bottom: 0;
    }
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
    .shopping{
        padding-bottom: 80px;
        width: 80%;
    }
</style>
