<template>
  <div class="form">
    <div class="auth">
      <titleClock
          id="text-title"
          class="lg"
          v-bind:title="titleForm"
      />
      <titleClock
          id="text-email"
          class="md"
          v-bind:title="subtitle1"
      />
      <inputClock
          id="input-email"
          class="sm"
          :disabled="false"
          type="email"
          :placeholder=placeholderEmail
          v-bind:success="comprobarEmail"
          v-model="userEmail"
          :value="userEmail"
          @input="$emit('update:userEmail', $event.target.value)"
      />
      <titleClock
          id="text-pwd"
          class="md"
          v-bind:title="subtitle2"
      />
      <inputClock
          id="input-pwd"
          class="sm"
          :disabled="false"
          type="password"
          :placeholder=placeholderPwd
          v-bind:success="comprobarPassword"
          v-model="userPassword"
          :value="userPassword"
          @input="$emit('update:userPassword', $event.target.value)"
      />
      <textBtnClock
          id="href-pwd"
          class="sm"
          :disabled="false"
          v-bind:name="nameHrefPwd"
          :target="targetPwd"
          :href="hrefPwd"
      />
      <btnClock
          id="btn-login"
          class="lg"
          :disabled="comprobarBtnEnviar"
          v-on:on-click="$emit('click-btn')"
      />
      <textBtnClock
          id="href-account"
          class="sm"
          :disabled="false"
          v-bind:name="nameHrefAccount"
          :target="targetAccount"
          :href="hrefAccount"
      />
    </div>
    <div class="accounts">
      <titleClock
          id="text-accounts"
          class="sm"
          v-bind:title="titleAccounts"
      />
      <div class="list-accounts">
        <logoGoogle id="google" v-on:on-click="$emit('click-google')"/>
        <logoFacebook id="facebook" v-on:on-click="$emit('click-facebook')"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'formAuth-clock',
  props: {
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
      default: 'Ingrese ahora'
    },
    titleAccounts: {
      type: String,
      require: false,
      default: 'O ingrese con:'
    },
    subtitle1: {
      type: String,
      require: false,
      default: 'Correo'
    },
    subtitle2: {
      type: String,
      require: false,
      default: 'Contraseña'
    },
    nameHrefPwd: {
      type: String,
      require: false,
      default: 'Olvide mi contraseña'
    },
    hrefPwd: {
      type: String,
      require: true
    },
    targetPwd: {
      type: String,
      require: false,
      default: '_self'
    },
    nameHrefAccount: {
      type: String,
      require: false,
      default: 'No tengo una cuenta'
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
    }
  },
  emits: [
    "click-btn",
    "click-google",
    "click-facebook",
    "update:userPassword",
    "update:userEmail"
  ],
  data(){
    return{
      userEmail: "",
      userPassword: ""
    }
  },
  computed:{
    comprobarEmail(){
      return this.userEmail.length <= this.minEmail ? 'null' : this.userEmail.length >= this.maxEmail ? 'true' : 'false'
    },
    comprobarPassword(){
      return this.userPassword.length <= this.minPwd ? 'null' : this.userPassword.length >= this.maxPwd ? 'true' : 'false'
    },
    comprobarBtnEnviar(){
      return !(this.comprobarPassword === 'true' && this.comprobarEmail === 'true')
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

  .auth {
    display: flex;
    flex-direction: column;
    width: 300px;
    background: black;
    border-radius: 25px;
    padding: 40px 48px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);
  }

  #text-title {
    text-align: center;
    margin-bottom: 24px;
    margin-left: 40px;
    margin-right: 40px;
  }

  #text-email {
    text-align: left;
    margin-bottom: 16px;
  }

  #input-email {
    margin-bottom: 24px;
  }

  #text-pwd {
    text-align: left;
    margin-bottom: 16px;
  }

  #input-pwd {
    margin-bottom: 24px;
  }

  #href-pwd {
    text-align: right;
    margin-bottom: 32px;
  }

  #btn-login {
    margin-bottom: 32px;
    margin-left: 64px;
    margin-right: 64px;
  }

  #href-account {
    text-align: center;
  }

  #text-accounts {
    text-align: center;
    margin-bottom: 24px;
  }

  .accounts {
    display: flex;
    flex-direction: column;
    width: 300px;
    background: black;
    border-radius: 25px;
    padding: 24px 48px;
    margin-top: 32px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);
  }

  .list-accounts {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  #facebook {
    margin-left: 16px;
    margin-right: 16px;
  }

  #google {
    margin-left: 16px;
    margin-right: 16px;
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

  .auth {
    display: flex;
    flex-direction: column;
    width: 450px;
    background: black;
    border-radius: 25px;
    padding: 40px 48px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);
  }

  .accounts {
    display: flex;
    flex-direction: column;
    width: 450px;
    background: black;
    border-radius: 25px;
    padding: 32px 48px;
    margin-top: 16px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);
  }

  #text-title {
    text-align: center;
    margin-bottom: 40px;
    margin-right: 40px;
    margin-left: 40px;
  }

  #text-email {
    text-align: left;
    margin-bottom: 16px;
  }

  #input-email {
    text-align: left;
    margin-bottom: 24px;
  }

  #text-pwd {
    text-align: left;
    margin-bottom: 16px;
  }

  #input-pwd {
    text-align: left;
    margin-bottom: 32px;
  }

  #href-pwd {
    text-align: right;
    margin-bottom: 32px;
  }

  #btn-login {
    margin-bottom: 40px;
    margin-left: 56px;
    margin-right: 56px;
  }

  #href-account {
    text-align: center;
  }

  #text-accounts {
    text-align: center;
    margin-bottom: 24px;
  }

  .list-accounts {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  #facebook {
    margin-left: 16px;
    margin-right: 16px;
  }

  #google {
    margin-left: 16px;
    margin-right: 16px;
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

  .auth {
    display: flex;
    flex-direction: column;
    background: black;
    width: 87%;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 40px 48px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);
  }

  .accounts {
    display: flex;
    flex-direction: column;
    background: black;
    width: 87%;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 32px 48px;
    margin-top: 16px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);
  }

  #text-title {
    text-align: center;
    margin-bottom: 40px;
    margin-right: 40px;
    margin-left: 40px;
  }

  #text-email {
    text-align: left;
    margin-bottom: 16px;
  }

  #input-email {
    text-align: left;
    margin-bottom: 24px;
  }

  #text-pwd {
    text-align: left;
    margin-bottom: 16px;
  }

  #input-pwd {
    text-align: left;
    margin-bottom: 32px;
  }

  #href-pwd {
    text-align: right;
    margin-bottom: 32px;
  }

  #btn-login {
    margin-bottom: 40px;
    margin-left: 40px;
    margin-right: 40px;
  }

  #href-account {
    text-align: center;
  }

  #text-accounts {
    text-align: center;
    margin-bottom: 24px;
  }

  .list-accounts {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  #facebook {
    margin-left: 16px;
    margin-right: 16px;
  }

  #google {
    margin-left: 16px;
    margin-right: 16px;
  }
}

</style>
