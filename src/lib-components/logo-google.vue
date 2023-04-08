<template>
  <div id="google" v-on:click="$emit('on-click')"></div>
</template>

<script>
export default {
  name: "logo-google",
  props: {},
};
</script>

<style scoped>
#google {
  position: relative;
  border-top: 10px solid #ec4336;
  border-right: 10px solid #4385f6;
  border-bottom: 10px solid #34a856;
  border-left: 10px solid #fbbc05;
  border-radius: 50%;
  background-color: white;
  width: 30px;
  height: 30px;
  padding: 0;
}
#google.black {
  background-color: black;
  border-top: 10px solid white;
  border-right: 10px solid #bdbdbd;
  border-left: 10px solid #494949;
  border-bottom: 10px solid #6e6e6e;
}
#google.white {
  background-color: white;
  border-top: 10px solid black;
  border-right: 10px solid #bdbdbd;
  border-left: 10px solid #494949;
  border-bottom: 10px solid #6e6e6e;
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
  background: #4385f6;
}
#google.black::before {
  background: #bdbdbd;
}
#google.white::before {
  background: #bdbdbd;
}
#google::after {
  content: "";
  z-index: 101;
  position: absolute;
  border-top: 20px solid transparent;
  border-right: 24px solid white;
  border-top-right-radius: 100%;
  top: -10px;
  right: -10px;
  width: 0;
  height: 0;
}
#google.black::after {
  border-right: 24px solid black;
}
#google.white::after {
  border-right: 24px solid white;
}
#google:hover {
  cursor: pointer;
}
</style>
