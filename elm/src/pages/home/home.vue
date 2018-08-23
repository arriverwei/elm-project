<template>
<div class="home">   
    <div v-show="show=='finding'" class="show">
        <Head></Head>
    </div>
    <div v-show="ulshow==true" class="ulshow">
        <Merlist></Merlist>
    </div>  
    <div class="cover" v-show="covershow==true" @click="hidecoverdata()"> 
        <Cover></Cover>
    </div>     
        <page class="content" :scrollcc="change" ref="pageone" :requestStore="responseStore" :height="50" :type="home" :height2="407" :scrollcc2="receive">
            <div class="direct">
                <span>上步工业区</span><i class="iconfont icon-xia"></i>
            </div>
            <div class="find">
                <div class="back">
                    <div class="text">
                        <i class="iconfont icon-sousuo"></i>
                        <span>搜索饿了么商家、商品名称</span>
                    </div>
                </div>
            </div>
        <Swiper :swiper1="swiperlist" :swiper2="swiperlist2"></Swiper>
        <Middle></Middle>        
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
import {getstore,getSwiper} from '../../services/filmServers'
import Store from '@/components/common/small/store'
import Merlist from '@/components/common/small/Merlist.vue'
import Cover from '@/components/common/big/Cover.vue'
export default {
    data(){
        return{
            show:'',
            data:[],
            storepage:0,
            judge:true,
            swiperlist:[],
            swiperlist2:[],
            home:'home',
            ulshow:'',
            covershow:false,
            mername:'综合排序'
        }
    },
    components:{
       Head,
       Store,
       Middle,
       Swiper,
       Merchants,
       Merlist,
       Cover
    },
    created(){
        this.$center.$on('merchantssendcover',(data)=>{           
            this.covershow=data
            this.ulshow=this.covershow
        })    
        this.$center.$on('merlistcovershow',(data)=>{
            this.covershow=data.isshow
        })
        this.$center.$emit('show2')
    },
    mounted(){
        this.storeUpdata();
        this.bannerUpdata();
        this.$center.$on('merchantssendcover',(data)=>{           
            this.covershow=data
            this.ulshow=this.covershow
        })    
        this.$center.$on('merlistcovershow',(data)=>{
            this.covershow=data.isshow
        })
        this.$center.$on('sendname',(data)=>{
            this.ulshow=false           
            if(this.mername!=data){
                this.mername=data
                this.data=[]
                this.storeUpdata()               
            }   
        })         
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
        },
        receive(i){
            this.ulshow=i;
        },
        hidecoverdata(){
            this.covershow=false
            this.$center.$emit('homehide',this.covershow)       
        }
    }
   
}
</script>

<style>
    html,body,#app{
        width: 100%;
        height: 100%;
    }
    .home{
        width: 100%;
        overflow: hidden;
        height: 100%;
        position: relative;
    }

    .home .show{
        position: relative;
        z-index: 10;
    }
    .home .direct{
        height: 32px;
        background: #0085ff;
        color: white;
        padding:14px 6px 0 14px;
    }
    .home .direct span{
        font-size: 16px;
        font-weight: 700;
        margin-right: 6px;
    }
    .home .direct i{
        font-size: 10px;
        display: inline-block;
        vertical-align: middle
    }
    .home .find{
        height: 46px;
        background: #0085ff;
        padding: 4px 14px 0 14px;
        margin-top: -1px;
    }
    .home .find .back{
        background: white;
        height: 38px;
        position: relative;
    }
    .home .find .back .text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        white-space: nowrap;
        font-size: 14px;
        color: #999;
    }
    .home .find .back .text i{
        vertical-align: middle;
        display: inline-block;
    }
    .home .homepage{
    width: 100%;
    height: 315px;
    position: absolute;
    top:100px;
    left: 0;
    }
    .home .ulshow{
        width: 100%;
        position: absolute;
        top:50px;
        left: 0;
        background: #fff;
        margin-top: -1px;
        z-index: 10;
    }
    .home .cover{
        width: 100%;        
        position: absolute;
        top:100px;
        bottom: 0px;
        z-index: 4;
    }
    
</style>
