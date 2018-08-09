<template>
<div class="home">
    <div v-show="show=='finding'" class="show">
        <Head></Head>
    </div>
    <page class="content" :scrollcc="change" ref="pageone" :requestStore="responseStore">
        <div class="direct">
            <span>上步工业区</span><i class="iconfont icon-xia"></i>
        </div>
        <div class="find">
            <div class="back">
                <div class="oo">
                    <i class="iconfont icon-sousuo"></i>
                </div>
            </div>
        </div>
        <Swiper :swiper1="swiperlist" :swiper2="swiperlist2"></Swiper>
        <Middle></Middle>
        <Merchants></Merchants>
        <Merchants></Merchants>
        <Merchants></Merchants>
        <Store v-for="(item,i) in data" :key="i" :title="item"></Store>
    </page>
</div>
</template>

<script>
import Merchants from '@/components/home/index/Merchants'
import Swiper from '@/components/home/index/Swiper'
import Middle from '@/components/home/index/Nav'
import Head from '@/components/common/small/head'
import {getstore,getSwiper,aa} from '../../services/filmServers'
import Store from '@/components/common/small/store'
export default {
    data(){
        return{
            show:'',
            data:[],
            storepage:0,
            judge:true,
            swiperlist:[],
            swiperlist2:[],
        }
    },
    components:{
       Head,
       Store,
       Middle,
       Swiper,
       Merchants
    },
    mounted(){
        this.storeUpdata();
        this.bannerUpdata();
        aa();
    },
    methods:{
        change(y){
            this.show=y;
        },
        responseStore(y){
            if(y<50 && this.judge){
                this.storeUpdata();
                this.judge=false;
            }
        },
        storeUpdata(){
            getstore(this.storepage).then(result=>{
            this.data=[...this.data,...result];
            this.$nextTick(()=>{
                    this.$refs.pageone.fresh();
                    this.storepage+=8;
                    this.judge=true;
                })
            })
        },
        bannerUpdata(){
            getSwiper().then(result=>{ 
                this.swiperlist=result 
                this.swiperlist=result.slice(0,10)
                this.swiperlist2=result.slice(10,12)                                 
            })
        }
    }
}
</script>

<style scoped>
    .home{
        overflow: hidden;
    }
    .show{
        position: relative;
        z-index: 10;
    }
    .direct{
        height: 32px;
        background: #0085ff;
        color: white;
        padding:14px 6px 0 14px;
    }
    .direct span{
        font-size: 16px;
        font-weight: 700;
        margin-right: 6px;
    }
    .direct i{
        font-size: 10px;
        display: inline-block;
        vertical-align: middle
    }
    .find{
        height: 46px;
        background: #0085ff;
        padding: 4px 14px 0 14px;
        margin-top: -1px;
    }
    .find .back{
        background: white;
        height: 38px;
        position: relative;
    }
    .find .back .text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        white-space: nowrap;
        font-size: 14px;
        color: #999;
    }
    .find .back .text i{
        vertical-align: middle;
        display: inline-block;
    }
    .homepage{
    width: 100%;
    height: 315px;
    position: absolute;
    top:100px;
    left: 0;
    }

</style>
