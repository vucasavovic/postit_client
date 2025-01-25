<template>
    <div class="options">
        <p>Edit</p>
        <p>Delete</p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.options{

    position: absolute;
    left: 100%;
    bottom: 100%;
    transform: translate(-50%, -1rem);
   
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: .4rem;

    background-color: white;
    padding: 1rem .6rem;

    color: black;

    border-radius: 12px;

}
</style>