<template>
    <div class="home-page">
        <LoginModal :title="action">

            <form v-if="action==='signup'" id="signup" class="form" action="">
                 <TextInput label="username" name="username"/>
                 <TextInput label="email" name="email"/>
                 <TextInput label="password" name="password"/>
                 <SimpleButton :text="action"/>
                 <div class="redirection">
                    <p>Already have an account?</p>
                    <button type="button" class="action-button" @click="changeActionTo('login')">Login</button>
                </div>
            </form>

            <form v-else id="signin" class="form" action="">
                <TextInput label="email" name="email"/>
                <TextInput label="password" name="password"/>
                <SimpleButton :text="action"/>
                <div class="redirection">
                    <p>You don't have an account?</p>
                    <button type="button" class="action-button" @click="changeActionTo('signup')">Sign up</button>
                </div>
            </form>

        </LoginModal>
    </div>
</template>

<script setup>
 const action = ref('login')

 const changeActionTo = (newAction) => {
    action.value = newAction;
 }
</script>

<style lang="scss" scoped>
.home-page{
    min-height: 100vh;
    background-color: inherit;
}

.form{
    flex: 1;
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    gap: .8rem;

    border-radius: 24px;

    >button{
        margin-top: 1.8rem;
    }
}
.redirection{
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: .5rem;

    >button{
        color: #EABC3D ;
        background-color: transparent;
        font-family: inherit;
        font-size: 1rem;
        cursor: pointer;
    }
}

 
</style>