<template>

    <button :disabled="disabled" v-on:click="$emit('on-click')">
        <div class="continue-icon"></div>
    </button>

</template>

<script>

export default {
    name: 'btn-clock',
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    emits: [
      "on-click"
    ]
}

</script>

<style scoped>

    /* Tamaños */
    button.sm{
        height: 30px;
        font-size: 13px;
    }
    button.md{
        height: 35px;
        font-size: 16px;
    }
    button.lg{
        height: 40px;
        font-size: 18px;
    }

    /* Icono triangulo */
    .continue-icon{
        border-left: 25px solid #ffffff;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
    }
    .continue-icon:hover{
        cursor: pointer;
    }
    
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        color: white;
        border: 2px solid white;
        border-radius: 10px;
        outline: none;
    }
    button:hover{
        cursor: pointer;
    }
    button:hover:before {
        width: 100%;
    }
    button:before{
        content:"";
        position: relative;
        top: 0px;
        left: 0px;
        width: 0px;
        height: 100%;
        transition: all 1s ease;
    }

    button:disabled{
        background-color: rgb(181, 181, 181);
        border: 2px solid rgb(181, 181, 181);
        cursor: not-allowed;
    }
    button:disabled:hover:before{
        width: 0%;
    }
    button:disabled:hover .continue-icon{
        cursor: not-allowed;
    }
    button:disabled .continue-icon{
        border-left: 25px solid rgb(74, 74, 74);
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
    }

</style>