<template>
    <div class="alert">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        <strong class="title">{{title}}</strong>
        <span class="message">{{msg}}</span>
    </div>
</template>

<script>
export default {
    name: 'alert-clock',
    props: {
        msg: {
            type: String,
            require: true
        },
        state: {
            type: Boolean,
            default: true
        },
        title: {
          type: String,
          required: true
        }
    }
}
</script>

<style scoped>


  .alert{
    margin-bottom: 0px;
  }

  .message{
    margin-left: 40px;
    font-family: 'font-clock-italic'
  }

  .title{
    font-family: 'font-clock-bold'
  }

  .lg{
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    padding: 17px;
  }

  .sm{
    margin-left: auto;
    margin-right: auto;
    font-size: 15px;
    padding: 10px;
  }

  .md{
    margin-left: auto;
    margin-right: auto;
    font-size: 17px;
    padding: 15px;
  }

  .danger.alert {
      padding: 12px;
      background-color: rgb(135, 0, 0);
      color: white;
  }

  .warning.alert {
      padding: 12px;
      background-color: #a1a100;
      color: black;
  }

  .closebtn {
      margin-left: 15px;
      color: white;
      font-weight: bold;
      float: right;
      font-size: 22px;
      line-height: 15px;
      cursor: pointer;
      transition: 0.3s;
  }

  .closebtn:hover {
      color: black;
  }

</style>
