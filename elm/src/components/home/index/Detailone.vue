<template>
    <div class="btn">
            <span class="color">点餐</span>
            <span>评价</span>
            <span>商家</span>
        </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
    .btn{
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid rgba(233, 238, 240, 0.993);
        overflow: hidden;
        background: white;
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
</style>
