<template>
  <div id="linkedin" v-on:click="$emit('on-click')"></div>
</template>

<script>
export default {
  name: "logo-linkedin",
  props: {},
};
</script>

<style scoped>
#linkedin {
  background-color: #0a66c2;
  width: 48px;
  height: 52px;
  position: relative;
  border-radius: 10%;
}
#linkedin.black {
  background-color: white;
}
#linkedin.white {
  background-color: black;
}
#linkedin::before {
  content: "in";
  font-family: "Gill Sans MT", Calibri, sans-serif;
  color: white;
  font-size: 42px;
  position: absolute;
  font-weight: bold;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#linkedin.black::before {
  color: black;
}
#linkedin.white::before {
  color: white;
}
#linkedin:hover {
  cursor: pointer;
}
</style>
