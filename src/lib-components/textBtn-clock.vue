<template>

    <a :disabled="state" v-on:click="$emit('on-click')">{{name}}</a>

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

    a.sm{
        height: 30px;
        font-size: 13px;
    }
    a.md{
        height: 35px;
        font-size: 16px;
    }
    a.lg{
        height: 40px;
        font-size: 18px;
    }

    a{
        border: none;
        outline: none;
        background-color: inherit;
        cursor: pointer;
        font-size: 16px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: rgb(93, 112, 255);
        text-decoration: none;
    }
    a:hover{
        color: rgb(0, 8, 255);
        text-decoration: underline;
    }
    a:disabled{
        color: gray;
    }
    a:active{
        color: rgb(0, 5, 164);
    }
    a:focus{
        color: rgb(0, 5, 164);
    }

</style>