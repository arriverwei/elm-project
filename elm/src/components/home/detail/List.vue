<template>
    <ul class="right" ref="ul">
        <div class="top">
            <span>{{dataAll.name}}</span>
            <span>{{dataAll.description}}</span>
        </div>
        <Listchild v-for="(item,i) in dataAll.foodlist" :key="i" :title="item" @money="sendprice" @moneysub='sendprice2' @del="delm"></Listchild>
    </ul>
</template>

<script>
import Listchild from '@/components/home/detail/Listchild'
export default {
    props:{
        dataAll:Object,
        index:Number,
    },
    components:{
        Listchild
    },
    mounted(){
        let disy=this.$refs.ul.offsetHeight;
        this.$emit('action',disy);
    },
    methods:{
        sendprice(y){
            this.$emit('money2',y)
        },
        sendprice2(y){
            this.$emit('moneysub2',y)
        },
        delm(a){
            this.$emit('delm',a);
        }
    }
    
}
</script>

<style scoped>
    
    .right{
        padding-left: 14px;
        
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
</style>
