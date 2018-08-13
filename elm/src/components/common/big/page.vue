<template>
    <div class="page" ref='pageone'>
        <div class="page-wrap" ref="pagewrap" >            
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        scrollcc:Function,
        scrollcc2:Function,
        requestStore:Function,
        height:Number,
        height2:Number,
        type:String
        
    },
    data(){
        return{
            judge:true,
            judge2:true
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
            if(top<-this.height && this.judge){
                this.judge=false;
                this.scrollcc('finding');               
            }
            else if(top>-this.height && !this.judge){
                this.judge=true;
                this.scrollcc('');
            }
            if(top<-this.height2 && this.judge2){
                this.judge2=false;
                this.scrollcc2(true);
            }
            else if(top>=-this.height2 && !this.judge2){
                this.judge2=true;
                this.scrollcc2('');
            }
            if(this.type=='home'){
                var disy=myScroll.y-myScroll.maxScrollY;
                this.requestStore(disy)
            }   
            
            
        });
         
         this.$center.$on('movemerchants',(data)=>{
              myScroll.scrollTo(0,-410) 
              this.scrollcc('finding');                
            })
             this.$center.$on('sendname',(data)=>{
              myScroll.scrollTo(0,-407) 
              this.scrollcc('finding');                
            })
          
       
            
            
        

    },
    methods:{
        fresh(){
            this.myScroll.refresh();
        }
    },
    
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
