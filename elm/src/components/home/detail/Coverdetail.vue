<template>
    <div class="cover" @click="none()"></div>
</template>

<script>
export default {
    methods:{
        none(){
            this.$emit('cover')
        }
    }
}
</script>

<style scoped>
    .cover{
        position: absolute;
        width: 100%;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0,.4)
    }
</style>
