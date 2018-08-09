<template>
    <div>  
        <div class="shoplist">
            <span>一</span> <span class="shop">推荐商家</span> <span>一</span>
        </div>
        <div class="sortinglist">           
                    <span @click="showul()" class="list-span">{{mesname}}↓
                    <ul v-show="isshow">
                        <li v-for="item in sortinglist" :key="item.value" @click="getname(item.name)">{{item.name}}</li>
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
 import {getmerchants} from '@/services/filmServers'
export default {
    data(){
            return{
                sortinglist:[],
                sortinglilist:[],
                mesname:'综合排序',
                isshow:false,
                index:0
            }
    },
    mounted() {
       getmerchants().then(result=>{
           this.sortinglist=result.inside_sort_filter
           this.sortinglilist=result.outside_sort_filter
       })
   },
   methods:{
       showul(){
           this.index++
           if(this.index%2==0){
               this.isshow=false
           }else{
           this.isshow=true
           }
       },
       getname(name){
           this.mesname=name;
           this.isshow=false;         
       },
       ulhide(){
           this.isshow=false;
       }
       
   }
}
</script>

<style scoped>
.shoplist{
    height: 36px;
    width: 100%;
    text-align: center;
    line-height: 36px;
    margin-top: 10px;   
}
.shoplist span{
    color: #666;
}
.shoplist .shop{
    padding:0 8px;
    font-size: 14px;
    color: #000;
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
}
.sortinglist ul,span{
    flex:1;
}
.sortinglist ul li{
    line-height: 30px;
    font-size: 14px;
}
</style>
