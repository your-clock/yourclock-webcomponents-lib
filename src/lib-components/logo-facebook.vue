<template>
    <div id="facebook" v-on:click="$emit('on-click')"></div>
</template>

<script>
export default {
    name: 'logo-facebook',
    props: {

    }
}
</script>

<style scoped>
    #facebook {
        background: #ffffff;
        border-radius: 9%;
        border-color: black;
        height: 50px;
        position: relative;
        width: 50px;
    }
    
    #facebook:after {
        color: #000000;
        content: "f";
        display: block;
        font-family: Facebook Letter Faces, Arial, fantasy;
        font-size: 50px;
        font-weight: bold;
        margin: 6% 0 0 50%;
    }
    
    #facebook:hover {
        -moz-box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);
        -webkit-box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);
        cursor: pointer;
    }
</style>
