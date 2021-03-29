<template>

    <button :disabled="state" v-on:click="$emit('on-click')">{{name}}</button>

</template>

<script>

export default {
    name: 'textBtn-clock',
    props: {
        name: {
            type: String,
            require: true,
        },
        state: {
            type: Boolean,
            default: false
        }
    } 
}

</script>

<style scoped>

    button.sm{
        height: 30px;
        font-size: 13px;
    }
    button.md{
        height: 35px;
        font-size: 16px;
    }
    button.lg{
        height: 40px;
        font-size: 18px;
    }

    button{
        border: none;
        outline: none;
        background-color: inherit;
        cursor: pointer;
        font-size: 16px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: rgb(93, 112, 255);
    }
    button:hover{
        color: rgb(0, 8, 255);
        text-decoration: underline;
    }
    button:disabled{
        color: gray;
    }
    button:active{
        color: white;
    }
    button:focus{
        color: rgb(0, 5, 164);
    }

</style>