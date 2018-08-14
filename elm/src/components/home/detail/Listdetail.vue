<template>
    <div class="box">
        <h1>优惠活动</h1>
        <div class="page" ref='pagethree'>
            <ul class="huodong">
                <li v-for="(value,i) in listData.content" :key="i">
                    <span class="start" :style="{background:'#'+value.icon_color}">{{value.icon_name}}</span>
                    <span class="how">{{value.description}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        listData:Object
    },
    mounted(){
        let myScroll = new IScroll(this.$refs.pagethree,{
            fadeScrollbars: true,
            scrollbars: true
        });
        myScroll.on('beforeScrollStart',()=>{
            myScroll.refresh();
        }); 
    }
}
</script>

<style scoped>
    ul{
        overflow: hidden;
    }
    .box{
        position: absolute;
        left: 0;
        bottom: 0;
        width:100%;
        height: 40%;
        background: #f5f5f5;
        z-index: 2;
    }
    .page{
        height: 70%;
        overflow:hidden;
        padding:0 24px;
    }
    h1{
        color: rgb(51, 51, 51);
        font-size: 17px;
        font-weight: 900;
        text-align: center;
        padding:16px 0;
    }
    .how{
        color: rgb(51, 51, 51);
        font-size: 14px;
    }
    .start{
        font-size: 13px;
        color: white;
        padding: 0 2px;
    }
    li{
        margin-bottom: 10px;
    }
</style>
