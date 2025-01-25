<template>
    <div class="dashboard-page">

        <Menu/> 
        <div class="board">

            <div class="header">

                <p class="title">Dashboard</p>
            </div>

            <div class="my-notes">
                <div class="title">My Notes</div>
                <div class="notes-collection">
                    <div class="create-note">
                        <p>Create a note+</p>
                    </div>
                    <NoteThumbnail @click=" " v-for="n in 12"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const noteEditorActive = ref(false);
const selectedNoteData = ref({})
</script>

<style lang="scss" scoped>
.dashboard-page{
    width: 100%;
 
    display: grid;
    grid-template-columns: 160px 1fr;
}

.board{
    width: 100%;
    height: fit-content;
}

.header{
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 2rem;

    >.title{
        font-size: 1.4rem;
        font-variation-settings: 'wght' 500;
    }
     
}

.my-notes{
   
    padding: 2rem;
}

.notes-collection{
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    padding-bottom: 10vh;
}

.create-note{
    background-color: rgba($color: white, $alpha: .1);
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: all .2s ease-in-out;

    &:hover{
        background-color: #cea021;
      
    }
}
</style>