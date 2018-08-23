<template>
  <div id="app">
      <router-view/>
      <div v-show="type=='cc'">
        <Foot></Foot>
      </div>
  </div>
</template>

<script>
import Foot from '@/components/common/big/footer'
export default {
  name: 'App',
  components:{
    Foot
  },
  data(){
    return{
      type:'cc'
    }
  },
  
  created(){
    this.type='';
    this.$center.$on('show2',()=>{
      this.type='cc';
    })
    this.$center.$on('vue',()=>{
      this.type='';
    })
  },
  mounted(){
    console.log({'cc':3,'c':5})
  }
}
</script>

<style>

</style>
