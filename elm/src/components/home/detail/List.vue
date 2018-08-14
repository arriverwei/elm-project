<template>
    <ul class="right">
        <div class="top">
            <span>{{dataAll.name}}</span>
            <span>{{dataAll.description}}</span>
        </div>
        <li v-for="(item,i) in dataAll.foodlist" :key="i">
            <img :src="item.image_path | img">
            <div class="message">
                <div class="a">
                    <h1>{{item.name}}</h1>
                    <p>月售{{item.month_sales}} &nbsp; 好评率%{{item.satisfy_rate}}</p>
                </div>
                <div class="bottom">
                    <span>¥{{item.satisfy_count}}</span>
                    <span>+</span>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        dataAll:Object
    }
}
</script>

<style scoped>
    .right li{
        padding: 6px 0;
        display: flex;
        justify-content: space-between;
    }
    .right li img{
        width: 96px;
        height: 96px;
    }
    .message{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 14px;
        padding-right: 20px;
        width: 60%;
    }
    .message h1{
        font-size: 16px;
        font-weight: 900;
        color: rgb(51, 51, 51);
    }
    .message p{
        font-size: 10px;
        color:rgb(153, 153, 153);
    }
    .top{
        overflow: hidden;
        padding: 6px 0;
    }
    .top :nth-of-type(1){
        font-size: 12px;
        font-weight: 900;
        color: #666;

    }
    .top :nth-of-type(2){
        font-size: 10px;
        color: #999;
    }
    .bottom{
        display: flex;
        justify-content: space-between;
    }
    .bottom span:nth-of-type(1){
        color: rgb(255, 83, 57);
    }
    .bottom span:nth-of-type(2){
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
</style>
