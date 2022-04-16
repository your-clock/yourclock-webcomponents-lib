<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :success="state"
    >
</template>

<script>

export default {
    name: 'input-clock',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        state: {
            type: String,
            default: 'null'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: String,
            default: ''
        }
    },
    emits: [
        'update:modelValue'
    ]
}

</script>

<style scoped>

    input.sm{
      height: 25px;
      font-size: 11px;
    }
    input.md{
      height: 30px;
      font-size: 14px;
    }
    input.lg{
      height: 35px;
      font-size: 17px;
    }

    input.black{
      color: white;
      border: 1px solid black;
      border-bottom: 2px solid white;
      background-color: black;
    }
    input.white{
      color: black;
      border: 1px solid white;
      border-bottom: 2px solid black;
      background-color: white;
    }

    input{
      font-family: font-clock-normal;
      height: 30px;
      font-size: 14px;
      padding-left: 5px;
      padding-bottom: 0px;
      color: white;
      border: 1px solid black;
      letter-spacing: 1px;
      border-bottom: 2px solid white;
      background-color: black;
      border-radius: 4px;
    }
    input:hover::-webkit-input-placeholder{
      color: rgb(175, 175, 175);
    }
    input:hover::-moz-placeholder{
      color: rgb(175, 175, 175);
    }
    input:hover::-ms-input-placeholder{
      color: rgb(175, 175, 175);
    }
    input:focus{
      border: 1px dashed white;
      border-bottom: 2px solid white;
      outline: none;
    }
    input:focus.black{
      border: 1px dashed white;
      border-bottom: 2px solid white;
    }
    input:focus.white{
      border: 1px dashed black;
      border-bottom: 2px solid black;
    }
    input:focus::-webkit-input-placeholder{
      color: rgb(175, 175, 175);
    }
    input:focus::-moz-placeholder{
      color: rgb(175, 175, 175);
    }
    input:focus:-ms-input-placeholder{
      color: rgb(175, 175, 175);
    }
    input:disabled{
      color: rgb(135, 135, 135);
      border-bottom: 2px dashed rgb(135, 135, 135);
    }
    input:disabled:hover{
      cursor: not-allowed;
    }
    input:disabled::-webkit-input-placeholder {
      color: rgb(135, 135, 135);
    }
    input:disabled::-moz-placeholder {
      color: rgb(135, 135, 135);
    }
    input:disabled:-ms-input-placeholder {
      color: rgb(135, 135, 135);
    }

    input[success="true"]{
      background-image: url(../icons/ok-32.png);
      background-repeat: no-repeat;
      background-position: 99% center;
      background-size: 20px;
    }

    input[success="false"]{
      background-image: url(../icons/x-mark-3-32.png);
      background-repeat: no-repeat;
      background-position: 99% center;
      background-size: 20px;
    }

    input[success="true"].white{
      background-image: url(../icons/ok-32-black.png);
    }

    input[success="false"].white{
      background-image: url(../icons/x-mark-3-32-black.png);
    }

    input[success="true"].black{
      background-image: url(../icons/ok-32.png);
    }

    input[success="false"].black{
      background-image: url(../icons/x-mark-3-32.png);
    }

</style>
