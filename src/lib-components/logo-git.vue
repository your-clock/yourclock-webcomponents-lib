<template>
  <div id="git" v-on:click="$emit('on-click')">
    <div id="lineLong" class="line"></div>
    <div id="lineShort" class="line"></div>
    <div id="circleOne" class="circle"></div>
    <div id="circleTwo" class="circle"></div>
    <div id="circleThree" class="circle"></div>
  </div>
</template>

<script>
export default {
  name: "logo-git",
  props: {},
};
</script>

<style scoped>
#git {
  width: 44px;
  height: 44px;
  background-color: #f05030;
  border-radius: 4px;
  transform: rotate(45deg);
}
#git.black {
  background-color: white;
}
#git.white {
  background-color: black;
}

.line {
  background-color: white;
}
#git.black .line {
  background-color: black;
}
#git.white .line {
  background-color: white;
}

.circle {
  background-color: white;
  height: 8px;
  width: 8px;
  border-radius: 5px;
}
#git.black .circle {
  background-color: black;
}
#git.white .circle {
  background-color: white;
}

#lineLong {
  top: 21px;
  left: 6px;
  height: 3px;
  width: 75%;
  position: relative;
  transform: rotate(45deg);
}

#lineShort {
  top: 6px;
  height: 3px;
  width: 32px;
  position: relative;
}

#circleOne {
  top: 0px;
  left: 6px;
  position: relative;
}

#circleTwo {
  top: -8px;
  left: 30px;
  position: relative;
}

#circleThree {
  top: 8px;
  left: 30px;
  position: relative;
}

#git:hover {
  cursor: pointer;
}
</style>
