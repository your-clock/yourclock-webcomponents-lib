<template>
  <div id="figma" v-on:click="$emit('on-click')">
    <div class="part part-1"></div>
    <div class="part part-2"></div>
    <div class="part part-3"></div>
    <div class="part part-4"></div>
    <div class="part part-5"></div>
  </div>
</template>

<script>
export default {
  name: "logo-figma",
  props: {},
};
</script>

<style scoped>
#figma {
  width: 40px;
  display: flex;
  flex-wrap: wrap;
}
.part {
  width: 20px;
  height: 20px;
}
.part-1 {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background: red;
}
#figma.black .part-1 {
  background: white;
}
#figma.white .part-1 {
  background: black;
}
.part-2 {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background: #fb7266;
}
#figma.black .part-2 {
  background: #cacaca;
}
#figma.white .part-2 {
  background: rgb(70, 70, 70);
}
.part-3 {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background: #a061fa;
}
#figma.black .part-3 {
  background: #8d8d8d;
}
#figma.white .part-3 {
  background: rgb(107, 107, 107);
}
.part-4 {
  border-radius: 50px;
  background: #2ebdfa;
}
#figma.black .part-4 {
  background: #5a5a5a;
}
#figma.white .part-4 {
  background: rgb(143, 143, 143);
}
.part-5 {
  background: #00ce84;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
#figma.black .part-5 {
  background: #4e4e4e;
}
#figma.white .part-5 {
  background: rgb(189, 189, 189);
}
#figma:hover {
  cursor: pointer;
}
</style>
