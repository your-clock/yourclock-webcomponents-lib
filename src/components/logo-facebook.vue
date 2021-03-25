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
        background: #43609C;
        border-radius: 9%;
        border-color: black;
        height: 50px;
        position: relative;
        width: 50px;
    }
    
    #facebook:after {
        color: #fff;
        content: "f";
        display: block;
        font-family: Facebook Letter Faces, Arial;
        font-size: 50px;
        font-weight: bold;
        margin: 6% 0 0 50%;
    }
    
    #facebook:hover {
        -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.90);
        -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.90);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.90);
        cursor: pointer;
    }
</style>