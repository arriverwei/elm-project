<template>
    <div class="footer">
        <ul>
            <li v-for="(item,i) in arr" :key="i" @click="tocc(item.path,item.id)" 
            :class="{active:isshow==item.id}">
                <a href="#">
					<i :class="item.img"></i>{{item.title}}
				</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isshow:1,
            arr:[
                {title:'首页',path:'/home',img:'iconfont icon-changyonglogo40',id:'1'},
                {title:'发现',path:'/discover',img:'iconfont icon-faxian',id:'2'},
                {title:'订单',path:'/list',img:'iconfont icon-dingdan',id:'3'},
                {title:'我的',path:'/mine',img:'iconfont icon-wode',id:'4'}
            ]
        }
    },
    methods:{
        tocc(path,id){
            this.$router.push(path);
            this.isshow=id;
        }
    }
}
</script>

<style scoped>
    .footer{
        height: 49px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-top: 1px solid rgba(0, 0, 0, .2);
        z-index: 100;
        background: white;
    }
    ul{
        height: 49px;
        display: flex; 
    }
    ul li{
        width: 25%;
    }
    ul li a{
        text-align: center;
        height: 49px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 10px;
        color:rgb(142, 142, 147)
    }
    ul li a i{
        font-size: 18px;
        margin-bottom: 2px;
    }
    .footer ul li.active a{
        color: skyblue;
    }
</style>
