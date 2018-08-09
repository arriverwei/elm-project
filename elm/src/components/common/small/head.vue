<template>
    <div class="find">
            <div class="back">
                <div class="text">
                    <i class="iconfont icon-sousuo"></i>
                    <span>搜索饿了么商家、商品名称</span>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .find{
        height: 46px;
        background: #0085ff;
        padding: 4px 14px 0 14px;
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
</style>
