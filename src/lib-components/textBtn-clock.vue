<template>

    <a :disabled="disabled" v-on:click="$emit('on-click')">{{name}}</a>

</template>

<script>

export default {
    name: 'textBtn-clock',
    props: {
        name: {
            type: String,
            require: true,
        },
        disabled: {
            type: Boolean,
            default: false
        }
    } 
}

</script>

<style scoped>

    a.sm{
      font-size: 11px;
    }
    a.md{
      font-size: 14px;
    }
    a.lg{
      font-size: 17px;
    }

    a.black{
      color: white;
    }
    a.white{
      color: black;
    }

    a{
      border: none;
      outline: none;
      background-color: inherit;
      cursor: pointer;
      font-size: 16px;
      font-family: font-clock-total;
      letter-spacing: 2px;
      color: white;
      text-decoration: none;
    }
    a:hover{
      color: rgb(175, 175, 175);
      text-decoration: underline;
    }
    a[disabled="true"]{
      color: rgb(175, 175, 175);
      text-decoration: overline underline line-through;
      cursor: not-allowed;
      pointer-events: none;
    }
    a:active{
      color: rgb(175, 175, 175);
    }
    a:focus{
      color: rgb(175, 175, 175);
    }

</style>