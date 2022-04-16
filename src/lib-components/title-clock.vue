<template>
    <h1 class="text">{{title}}</h1>
</template>

<script>
export default {
    name: 'title-clock',
    props: {
        title: {
            type: String,
            require: true,
        }
    }  
}
</script>

<style scoped>
  .text.white{
    color: black;
  }
  .text.black{
    color: white;
  }
  .text.sm{
    font-size: 15px;
  }
  .text.md{
    font-size: 25px;
  }
  .text.lg{
    font-size: 35px;
  }
  .text{
    font-family: font-clock-normal;
    letter-spacing: 4px;
    color: white;
    font-size: 25px;
    margin-bottom: 0rem;
    margin-top: 0rem;
  }
</style>