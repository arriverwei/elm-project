<template>
    <div class="page" ref='pageone'>
        <div class="page-wrap">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        scrollcc:Function,
        requestStore:Function
    },
    data(){
        return{
            judge:true
        }
    },
    mounted(){
        let myScroll = new IScroll(this.$refs.pageone,{
             probeType: this.scrollcc?3:0
        });
        this.myScroll=myScroll;
        myScroll.on('beforeScrollStart',()=>{
            myScroll.refresh();
        });
        
        myScroll.on('scroll', ()=>{
            var top=myScroll.y;
            if(top<-50 && this.judge){
                this.judge=false;
                this.scrollcc('finding');
            }
            else if(top>-50 && !this.judge){
                this.judge=true;
                this.scrollcc('');
            }
            var disy=myScroll.y-myScroll.maxScrollY;
            this.requestStore(disy)
        })
    },
    methods:{
        fresh(){
            this.myScroll.refresh();
        }
    }
}
</script>

<style scoped>
    .page{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 50px;
        overflow: hidden; 
    }
</style>
