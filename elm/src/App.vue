<template>
  <div id="app">
      <router-view/>
    
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from '@/components/common/big/footer'
export default {
  name: 'App',
  components:{
    Foot
  }
}
</script>

<style>

</style>
