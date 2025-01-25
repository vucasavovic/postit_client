<template>
    <div class="note-thumbnail">
        <p class="date">Jan. 01 2025</p>
        <h3 class="title">Note title</h3>
        <p class="content-preview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quia reiciendis obcaecati.</p>
        <div class="footer">
 
            <p>Edit</p>
            <IconButton :icon="{src:'/icons/garbage.svg',alt:'Trash icon image'}"/>
 
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.note-thumbnail{
    position: relative;
    background-color: rgba($color: white, $alpha: .08);
     
 
    height: 360px;
    padding: 1rem;


    display: flex;
    flex-direction: column;
    gap: 2rem;

    transition: all .2s ease-in-out;
 
}

.date{
    font-size: .9rem;
    color: rgba($color: white, $alpha: .5);
    font-variation-settings: 'wght' 300;
}

.title{
    font-size: 1.5rem;
    font-variation-settings: 'wght' 540;
}

.content-preview{
    color: rgba($color: white, $alpha: .5);
    font-variation-settings: 'wght' 300;
    line-height: 1.6;
}

.footer{
    margin-top: auto;
     position: relative;

     display: flex;
    gap: 1rem;

    >:last-child{
        margin-left: auto;
    }
    
    
}

.button{
    position: relative;
    margin-left: auto;
    width: 22px;

    display: flex;
    flex-direction: column;
    gap: 4px;

    cursor: pointer;

    >span{
        width: 100%;
        height: 2px;
        background-color: rgba($color: white, $alpha: .6);

    }
}
</style>