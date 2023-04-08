<template>
  <div id="github" v-on:click="$emit('on-click')">
    <div class="tail">
      <div class="tip"></div>
    </div>
    <div class="head">
      <div class="ear ear-left"></div>
      <div class="ear ear-right"></div>
    </div>
    <div class="body">
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logo-github",
  props: {},
};
</script>

<style scoped>
#github {
  width: 54px;
  aspect-ratio: 1;
  background: black;
  border-radius: 50%;
  position: relative;
  display: grid;
  place-items: center;
}
#github.white {
  background: black;
}
#github.black {
  background: white;
}
#github .head {
  width: 64%;
  height: 48%;
  background: white;
  position: absolute;
  top: 24%;
  border-radius: 50% 49% 40% 40% / 45% 45% 45% 45%;
}
#github.black .head {
  background: black;
}
#github.white .head {
  background: white;
}
#github .head .ear {
  position: absolute;
  background: white;
  border-radius: 0% 56% 20% 80%;
  top: -2%;
  width: 32%;
  height: 40%;
}
#github.black .head .ear {
  background: black;
}
#github.white .head .ear {
  background: white;
}
#github .head .ear-left:before,
#github .head .ear-right:before {
  content: "";
  position: absolute;
  background: white;
  border-radius: 50%;
  width: 62%;
  height: 15%;
  transform: rotate(4deg);
  top: -4%;
}
#github.black .head .ear-left:before,
#github.black .head .ear-right:before {
  background: white;
}
#github.white .head .ear-left:before,
#github.white .head .ear-right:before {
  background: black;
}
#github .head .ear-left {
  left: 4%;
  transform: rotate(16deg);
}
#github .head .ear-right {
  right: 4%;
  transform: rotate(345deg) scaleX(-1);
}
#github .body {
  background: white;
  width: 25%;
  height: 35%;
  bottom: -4%;
  position: absolute;
  border-radius: 34%;
}
#github.black .body {
  background: black;
}
#github.white .body {
  background: white;
}
#github .body:before,
#github .body:after {
  content: "";
  position: absolute;
  width: 30%;
  height: 30%;
  background: black;
  bottom: 18%;
  border-radius: 50%;
}
#github.black .body:before,
#github.black .body:after {
  background: white;
}
#github.white .body:before,
#github.white .body:after {
  background: black;
}
#github .body:before {
  left: -32%;
  transform: rotate(327deg);
  z-index: 1;
}
#github .body:after {
  border-radius: 50%;
  right: -32%;
  transform: rotate(33deg);
}
#github .body .bottom {
  position: absolute;
  background: white;
  width: 130%;
  height: 20%;
  bottom: 10%;
  left: -15%;
}
#github.black .body .bottom {
  background: black;
}
#github.white .body .bottom {
  background: white;
}
#github .tail {
  border-radius: 50%;
  position: absolute;
  width: 22%;
  height: 13%;
  background: white;
  bottom: 14%;
  left: 21%;
}
#github.black .tail {
  background: black;
}
#github.white .tail {
  background: white;
}
#github .tail:before,
#github .tail:after {
  content: "";
  position: absolute;
  border-radius: 50%;
}
#github .tail:before {
  width: 100%;
  height: 100%;
  bottom: 64%;
  left: 10%;
  background: black;
  transform: rotate(337deg);
}
#github.black .tail:before {
  background: white;
}
#github.white .tail:before {
  background: black;
}
#github .tail:after {
  width: 19%;
  height: 52%;
  transform: rotate(327deg);
  bottom: 13%;
  left: 2%;
  background: white;
}
#github.black .tail:after {
  background: black;
}
#github.white .tail:after {
  background: white;
}
#github .tail .tip {
  width: 36%;
  height: 110%;
  position: absolute;
  background: white;
  border-radius: 50%;
  left: -25%;
  top: -35%;
  transform: rotate(322deg);
}
#github.black .tail .tip {
  background: black;
}
#github.white .tail .tip {
  background: white;
}
#github .tail .tip:before,
#github .tail .tip:after {
  content: "";
  position: absolute;
  border-radius: 50%;
}
#github .tail .tip:before {
  width: 43%;
  height: 41%;
  background: white;
  transform: rotate(325deg);
  top: -9%;
  left: 35%;
}
#github.black .tail .tip:before {
  background: black;
}
#github.white .tail .tip:before {
  background: white;
}
#github .tail .tip:after {
  width: 45%;
  height: 103%;
  background: black;
  top: -6%;
  left: -6%;
}
#github.black .tail .tip:after {
  background: white;
}
#github.white .tail .tip:after {
  background: black;
}
#github:hover {
  cursor: pointer;
}
</style>

