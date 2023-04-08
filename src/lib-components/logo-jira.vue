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
  border-top: 22px solid #b1b1b1;
  border-right: 22px solid #505050;
  border-bottom: 22px solid #b1b1b1;
  border-left: 22px solid #505050;
}
#jira.white {
  border-top: 22px solid #b1b1b1;
  border-right: 22px solid #505050;
  border-bottom: 22px solid #b1b1b1;
  border-left: 22px solid #505050;
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
  background-image: linear-gradient(360deg, #0053cd, #2684ff 50%);
  height: 26px;
  width: 15px;
  margin: -22px 0 0 7px;
  border-radius: 0 4px 0 0;
  position: fixed;
}
#jira.black .squared-top {
  background-color: #b1b1b1;
}
#jira.white .squared-top {
  background-color: #b1b1b1;
}
#jira.black .squared-bottom {
  background-color: #b1b1b1;
}
#jira.white .squared-bottom {
  background-color: #b1b1b1;
}
#jira.black .squared-left {
  background-image: linear-gradient(#505050, #b1b1b1 50%);
}
#jira.white .squared-left {
  background-image: linear-gradient(#505050, #b1b1b1 50%);
}
#jira.black .squared-right {
  background-image: linear-gradient(360deg, #505050, #b1b1b1 50%);
}
#jira.white .squared-right {
  background-image: linear-gradient(360deg, #505050, #b1b1b1 50%);
}
#jira.black .squared {
  background-color: black;
}
#jira.white .squared {
  background-color: white;
}

#jira:hover {
  cursor: pointer;
}
</style>
