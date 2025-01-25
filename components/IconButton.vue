<template>
    <div class="icon-button">

        <div class="target"></div>
        <img :src="icon.src" :alt="icon.alt">

    </div>
</template>

<script setup>
const props = defineProps({
    icon:Object
})
</script>

<style lang="scss" scoped>
.icon-button{
    position: relative;
    width: 22px;
    height: 22px;

    display: flex;
    justify-content: center;
    align-items: center;

    >.target{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 26px;
        height: 26px;
  
        cursor: pointer;

    }
    >img{
        max-height: 16px;
    }
}
</style>