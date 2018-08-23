<template>    
<div class="listbox">
        <div class="sortinglist">           
                    <span @click="showul()" class="list-span" >{{mesname}}↓
                    <ul v-show="isshow" class="merlist-ul">
                        <li  class="merlist-li"  v-for="item in sortinglist" :key="item.value" @click="getname(item.name)" v-show="isshow">{{item.name}}</li>
                    </ul>
                    </span>
                
            <span v-for="item in sortinglilist" :key="item.value" @click="ulhide()">
                {{item.name}}
            </span>
            <span @click="ulhide()">筛选</span>
        </div> 
 </div>   
</template>

<script>
import {getmerchants,getstore} from '@/services/filmServers.js'
export default {   
    data(){
            return{
                sortinglist:[],
                sortinglilist:[],
                mesname:'综合排序',
                isshow:false,
                data:[]                           
            }
    },
    mounted() {
       getmerchants().then(result=>{
           this.sortinglist=result.inside_sort_filter
           this.sortinglilist=result.outside_sort_filter
       })
       this.$center.$on('merchantssendcover',(data)=>{           
         this.isshow=data      
       })
       this.$center.$on('homehide',(data)=>{
           this.isshow=data         
       })
   },
   methods:{
       showul(){
           if(this.isshow==true){
               this.isshow=false
           }else{
                this.isshow=true
           }
           let parmse={
               isshow:this.isshow,
               mesname:this.mesname
           }
           this.$center.$emit('merlistcovershow',parmse)                   
       },
       getname(name){            
           this.mesname=name;                    
           this.data=getstore(8,this.mesname)
           this.$center.$emit('sendname',this.mesname)
           this.ulhide()
           this.showul() 
       },
       ulhide(){
           this.isshow=false;
       }
       
   }
}
</script>

<style scoped>
.listbox{
    width: 100%;
    height: 100%;
}

.sortinglist{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    border-bottom:1px solid #ccc;
    color: #757575;
    font-size: 14px;
}
.sortinglist .list-span{
    color: #4199ea;
    font-weight: 600;
}
.sortinglist .list-span ul{
    color: #000;
    font-weight: normal;
    border-top:2px solid #ccc;
    box-sizing: border-box;
}
.sortinglist ul,span{
    flex:1;
}
.sortinglist ul li{
    line-height: 30px;
    font-size: 14px;
}
.sortinglist .list-span {
    width: 25%;
}
.sortinglist .merlist-ul .merlist-li{
    background: #fff;
    width: 360px;
    position: relative;
    margin-top: -1px;
    height: 40px;
    padding-left:15px;
    text-align: left;
}

</style>