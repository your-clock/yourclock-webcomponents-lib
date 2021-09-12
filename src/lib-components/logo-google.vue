<template>
    <div id="google" v-on:click="$emit('on-click')"></div>
</template>

<script>
export default {
    name: 'logo-google',
    props: {

    }  
}
</script>

<style scoped>
  #google {
    position: relative;
    border-top: 10px solid #ffffff;
    border-right: 10px solid #e8e8e8;
    border-bottom: 10px solid #bdbdbd;
    border-left: 10px solid #767676;
    border-radius: 50%;
    background-color: #000000;
    width: 30px;
    height: 30px;
    padding: 0;
  }

  #google::before {
    content: "";
    z-index: 100;
    position: absolute;
    top: 50%;
    right: -5px;
    transform: translateY(-50%);
    width: 20px;
    height: 10px;
    background: #e8e8e8;
  }
  #google::after {
    content: "";
    z-index: 101;
    position: absolute;
    border-top: 20px solid transparent;
    border-right: 24px solid #000000;
    border-top-right-radius: 100%;
    top: -10px;
    right: -9px;
    width: 0;
    height: 0;
  }
  #google:hover {
    -moz-box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);
    -webkit-box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);
    cursor: pointer;
  }
</style>
