<template>
  <div id="jira" v-on:click="$emit('on-click')">
    <div class="squared"></div>
    <div class="squared-bottom"></div>
    <div class="squared-top"></div>
    <div class="squared-left"></div>
    <div class="squared-right"></div>
  </div>
</template>

<script>
export default {
  name: "logo-jira",
  props: {},
};
</script>

<style scoped>
#jira {
  width: 0px;
  border-top: 22px solid #2684ff;
  border-right: 22px solid #0053cd;
  border-bottom: 22px solid #2684ff;
  border-left: 22px solid #0053cd;
  border-radius: 0 4px 0 4px;
  transform: rotate(45deg);
}
#jira.black {
  background-color: white;
}
#jira.white {
  background-color: black;
}

.squared {
  background-color: white;
  height: 14px;
  width: 14px;
  margin: -7px 0 0 -7px;
  position: fixed;
}
.squared-bottom {
  background-color: #2684ff;
  height: 15px;
  width: 15px;
  margin: 7px 0 0 7px;
  position: fixed;
  border-radius: 0 20px 0 0;
}
.squared-top {
  background-color: #2684ff;
  height: 15px;
  width: 15px;
  margin: -22px 0 0 -22px;
  position: fixed;
  border-radius: 0 0 0 20px;
}
.squared-left {
  background-image: linear-gradient(#0053cd, #2684ff 50%);
  height: 26px;
  width: 15px;
  margin: -4px 0 0 -22px;
  border-radius: 0 0 0 4px;
  position: fixed;
}
.squared-right {
  background-image: linear-gradient(3600deg, #0053cd, #2684ff 50%);
  height: 26px;
  width: 15px;
  margin: -22px 0 0 7px;
  border-radius: 0 4px 0 0;
  position: fixed;
}
#git.black .squared {
  background-color: black;
}
#git.white .squared {
  background-color: white;
}

#jira:hover {
  cursor: pointer;
}
</style>
