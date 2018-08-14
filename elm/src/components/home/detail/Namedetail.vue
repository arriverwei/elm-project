<template>
    <div class="box">
        <p class="top">{{data.name}}</p>
        
            <div class="text">
                <div class="num">
                    <span>{{data.rating}}</span>
                    <span>评分</span>
                </div>
                <div class="num">
                    <span>{{data.mouthshow}}单</span>
                    <span>月售</span>
                </div>
                <div class="num">
                    <span>蜂鸟快送</span>
                    <span>约{{data.time}}分钟</span>
                </div>
                <div class="num">
                    <span>{{data.sendfee}}元</span>
                    <span>配送费</span>
                </div>
                <div class="num">
                    <span>{{data.distance}}m</span>
                    <span>距离</span>
                </div>
            </div>
        
        <div class="out">
            <div class="gao">
                <p>公告</p>
            </div>
        </div>
        <p class="bottom">做“饭”我们是认真的，亲，有任何问题请联系我们处理，差评解决不了任何问题，我们不怕你的追问、质疑，就怕你不问。感谢亲的支持！
投诉电话：18676792044
 加盟热线 0755-83211001</p>
    </div>
</template>

<script>
export default {
    props:{
        data:Object
    }
}
</script>

<style scoped>
    .out{
        width: 100%;
        height: 40px;
        position: relative;
    }
    .box{
        position: absolute;
        width: 72%;
        z-index: 3;
        top: 46%;
        left: 50%;
        transform: translate(-50%,-50%);
        background:white;
        border-radius: 6px;
        padding: 20px 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .text{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .num{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
    }
    .gao{
        width: 26%;
        height: 1px;
        background: #999;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-55%);
    }
    .gao p{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-55%);
        background: white;
        padding: 0 5px;
        font-size: 12px;
        color: #999;
    }
    .top{
        font-size: 22px;
        font-weight: 900;
        color: #333;
        width: 80%;
        text-align: center;
    }
    .num span:nth-of-type(1){
        font-weight: 900;
        font-size: 14px;
        color: #333;
        padding-bottom: 6px;
    }
    .num span:nth-of-type(2){
        font-size: 10px;
        color: #999;
    }
    .bottom{
        color: #333;
        font-size: 12px;
        line-height: 18px;
    }
</style>
