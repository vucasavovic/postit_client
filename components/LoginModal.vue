<template>
    <div class="login-modal">
         <div class="title">
           {{ title }}
         </div>

         <p class="description">Welcome to Postit©.<br> Post ideas or notes, and can keep up with your New Year's ✨ resolutions!</p>

         <div class="form-container">
            <slot/>
         </div>

         
    </div>
</template>

<script setup>
     const props = defineProps({ 
        title:String
    })

   
</script>

<style lang="scss" scoped>
.login-modal{

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    max-width: 600px;
    height: fit-content;
    min-height: 700px;
    
    padding: 4rem ;
    
    text-align: center;
    
    color: white;
    background-color: #2e2e2e;

 

}

.form-container{
    margin-top:1rem;
    width: 100%;
}


.title{
    font-size: 3.2rem;
    text-transform: capitalize;
    font-variation-settings: 'wght' 500;
    line-height: 1;
}

.description{
    max-width: 400px;
    text-align: center;
    color: rgba($color: white, $alpha: .8);
}


</style>