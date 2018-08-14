<template>
    <div class="page2" ref='pagetwo'>
        <div class="page-wrap2">
            <ul class="left">
                <li v-for="(item,i) in data" :key="i">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
export default {
    props:{
        data:Array
    },
    mounted(){
        let myScroll2 = new IScroll(this.$refs.pagetwo,{
            bounce: false
        });
        this.myScroll2=myScroll2;
        myScroll2.on('beforeScrollStart',()=>{
            myScroll2.refresh();
        });
    },
    methods:{
        fresh(){
            this.myScroll2.refresh();
        }
    }
}
</script>

<style scoped>
    .page2{
        position: absolute;
        top: 0.5px;
        left: 0;
        height: 588px;
        overflow: hidden;
    }
    .left{
        overflow: hidden;
    }
    .left li{
        width: 60px;
        line-height: 14px;
        padding: 18px 9px;
        font-size: 12px;
        color: rgb(102, 102, 102);
        display: flex;
        align-items: center;
        background: rgb(250, 247, 247);
    }
</style>
