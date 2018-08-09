<template>
    <div class="box">
        <div class="img">
            <img :src="title.img | img">
        </div>
        <div class="content_store">
            <h1>{{title.name}}</h1>
            <div class="popular">
                <div class="star">
                    <i class="iconfont icon-jie"></i>
                    <i class="iconfont icon-jie"></i>
                    <i class="iconfont icon-jie"></i>
                    <i class="iconfont icon-jie"></i>
                    <i class="iconfont icon-jie" :style="{width:(title.rating-4)*9.6+'px'}"></i>
                </div>
                <span>{{title.rating}}  月售{{title.mouthshow}}单</span>
            </div>
            <div class="price">
                <span class="left">¥{{title.sendprice}}起送 | 配送费¥{{title.sendfee}}</span>
                <span class="right">{{title.distance}}km | {{title.time}}分钟</span>
            </div>
            <div class="tag">
                <span class="kind">{{title.tag[0].text}}</span>
                <span class="lement" v-if="show1">品质联盟</span>
                <span class="koubei" v-if="show2">
                    <i class="iconfont icon-jie"></i>
                    <span>口碑人气好店</span>
                </span>
            </div>
            <div class="active">
                <ul class="huodong">
                    <li v-for="(value,i) in two" :key="i+100">
                        <span class="start" :style="{background:'#'+value.icon_color}">{{value.icon_name}}</span>
                        <span class="how">{{value.description}}</span>
                    </li>
                    <li v-for="(value,i) in list" :key="i" v-show="type==true">
                        <span class="start" :style="{background:'#'+value.icon_color}">{{value.icon_name}}</span>
                        <span class="how">{{value.description}}</span>
                    </li>
                </ul>
                <div class="num" @click="showlist()">
                    <span>{{length}}个活动</span>
                    <i class="iconfont icon-xia"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:Object
    },
    data(){
        return{
            show1:true,
            show2:true,
            length:'',
            color:'red',
            list:[],
            two:[],
            type:false,
            num:0
        }
    },
    mounted(){
        if(this.title.tag.length==2){
            if(this.title.tag[1].text=='品质联盟'){
                this.show1=true;
                this.show2=false;
            }
            else if(this.title.tag[1].text=='口碑人气好店'){
                this.show2=true;
                this.show1=false;
            }
        }else{
            this.show1=false;
            this.show2=false;
        }
        this.length=this.title.content.length;
        let data=this.title.content;
        this.list=[...data];
        this.list.splice(0,2);
        this.two=[...data];
        this.two.splice(2,this.two.length-2);
    },
    methods:{
        showlist(){
            this.num++;
            if(this.num%2==0){
                this.type=false;
            }else{
                this.type=true;
            }
            
        }
    }
}
</script>

<style scoped>
    .huodong li{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 90%;
        margin-bottom: 6px;
    }
    .box{
        padding: 18px 12px 18px 12px;
        overflow: hidden;
        border-bottom: 1px solid #f0eded;
        width: 100%;
    }
    .img{
        float: left;
        margin-right: 10px;
    }
    .img img{
        width: 60px;
        height: 60px;
    }
    .content_store{
        float: left;
        font-size: 10px;
        width: 76%;
        color: rgb(102, 102, 102);
    }
    .content_store h1{
        font-size: 14px;
        font-weight: 800;
        color: rgb(51, 51, 51);
    }
    .popular{
        overflow: hidden;
        padding-top: 8px;
    }
    .star{
        float: left;
        width: 60px;
    }
    .star i{
        font-size: 8px;
        display: inline-block;
        background: yellow;
    }
    .popular span{
        float: left;
        margin-left: 6px;
    }
    .price{
        overflow: hidden;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 8px 0 8px 0;
    }
    .price .right{
        color: rgb(153, 153, 153)
    }
    .kind{
        height: 10px;
        line-height: 10px;
        text-align: center;
        display: inline-block;
        font-size: 8px;
        border: 1px solid rgb(221, 221, 221);
        color: rgb(102, 102, 102);
        padding-left: 1px;
        padding-right: 1px;
    }
    .lement{
        height: 10px;
        line-height: 10px;
        text-align: center;
        display: inline-block;
        font-size: 8px;
        border: 1px solid rgb(221, 221, 221);
        color: rgb(51, 51, 51);
        padding-left: 1px;
        padding-right: 1px;
    }
    .koubei i{
        font-size: 8px;
        color: #e8470b;
    }
    .tag{
        font-size: 8px;
    }
    .koubei span{
        color: #e8470b;
    }
    .start{
        font-size: 10px;
        display: inline-block;
        color: white;
        line-height: 14px;
        padding-left: 1px;
        padding-right: 1px;
    }
    .active{
        margin-top: 8px;
        padding-top: 2px;
        overflow: hidden;
        border-top: 1px solid #f0eded;
    }
    .huodong{
        float: left;
        width: 80%;
    }
    .num{
        float: right;
        font-size: 10px
    }
    .num i{
        font-size: 8px;
    }
</style>
