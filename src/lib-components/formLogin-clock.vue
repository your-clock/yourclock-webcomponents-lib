<template>
  <div class="form">
    <div class="login">
      <titleClock
          id="text-title"
          class="lg white"
          v-bind:title="titleForm"
      />
      <inputClock
          id="input-userName"
          class="sm white"
          :disabled="false"
          type="text"
          :placeholder=placeholderUserName
          v-bind:success="comprobarUserName"
          v-model="userName"
          :value="userName"
          @input="$emit('update:userName', $event.target.value)"
      />
      <selectClock
          id="select-city"
          class="sm white"
          :enabledOptionTitle="true"
          :optionTitle="titleSelectCity"
          :options="cities"
          v-model="userCity"
          @input="$emit('update:userCity', $event.target.value)"
          :disabled="false"
      />
      <inputClock
          id="input-email"
          class="sm white"
          :disabled="false"
          type="email"
          :placeholder=placeholderEmail
          v-bind:success="comprobarEmail"
          v-model="userEmail"
          :value="userEmail"
          @input="$emit('update:userEmail', $event.target.value)"
      />
      <inputClock
          id="input-pwd"
          class="sm white"
          :disabled="false"
          type="password"
          :placeholder=placeholderPwd
          v-bind:success="comprobarPassword"
          v-model="userPassword"
          :value="userPassword"
          @input="$emit('update:userPassword', $event.target.value)"
      />
      <btnClock
          id="btn-login"
          class="lg white"
          :disabled="comprobarBtnEnviar"
          v-on:on-click="$emit('click-btn')"
      />
      <textBtnClock
          id="href-account"
          class="sm white"
          :disabled="false"
          v-bind:name="nameHrefAccount"
          :target="targetAccount"
          :href="hrefAccount"
      />
    </div>
  </div>
</template>

<script>

import Geonames from 'geonames.js';

export default {
  name: 'formLogin-clock',
  props: {
    placeholderUserName: {
      type: String,
      require: false,
      default: 'Ingrese su nombre completo'
    },
    placeholderPwd: {
      type: String,
      require: false,
      default: 'Ingrese su contraseña'
    },
    placeholderEmail: {
      type: String,
      require: false,
      default: 'Ingrese su correo electronico'
    },
    titleForm: {
      type: String,
      require: false,
      default: 'Registrese'
    },
    titleSelectCity: {
      type: String,
      require: false,
      default: 'Seleccione su ciudad'
    },
    nameHrefAccount: {
      type: String,
      require: false,
      default: 'Ya tengo una cuenta'
    },
    hrefAccount: {
      type: String,
      require: true
    },
    targetAccount: {
      type: String,
      require: false,
      default: '_self'
    },
    minEmail: {
      type: Number,
      require: false,
      default: 0
    },
    maxEmail: {
      type: Number,
      require: false,
      default: 6
    },
    minPwd: {
      type: Number,
      require: false,
      default: 0
    },
    maxPwd: {
      type: Number,
      require: false,
      default: 8
    },
    minUserName: {
      type: Number,
      require: false,
      default: 0
    },
    maxUserName: {
      type: Number,
      require: false,
      default: 8
    }
  },
  emits: [
    "click-btn",
    "update:userName",
    "update:userPwd",
    "update:userEmail",
    "update:userCity"
  ],
  data(){
    return{
      userEmail: "",
      userName: "",
      userPassword: "",
      userCity: "",
      cities: null
    }
  },
  async created() {
    const geonames = Geonames({
      username: 'yourclock',
      lan: 'es',
      encoding: 'JSON'
    });
    try{
      const citiesId = await geonames.search({country: 'CO', featureClass: 'P', maxRows: 1000});
      this.cities = citiesId.geonames.map((city) =>{
        return city.toponymName;
      })
    }catch(err){
      console.error(err);
    }
  },
  computed:{
    comprobarEmail(){
      return this.userEmail.length <= this.minEmail ? 'null' : this.userEmail.length >= this.maxEmail ? 'true' : 'false'
    },
    comprobarUserName(){
      return this.userName.length <= this.minUserName ? 'null' : this.userName.length >= this.maxUserName ? 'true' : 'false'
    },
    comprobarPassword(){
      return this.userPassword.length <= this.minPwd ? 'null' : this.userPassword.length >= this.maxPwd ? 'true' : 'false'
    },
    comprobarCity(){
      return this.userCity.length <= 0 ? 'null' : this.userCity.length >= 1 ? 'true' : 'false'
    },
    comprobarBtnEnviar(){
      return !(this.comprobarUserName === 'true' && this.comprobarEmail === 'true' && this.comprobarPassword === 'true' && this.comprobarCity === 'true')
    }
  }
}
</script>

<style scoped>

@media only screen and (min-width: 1024px) {
  /* For desktop: */
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .login {
    display: flex;
    flex-direction: column;
    width: 300px;
    background: white;
    border-radius: 25px;
    padding: 32px 40px;
    box-shadow: 10px 10px 5px rgba(255, 255, 255, 0.25);
  }

  #text-title {
    text-align: center;
    margin-bottom: 32px;
    margin-left: 40px;
    margin-right: 40px;
  }

  #input-userName {
    margin-bottom: 24px;
  }

  #select-city {
    margin-bottom: 24px;
  }

  #input-email {
    margin-bottom: 24px;
  }

  #input-pwd {
    margin-bottom: 40px;
  }

  #btn-login {
    margin-bottom: 32px;
    margin-left: 64px;
    margin-right: 64px;
  }

  #href-account {
    text-align: center;
  }
}

@media only screen and (min-width: 700px) and (max-width: 1024px) {
  /* For tablets: */
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .login {
    display: flex;
    flex-direction: column;
    width: 450px;
    background: white;
    border-radius: 25px;
    padding: 40px 48px;
    box-shadow: 10px 10px 5px rgba(255, 255, 255, 0.25);
  }

  #text-title {
    text-align: center;
    margin-bottom: 32px;
    margin-left: 40px;
    margin-right: 40px;
  }

  #input-userName {
    margin-bottom: 24px;
  }

  #select-city {
    margin-bottom: 24px;
  }

  #input-email {
    margin-bottom: 24px;
  }

  #input-pwd {
    margin-bottom: 40px;
  }

  #btn-login {
    margin-bottom: 32px;
    margin-left: 64px;
    margin-right: 64px;
  }

  #href-account {
    text-align: center;
  }
}

@media only screen and (max-width: 700px) {
  /* For mobile phones: */
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .login {
    display: flex;
    flex-direction: column;
    background: white;
    width: 87%;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 40px 48px;
    box-shadow: 10px 10px 5px rgba(255, 255, 255, 0.25);
  }

  #text-title {
    text-align: center;
    margin-bottom: 32px;
    margin-left: 40px;
    margin-right: 40px;
  }

  #input-userName {
    margin-bottom: 24px;
  }

  #select-city {
    margin-bottom: 24px;
  }

  #input-email {
    margin-bottom: 24px;
  }

  #input-pwd {
    margin-bottom: 40px;
  }

  #btn-login {
    margin-bottom: 32px;
    margin-left: 64px;
    margin-right: 64px;
  }

}

</style>