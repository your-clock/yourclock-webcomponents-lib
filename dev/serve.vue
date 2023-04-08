<template>
  <div id="app">
    <overlayClock :show="false" :msg="'Cargando...'" />
    <alertClock class="lg danger" :msg="'hola'" :title="'Alerta'" />
    <div id="black-section">
      <br />
      <br />
      <titleClock id="title" class="lg black" v-bind:title="'Ingrese ahora'" />
      <br />
      <br />
      <p>{{ longitud }}</p>
      <inputClock
        class="md black"
        :disabled="false"
        type="email"
        placeholder="Escriba su correo electronico"
        v-bind:success="'null'"
        v-model="state"
      />
      <br />
      <br />
      <btnClock class="md" :disabled="false" v-on:on-click="enviar" />
      <br />
      <br />
      <textBtnClock
        class="md"
        :disabled="false"
        v-bind:name="'Olvide mi contraseña :c'"
        :target="'_blank'"
        :href="'#/auth'"
        v-on:on-click="enviar"
      />
      <br />
      <br />
      <p>{{ optionCLock }}</p>
      <selectClock
        class="md black"
        :enabledOptionTitle="true"
        :optionTitle="'Selecciona tu opcion'"
        :options="['Ser', 'No ser', 'Tal vez']"
        v-model="optionCLock"
        :disabled="false"
      />
      <br />
      <br />
      <logoGithub class="black" v-on:on-click="enviar" />
      <br />
      <logoGoogle class="black" v-on:on-click="enviar" />
      <br />
      <logoFacebook class="black" v-on:on-click="enviar" />
      <br />
      <logoGit class="black" v-on:on-click="enviar" />
      <br />
      <logoFigma class="black" v-on:on-click="enviar" />
      <br />
      <logoSelenium class="black" v-on:on-click="enviar" />
      <br />
      <logoOutlook class="black" v-on:on-click="enviar" />
      <br />
      <logoLinkedin class="black" v-on:on-click="enviar" />
      <br />
      <logoJira class="black" v-on:on-click="enviar" />
      <br />
    </div>
    <div id="white-section">
      <br />
      <br />
      <titleClock id="title" class="lg white" v-bind:title="'Ingrese ahora'" />
      <br />
      <br />
      <inputClock
        class="md white"
        :disabled="false"
        type="email"
        placeholder="Escriba su correo electronico"
        v-bind:success="'null'"
        v-model="state"
      />
      <br />
      <br />
      <btnClock class="md white" :disabled="false" v-on:on-click="enviar" />
      <br />
      <br />
      <textBtnClock
        class="md white"
        :disabled="false"
        v-bind:name="'Olvide mi contraseña :c'"
        :target="'_blank'"
        :href="'#/auth'"
        v-on:on-click="enviar"
      />
      <br />
      <br />
      <logoGithub class="white" v-on:on-click="enviar" />
      <br />
      <logoGoogle class="white" v-on:on-click="enviar" />
      <br />
      <logoFacebook class="white" v-on:on-click="enviar" />
      <br />
      <logoGit class="white" v-on:on-click="enviar" />
      <br />
      <logoFigma class="white" v-on:on-click="enviar" />
      <br />
      <logoSelenium class="white" v-on:on-click="enviar" />
      <br />
      <logoOutlook class="white" v-on:on-click="enviar" />
      <br />
      <logoLinkedin class="white" v-on:on-click="enviar" />
      <br />
      <logoJira class="white" v-on:on-click="enviar" />
      <br />
      <selectClock
        class="sm white"
        :enabledOptionTitle="true"
        :optionTitle="'hola mundo como esta esto es un select'"
        :options="['Ser', 'No ser', 'Tal vez']"
        v-model="optionCLock"
        :disabled="false"
      />
      <br />
      <logoGithub v-on:on-click="enviar" />
      <br />
      <logoGoogle v-on:on-click="enviar" />
      <br />
      <logoFacebook v-on:on-click="enviar" />
      <br />
      <logoGit v-on:on-click="enviar" />
      <br />
      <logoFigma v-on:on-click="enviar" />
      <br />
      <logoSelenium v-on:on-click="enviar" />
      <br />
      <logoOutlook v-on:on-click="enviar" />
      <br />
      <logoLinkedin v-on:on-click="enviar" />
      <br />
      <logoJira v-on:on-click="enviar" />
      <br />
      <br />
    </div>
    <div id="form-auth">
      <br />
      <br />
      <img src="../src/icons/logo.png" />
      <br />
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
      <br />
      <br />
    </div>
    <div id="form-login">
      <br />
      <br />
      <formLoginClock
        :hrefAccount="'#/account'"
        :targetAccount="'_self'"
        :nameHrefAccount="'Ya tengo una cuenta :)'"
        :titleForm="'Registrate'"
        :placeholderEmail="'Ingrese su correo electronico'"
        :placeholderPwd="'Ingrese una contraseña segura'"
        :placeholderUserName="'Ingrese su nombre completo'"
        :titleSelectCity="'Seleciona tu ciudad'"
        :minEmail="1"
        :maxEmail="4"
        :minPwd="2"
        :maxPwd="6"
        :minUserName="2"
        :maxUserName="6"
        v-on:click-btn="enviar"
        v-model:userPassword="userPassword"
        v-model:userEmail="userEmail"
        v-model:userName="userName"
        v-model:userCity="userCity"
      />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { YourclockWebcomponentsLibSample } from '@/entry.esm';

export default defineComponent({
  name: "ServeDev",
  // components: {
  //  YourclockWebcomponentsLibSample,
  // }
  data() {
    return {
      state: "",
      optionCLock: "none",
      userEmail: "",
      userPassword: "",
      userName: "",
      userCity: "",
    };
  },
  computed: {
    longitud() {
      return this.state.length;
    },
  },
  methods: {
    enviar() {
      console.log(this.userEmail);
    },
  },
});
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
  background: black;
}
#white-section {
  background: white;
}
#black-section {
  background: black;
}
#form-auth {
  background: white;
}
#form-login {
  background: black;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 12%;
}
formAuthClock {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100vh;
}
p {
  color: white;
}
</style>
