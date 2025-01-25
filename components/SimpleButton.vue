<template>
     <button type="button">{{ text }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
    text:String
})
</script>

<style lang="scss" scoped>
button{
    padding: 1rem 1.6rem;

    height: fit-content;

    background-color:#EABC3D ;
 
    font-size: 1rem;

    text-transform: capitalize;

    border-radius: 200px;

    cursor: pointer;

    transition: all .1s ease-in-out;
    outline: transparent;

    &:hover{
        background-color:#f4c646;
        
    }
}
</style>