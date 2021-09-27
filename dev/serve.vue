<template>
  <div id="app">
    <overlayClock :show="false" :msg="'Cargando...'"/>
    <titleClock id="title" class="lg" v-bind:title="'Ingrese ahora'"/>
    <br>
    <alertClock class="lg danger" :msg="'hola'" :title="'Alerta'"/>
    <br>
    <p>{{longitud}}</p>
    <inputClock class="md" :disabled="false" type="email" placeholder="Escriba su correo electronico" v-bind:success="'null'" v-model="state"/>
    <br>
    <br>
    <btnClock class="md" :disabled="false" v-on:on-click="enviar"/>
    <br>
    <br>
    <textBtnClock class="md" :disabled="false" v-bind:name="'Olvide mi contraseña :c'" :target="'_blank'" :href="'#/auth'" v-on:on-click="enviar"/>
    <br>
    <br>
    <logoGoogle v-on:on-click="enviar"/>
    <br>
    <logoFacebook v-on:on-click="enviar"/>
    <br>
    <br>
    <div id="form-auth">
      <br>
      <br>
      <br>
      <img src="../src/icons/logo.png">
      <br>
      <formAuthClock
          :hrefAccount="'#/account'"
          :hrefPwd="'#/pwd'"
          :targetPwd="'_blank'"
          :targetAccount="'_self'"
          :nameHrefPwd="'Olvide mi contraseña :c'"
          :nameHrefAccount="'No tengo una cuenta :/'"
          :titleForm="'Ingrese ahora'"
          :titleAccounts="'O ingrese con:'"
          :subtitle1="'Correo'"
          :subtitle2="'Contraseña'"
          :placeholderEmail="'Ingrese su correo electronico'"
          :placeholderPwd="'Ingrese su contraseña'"
          :minEmail="1"
          :maxEmail="4"
          :minPwd="2"
          :maxPwd="6"
          v-on:click-btn="enviar"
          v-on:click-google="enviar"
          v-on:click-facebook="enviar"
          v-model:userPassword="userPassword"
          v-model:userEmail="userEmail"
      />
      <br>
      <br>
      <br>
    </div>
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
      state: "",
      userEmail: "",
      userPassword: ""
    }
  },
  computed:{
    longitud(){
        return this.state.length
    }
  },
  methods: {
    enviar(){
      console.log(this.userEmail)
    }
  }
});
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
    background: black;
  }
  #form-auth {
    background: white;
  }
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 12%;
  }
  formAuthClock{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100vh;
  }
</style>
