<template>
  <div id="app">
    <alertClock class="lg warning" :msg="'hola'"/>
    <br>
    <p>{{longitud}}</p>
    <inputClock class="md" :disabled="false" type="email" placeholder="Escriba su correo electronico" v-bind:success="'null'" v-model="state"/>
    <br>
    <br>
    <btnClock class="md" v-bind:name="'Ingresar'" v-bind:state="false" v-on:on-click="enviar"/>
    <br>
    <titleClock id="title" v-bind:title="'Ingrese'"/>
    <br>
    <textBtnClock class="md" v-bind:name="'Link button'" v-bind:state="false" v-on:on-click="enviar"/>
    <br>
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
  // components: {
  //  YourclockWebcomponentsLibSample,
  // }
  data(){
    return {
      state: ""
    }
  },
  computed:{
    longitud(){
        return this.state.length
    }
  },
  methods: {
    enviar(){
      console.log("Boton on click")
    }
  }
});
</script>
