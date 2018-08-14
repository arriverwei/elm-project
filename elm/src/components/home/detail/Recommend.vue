<template>
    <div class="recommend">
        <h2>商家推荐</h2>
        <div class="page_wrap" ref="pagefour">
            <div class="page">
                <div class="oo"></div>
                <div class="xx"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        let myScroll=new IScroll(this.$refs.pagefour,{
            scrollY: true,
            freeScroll: true
        })
        myScroll.on('beforeScrollStart',()=>{
            myScroll.refresh();
        });   
    }
}
</script>

<style scoped>
    
</style>
