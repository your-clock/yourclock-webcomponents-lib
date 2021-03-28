<template>
  <div id="app">
    <yourclock-webcomponents-lib-sample />
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
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { YourclockWebcomponentsLibSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  methods: {
    enviar(){
      console.log("Boton on click")
    }
  }
  // components: {
  //  YourclockWebcomponentsLibSample,
  // }
});
</script>
