<template>
    <div class="text-input">
        <p class="label">{{ label }}</p>
        <input type="text" :name="name">
    </div>
</template>

<script setup>
const props = defineProps({ 
    label:String,
    name:String,

 })
</script>

<style lang="scss" scoped>
.text-input{
    color:white;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.label{
    text-align: left;
    width: 100%;
    font-size: .8rem;
    text-transform: capitalize;
    color: rgba($color: white, $alpha: .4);
}
input{
    padding: .8rem 1rem;
    border-radius: 6px;
    width: 100%;
    
    color: white;
    background-color: rgba($color: #000000, $alpha: .2);
}
</style>