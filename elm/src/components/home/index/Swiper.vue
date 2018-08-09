<template>
    <div class="swiper-container" ref="banner">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <ul class="swiper-ul ul">
                            <li v-for="(item,i) in swiper1" :key="i">
                            <img :src="item.image_hash | img" >
                                {{item.name}}   
                            </li>    
                        </ul> 
                    </div>
                    <div class="swiper-slide">
                        <ul class="swiper-ul _ul">
                            <li v-for="(item,i) in swiper2" :key="i">
                                <img :src="item.image_hash | img" >
                                    {{item.name}}   
                            </li>    
                        </ul> 
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div> 
</template>

<script>
export default {
    props:{
        swiper1:Array,
        swiper2:Array
    },
    mounted(){
        this.bannerSwiper=new Swiper(this.$refs.banner,{
            loop:true,            
			pagination: '.swiper-pagination',
        })
    },
    updated(){
       this.bannerSwiper.update();
       this.bannerSwiper.reLoop();
       this.bannerSwiper.slideTo(1, 0);
   }
}
</script>

<style scoped>
    .swiper-container{
    width: 100%;
    height: 175px;
   
}
.ul{
    display: flex;
    flex-wrap: wrap;
}
.ul li{
    flex:20%;
    font-size: 12px;
    text-align: center;
    margin-top: 4px;
}
.ul img{
    margin: 0 auto;
    width: 50px;
    height: 50px;
}
._ul{
    display: flex;
    flex-wrap:wrap; 
    text-align: center;
}
._ul img{
    width: 50px;
    height: 50px;
}
 ._ul li{
    width: 20%;
    margin-bottom: 10px;
    font-size: 12px;
}
._ul img{
    margin: 0 auto;
}
.swiper-pagination{
    bottom:0;
}
</style>
