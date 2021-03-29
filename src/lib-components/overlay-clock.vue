<template>
    <div class="overlay" v-show="show">
        <div class="loader"></div>
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    name: 'overlay-clock',
    props: {
        show: {
            type: Boolean,
            require: true,
            default: false
        },
        msg: {
            type: String,
            require: false,
            default: ""
        }
    }
}
</script>

<style scoped>
    p{
        color: rgb(169, 169, 169);
        font-size: 20px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .overlay {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.75);
        z-index: 105;
    }
    .loader {
        border: 16px dotted rgba(0, 0, 0, 1);;
        border-radius: 100%;
        border-top: 16px inset rgba(250, 250, 250, 1);
        box-shadow: 0 0 0 5px rgba(175, 175, 175, 1);
        width: 90px;
        height: 90px;
        -webkit-animation: spin 1s linear infinite; /* Safari */
        animation: spin 1s linear infinite;
    }

    /* Safari */
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>