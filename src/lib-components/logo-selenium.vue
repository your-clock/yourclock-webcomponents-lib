<template>
  <div id="selenium" v-on:click="$emit('on-click')">
    <div id="lineLong" class="line"></div>
    <div id="lineShort" class="line"></div>
  </div>
</template>

<script>
export default {
  name: "logo-selenium",
  props: {},
};
</script>

<style scoped>
#selenium {
  background: #43b02a;
  height: 50px;
  position: relative;
  width: 50px;
}
#selenium.black {
  background: white;
}
#selenium.white {
  background: black;
}

#selenium:after {
  color: white;
  content: "Se";
  display: block;
  font-family: arial;
  font-size: 30px;
  font-weight: bold;
  padding: 8% 0 0 4%;
}
#selenium.black:after {
  color: black;
}
#selenium.white:after {
  color: white;
}
.line {
  background-color: white;
}
#selenium.black .line {
  background-color: black;
}
#selenium.white .line {
  background-color: white;
}
#lineLong {
  top: 7px;
  left: 25px;
  height: 6px;
  width: 30px;
  position: relative;
  transform: rotate(-225deg);
}
#lineShort {
  top: 9px;
  left: 21px;
  height: 5px;
  width: 13px;
  position: relative;
  transform: rotate(-135deg);
}
#selenium:hover {
  cursor: pointer;
}
</style>
