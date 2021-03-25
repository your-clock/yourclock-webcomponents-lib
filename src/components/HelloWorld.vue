<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <alertClock class="lg warning" :msg="'hola'"/>
    <br>
    <inputClock class="md" :disabled="false" type="email" placeholder="Escriba su correo electronico" v-bind:success="'null'"/>
    <br>
    <br>
    <btnClock class="md" v-bind:name="'Ingresar'" v-bind:state="false" v-on:on-click="enviar"/>
    <br>
    <titleClock id="title" v-bind:title="'Ingrese'"/>
    <br>
    <logoGoogle v-on:on-click="enviar"/>
    <br>
    <logoFacebook v-on:on-click="enviar"/>
  </div>
</template>

<script>

import alertClock from '@/components/alert-clock.vue';
import titleClock from '@/components/title-clock.vue';
import btnClock from '@/components/btn-clock.vue';
import inputClock from '@/components/input-clock.vue';
import logoGoogle from '@/components/logo-google.vue';
import logoFacebook from '@/components/logo-facebook.vue';

export default {
  name: 'HelloWorld',
  components: {
    titleClock, 
    btnClock,
    inputClock,
    alertClock,
    logoGoogle,
    logoFacebook
  },
  props: {
    msg: String
  },
  methods: {
    enviar(){
      console.log("Boton on click")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
