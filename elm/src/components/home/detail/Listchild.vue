<template>
<li>
    <img :src="title.image_path | img">
            <div class="message">
                <div class="a">
                    <h1>{{title.name}}</h1>
                    <p>月售{{title.month_sales}} &nbsp; 好评率%{{title.satisfy_rate}}</p>
                </div>
                <div class="fee" v-if="show==true">
                    <span>{{title.activity.discount}}折</span>
                    <span>{{title.activity.applicable_quantity_text}}</span>
                </div>
                <div class="bottom">
                    <div class="a">
                        <span class="price">¥{{title.specfoods[0].price}}</span>
                        <span class="price2" v-show="show==true">¥{{title.specfoods[0].original_price}}</span>
                    </div>
                    <div class="computed">
                        <span class="one" v-show="type==true" @click="sub()">-</span>
                        <span class="two" v-show="type==true">{{num}}</span>
                        <span class="three" @click="add()">+</span>
                    </div>
                </div>
            </div>
</li>
</template>

<script>
export default {
    props:{
        title:Object
    },
    data(){
        return{
            show:'',
            type:'',
            num:0,
        }
    },
    created(){
        if(this.title.activity){
            this.show=true;
        }
    },
    methods:{
        add(){
            this.num++;
            this.type=true;
            let a=this.title.specfoods[0].original_price*100-this.title.specfoods[0].price*100;
            if(this.title.activity){
                if(this.title.activity.applicable_quantity<this.num){
                    this.$emit('money',this.title.specfoods[0].original_price)
                }else{
                    this.$emit('money',this.title.specfoods[0].price)
                    this.$emit('del',a/100)
                }
            }else{
                this.$emit('moneysub',this.title.specfoods[0].price)
            }  
            this.$center.$emit('showis')
        },
        sub(){
            if(this.num>0){
                this.num--;
            }
            if(this.num==0){
                this.type='';
            }
            let a=this.title.specfoods[0].original_price*100-this.title.specfoods[0].price*100;
            if(this.title.activity){
                if(this.title.activity.applicable_quantity<=this.num){
                    this.$emit('money',-this.title.specfoods[0].original_price)
                }else{
                    this.$emit('money',-this.title.specfoods[0].price)
                    this.$emit('del',-a/100)
                }
            }else{
                this.$emit('moneysub',-this.title.specfoods[0].price)
            }  
            this.$center.$emit('showis')
        }
    }
}
</script>

<style scoped>
    .price2{
        color: #999;
        font-size: 12px;
        text-decoration: line-through;
    }
    .bottom{
        display: flex;
        justify-content: space-between;
    }
    .bottom .price{
        color: rgb(255, 83, 57);
    }
    .bottom .computed .one{
        display: inline-block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: white;
        color: rgb(35, 149, 255);
        font-size: 30px;
        line-height: 13px;
        text-align: center;
        border: 1px solid rgb(35, 149, 255);
    }
    .bottom .computed .two{
        padding: 0 10px;
        color: rgba(0,0,0,.87);
    }
    .bottom .computed .three{
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgb(35, 149, 255);
        color: white;
        font-size: 22px;
        line-height: 18px;
        text-align: center;
    }
    .computed{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    .right li{
        padding: 6px 0;
        display: flex;
        justify-content: space-between;
    }
    .right li img{
        width: 96px;
        height: 96px;
    }
    .fee{
        color: #eb6551;
        font-size: 10px;
    }
    .fee span:nth-of-type(1){
        display: inline-block;
        text-align: center;
        border: 1px solid hsla(8,79%,62%,.3);
        padding: 0 1px;
    }
    .message{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 14px;
        width: 58%;
    }
    .message h1{
        font-size: 16px;
        font-weight: 900;
        color: rgb(51, 51, 51);
        width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .message p{
        font-size: 10px;
        color:rgb(153, 153, 153);
    }
</style>
