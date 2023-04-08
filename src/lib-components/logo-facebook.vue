<template>
  <div id="facebook" v-on:click="$emit('on-click')"></div>
</template>

<script>
export default {
  name: "logo-facebook",
  props: {},
};
</script>

<style scoped>
#facebook {
  background: #1877f2;
  border-radius: 9%;
  height: 50px;
  position: relative;
  width: 50px;
}
#facebook.black {
  background: white;
}
#facebook.white {
  background: black;
}

#facebook:after {
  color: white;
  content: "f";
  display: block;
  font-family: Facebook Letter Faces, Arial, fantasy;
  font-size: 50px;
  font-weight: bold;
  margin: 6% 0 0 50%;
}
#facebook.black:after {
  color: black;
}
#facebook.white:after {
  color: white;
}

#facebook:hover {
  cursor: pointer;
}
</style>
