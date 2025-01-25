<template>
    <div class="menu">
            <div class="header">
                <img class="logo" src="/logo.svg" alt="Postit logo image">
            </div>

           
            <div class="links">        
                <a href="">Dashboard</a>
            </div>

            <div class="footer">
                <a href="">Sign out</a>
            </div>
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.menu{
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    
    padding: 0 1rem;
    
    background-color: rgb(26, 26, 26);

    display: flex;
    flex-direction: column;
    gap: 6vh;

    >.header{
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    >.links{
        flex: 1;
        text-align: center;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    >.footer{
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}


.logo{
    width: 100%;
    max-width: 96px;
}
</style>