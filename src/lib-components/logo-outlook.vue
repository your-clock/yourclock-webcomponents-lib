<template>
  <div id="outlook" v-on:click="$emit('on-click')">
    <div class="mailtop"></div>
    <span>O</span>
  </div>
</template>

<script>
export default {
  name: "logo-outlook",
  props: {},
};
</script>

<style scoped>
#outlook {
  width: 0;
  height: 42px;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-right: 25px solid #0074c2;
  z-index: 4;
}
#outlook.black {
  border-right: 25px solid white;
}
#outlook.white {
  border-right: 25px solid black;
}
#outlook:before {
  background: #0074c2;
  content: "";
  width: 20px;
  height: 26px;
  position: absolute;
  margin: 7px 0 0 27px;
  border-radius: 0px 3px 3px 0px;
  z-index: 2;
}
#outlook.black:before {
  background: white;
}
#outlook.white:before {
  background: black;
}
.mailtop {
  background: white;
  width: 18px;
  height: 3px;
  position: absolute;
  margin: 14px 0 0 31px;
  transform: rotate(-30deg);
  z-index: 5;
}
#outlook.white .mailtop {
  background: white;
}
#outlook.black .mailtop {
  background: black;
}
.mailtop:before {
  background: white;
  content: "";
  width: 10px;
  height: 3px;
  position: absolute;
  margin: -3px 0 0 -6px;
  transform: rotate(-110deg);
  border-radius: 2px 0 0 0;
  z-index: 7;
}
#outlook.white .mailtop:before {
  background: white;
}
#outlook.black .mailtop:before {
  background: black;
}

span {
  color: white;
  font-weight: bold;
  font-family: "Arial narrow", sans-serif;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 40px;
  margin-left: 4px;
  pointer-events: none;
}
#outlook.black span {
  color: black;
}
#outlook.white span {
  color: white;
}
#outlook:hover {
  cursor: pointer;
}
</style>
