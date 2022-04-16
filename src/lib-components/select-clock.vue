<template>
  <div class="content-select">
    <select
        @input="$emit('update:modelValue', $event.target.value)"
        :disabled="disabled"
    >
      <option disabled selected value="" v-if="enabledOptionTitle">{{ optionTitle }}</option>
      <option v-for="option in options">{{ option }}</option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'select-clock',
  props: {
    options: {
      type: Object,
      require: true
    },
    enabledOptionTitle: {
      type: Boolean,
      default: true
    },
    optionTitle: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    'update:modelValue'
  ]
}

</script>

<style scoped>

  .content-select.sm select{
    height: 25px;
    font-size: 11px;
  }
  .content-select.md select{
    height: 30px;
    font-size: 14px;
  }
  .content-select.lg select{
    height: 35px;
    font-size: 17px;
  }

  .content-select.black select{
    color: white;
    border: 1px solid black;
    border-bottom: 2px solid white;
    background-color: black;
  }
  .content-select.white select{
    color: black;
    border: 1px solid white;
    border-bottom: 2px solid black;
    background-color: white;
  }

  .content-select select{
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: font-clock-normal;
    height: 30px;
    width: 100%;
    outline: 0;
    font-size: 14px;
    color: white;
    border: 1px solid black;
    padding-left: 5px;
    letter-spacing: 1px;
    border-bottom: 2px solid white;
    background-color: black;
    border-radius: 4px;
  }
  .content-select select::-ms-expand {
    display: none;
  }
  .content-select{
    overflow: hidden;
    position: relative;
  }
  .content-select:before {
    content: '';
    position: absolute;
    left: calc(100% - 16px);
    top: calc(100% - 18px);
    border-style: solid;
    border-width: 11px 5px 0 5px;
    border-color: white transparent transparent transparent;
    z-index: 91;
    pointer-events: none;
  }
  .content-select:after {
    content: '';
    position: absolute;
    left: calc(100% - 24px);
    top: calc(100% - 22px);
    border-width: 18px 14px 0 10px;
    border-style: solid;
    border-color: black;
    z-index: 90;
    pointer-events: none;
  }
  .content-select.lg:after{
    border-width: 22px 18px 0 10px;
    left: calc(100% - 28px);
    top: calc(100% - 26px);
  }
  .content-select.md:after{
    left: calc(100% - 26px);
    top: calc(100% - 24px);
    border-width: 20px 16px 0 10px;
  }
  .content-select.sm:after{
    left: calc(100% - 24px);
    top: calc(100% - 22px);
    border-width: 18px 14px 0 10px;
  }
  .content-select.white:after {
    border-color: white;
  }
  .content-select.black:after {
    border-color: black;
  }
  .content-select.black:before {
    border-color: white transparent transparent transparent;
  }
  .content-select.white:before {
    border-color: black transparent transparent transparent;
  }

  .black select:focus{
    border: 1px dashed white;
    border-bottom: 2px solid white;
    outline: none;
  }
  .white select:focus{
    border: 1px dashed black;
    border-bottom: 2px solid black;
    outline: none;
  }

  select:disabled{
    color: rgb(135, 135, 135);
    border-bottom: 2px dashed rgb(135, 135, 135);
  }
  select:disabled:hover{
    cursor: not-allowed;
  }

</style>