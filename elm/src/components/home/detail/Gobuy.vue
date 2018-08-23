<template>
    <div class="cart">
        <span class="first" v-if="showtop=='one'">{{descripe}}</span>
        <span class="first" v-if="showtop=='two'">还差{{cha}}起送</span>
        <div v-if="showtop=='three'" class="first">
            <span>已减{{del}}</span>
            <span v-if="showtop=='three' && showtop2=='three'">,再买{{nextdel}}减{{next}}</span>
        </div>
        <span class="first" v-if="showtop=='four'">已减{{sumdel}}</span>
        <div class="bottom">
            <div class="left">
                <p v-if="showall!=true">未选购商品</p>
                <div class="span" v-if="showall==true">
                    <span class="real">￥{{pay-del}}</span>
                    <span class="fal" v-show="showglup==true">￥{{yuan}}</span>
                </div>
                <p>另需配送费{{title.sendfee}}元</p>
            </div>
            <span class="last2" v-if="show=='one'">￥{{title.sendprice}}起送</span>
            <span class="last2 uo" v-else-if="show=='two'">还差{{cha}}起送</span>
            <span class="last" v-else-if="show=='three'">去结算</span>
        </div>
        <div class="iconout">
            <div class="iconin">
                <i class="iconfont icon-baobao"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:Object,
        money:Number,
        moneyNo:Number,
        sumdel:Number,
        
    },
    data(){
        return{
            descripe:'',
            obj:'',
            arr:[0],
            show:'one',
            showglup:'',
            showall:'',
            showtop:'one',
            arr1:[0],
            arr2:[0],
            showtop2:'three'
        }
    },
    created(){ 
        this.descripe=this.title.content[1].description;
        this.obj=JSON.parse(this.title.content[1].attribute);
        this.$center.$on('showis',()=>{
            this.$nextTick(()=>{
                if(this.pay==0){
                    this.show='one';
                    this.showall='';
                    this.showtop='one'
                }
                else if(this.pay<this.title.sendprice){
                    this.show='two';
                    this.showall=true;
                    this.showtop='two';
                }
                else{
                    this.show='three';
                    this.showall=true;
                    if(this.money==0){
                        this.showtop='three';
                    }else{
                        this.showtop='four';
                    }
                }
                if(this.money!=0){
                    this.showglup=true;
                }else{
                    this.showglup='';
                }
                if(!this.nextdel){
                     this.showtop2='';
                }else{
                    this.showtop2='three';
                }
            }) 
        })
    },
    computed:{
        pay(){
            let a=parseInt(this.money*100+this.moneyNo*100);
            return a/100;
        },
        del(){
            if(this.money==0){
                this.arr=[0];
                for(var i in this.obj){  
                    if(this.moneyNo>Number(i) && this.arr.indexOf(this.obj[i][1])==-1){
                        this.arr.push(this.obj[i][1]);
                    }
                }
            }else{
                this.arr=[0];
            }
            return this.arr[this.arr.length-1]
        },
        next(){
            if(this.money==0){
                this.arr1=[0];
                for(var i in this.obj){  
                    if(this.moneyNo<Number(i) && this.arr1.indexOf(this.obj[i][1])==-1){
                        this.arr1.push(this.obj[i][1]);
                    }
                }
            }
            return this.arr1[1]
        },
        next1(){
            if(this.money==0){
                this.arr2=[0];
                for(var i in this.obj){  
                    if(this.moneyNo<Number(i) && this.arr2.indexOf(this.obj[i][1])==-1){
                        this.arr2.push(i);
                    }
                }
            }
            return this.arr2[1]
        },
        nextdel(){
            if(Number(this.next1)){
                return parseInt(Number(this.next1)*100-this.pay*100)/100
            }
        },
        all(){
            return this.sumdel;
        },
        cha(){
            return parseInt(this.title.sendprice*100-this.pay*100)/100
        },
        yuan(){
            return parseInt(this.pay*100+this.del*100+this.all*100)/100
        }
    }
}
</script>

<style scoped>
    .span .real{
        font-size: 18px;
        color: white;
    }
    .span .fal{
        font-size: 12px;
        color: #999;
        text-decoration: line-through;
    }
    .last{
        display: inline-block;
        line-height: 49px;
        text-align: center;
        background: #38ca73;
        color: white;
        font-size: 15px;
        font-weight: 900;
        width: 40%;
    }
    .bottom .uo{
        font-size: 10px;
    }
    .last2{
        display: inline-block;
        line-height: 49px;
        text-align: center;
        background: #535356;
        color: white;
        font-size: 15px;
        font-weight: 900;
        width: 40%;
    }
    .cart{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        z-index: 101;
    }
    .cart .first{
        display: inline-block;
        height: 20px;
        text-align: center;
        background: #fffad6;
        font-size: 10px;
        line-height: 22px;
        width: 100%;
    }
    .bottom{
        height: 49px;
        background: #535356;
        padding-left: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .iconout{
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
    .left p:nth-of-type(1){
        font-size: 12px;
        color: #999;
    }
    .left p:nth-of-type(2){
        font-size: 10px;
        color: #999;
    }
    strong{
        font-size: 14px;
        font-weight: 900;
        color: white;
    }
    .iconout{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgb(68, 68, 68);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .iconin{
        width: 38px;
        height: 38px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #363636 ;
    }
    .iconin i{
        font-size: 18px;
        color: #9b9797;
    }
</style>
