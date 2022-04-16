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
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACUklEQVRYhb2XT0hUURSHvzsMIiIhLcRVibRoFVK7FiJY0LKlIBFtIiKCpE3tQkokWrUKl0HQLtoEkkhrFYuIgoiEAguJyMqsnL4W7408HjPz3pt5+ts85p4/v3PPuXPvOYGcULuAE8BJ4CgwBPQCf4BN4BOwBMwDcyGEzby+s4j71Rn1i/nxTb2rHuiEuKpejZ21i1/qTbW7KPmA+qwD4jRW1KG85EPquxLJ6/isDmeR9+8SeTKIxplQK+r8LpLX8cJGZ0K9vAfkdcykyferX0sk+K4ut5D/Ni5FJY7hCtCX65TmwwRwDDgDbDSQdwHX6ruvqmsl7v5eKrvXm+j9VPehjpZI/lbtTZB3q69b6I9XgLGS0v4POBdC+JFYmwIOt7AZQ31S0u5vp1J/XP2bYbOI+rIE8lcm/ttqj1E5srBeAXo6TP02cDaEsJVYmwYO5bCtVohql4XHwEHgUQPZrRDCUv2HOgpcyuFzxyCrBPNqNdatqg8TsuW6LJb3qu8LlG69AnzMiPFNCGEbIP5OAA+ALaLUbyd07wCDuXcPq6hTGVHW1IuprFXUkdTaqVi3CGZRR3Io1tTzzbah9qkfCpKrjhe5ipsGod5vgzy6imMHN3Ia1dQLKfLTbZCrziadFHmOa+pkbDdg1OUUxc5znAyiaEOyaPuv6HSjOu5VS7ZiszbdqCnNc4e3izWz2nN1cJeCWFOPtCRPZWKhRPL8g0nqTEza+Wg2ZTTYtgejbEyr6wWIcw+noUAgXcAo0Xg+TDSe1zvpDWAVeA4sAE/zjuf/AeNr4ntDo0DlAAAAAElFTkSuQmCC');
      background-repeat: no-repeat;
      background-position: 99% center;
      background-size: 20px;
    }

    input[success="false"]{
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACPklEQVRYhbWXPWsUURiFzwxBJEhYFglBRCSFWFiEIClELAJ2wcIqv0AsgpWKiE1IEcRCrERSWIulRRANqYLIIhqCRYoQP9gihLAqLGuqx+LuwDDOe++d2d3Tzpn3OXPv3I83UaSAMUlXJV2XNCtpWlJDUirpj6Rvkr5I2pT0PkmSv7G1Q+DTwDLQJl4d4BlwdhBwCiz1i9VVrx/+RFV4A1gfAFzUJ+BcLHwS2BkiPNNP4GLMl2+PAJ6pDZz3zfmbEcIzbQMnywLc9rzUAp5UgGwCzz3PV8uG/sgwfwQafd/DCPhbYBwQ8NTwHAPT+QCPDGMrg+e89z3wdXLDGwjxIj/33w3TgvG/3A3Bc94m5XtJFzglYM7zRR3gckQIC97ATaGlxdCQgvs3ZjwhLPgE8CFQe03Aq4ApFCI14FsRdVvCP0RRIWrCAQ4F7EaagyEqwgE6/w1fQE1J9zzPb0i6Uqkibq3HqvSHK9QrW6KWDgS8Hha8RoiWgAd14bg5vzRAiLXQRgRub7fgW/iXaOjjFrOteN8wbADjHngmXwjrnOkCE6GkNyPg3hDAGcrPgpfFoodGyvmCz7e9HgGzOf8U8LXEdwxcKCa9ZRTtAvOED5Z8iDkPHOBx2Vyl2DfhHtV2zN/AnvFsB2s5487uUdyIM7XJ34SMEFMjCtEmdC0vjMS7IcI/Y13HPSFS4A5uPuuqB6xQtTUrBJkEVoGDCuCsOQ22Y0mFIGOSrsm15zNy7XlTrj3/JemHXHu+oQrt+T+SiWY1a+IcVQAAAABJRU5ErkJggg==');
      background-repeat: no-repeat;
      background-position: 99% center;
      background-size: 20px;
    }

    input[success="true"].white{
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACDUlEQVRYhb3XPWhUQRDA8V+OIwQREYsjlchVFiIiVhYSiAErsUxhYyNiYSFWdnKIBCsRi5BSLKzEShCDWCchioiFiILFKYcEv9FwxmLvHefq3dt39y4Dw4PdN/uf3Z2d3ZmQLpM4jjkcRh078Qvf8R6rWMbDTlspUsMCPmIrUT/hJvaOAq7iUmewVHCsP3AVU0Xh03gyAjjWdWHLkqSO1yXCM/2AQ3nw2pjgvU70XYmKEMHjgmf6TJ+YuLAN8EwXYvgebJQI+IK1Af0/RVvRKHmGJzvjntb/GC9l8CqaJcIXo9W93Oe/b9gFMyXCXwnpOZMpvBzw/3wFs8qR3ziDrz1tDewfYDMLDwZ4WESvR4MfxWaOzQo8LwH+wt9ne4ewHXl2LUbPfJs4Es3+RqLthkRP7wtX673/9F2J4DNoF3EgbwuWhaOq873b07fW00c4AW8KrF6L/CC8Fc2wijvCXX8g6lssAO8GYV4WbON8BKrgWNR2QvrSZ7qkM1Dej22c1V92411B+BbmSU/Fg5y4PQS8m4oJkZxi1Ma5CH5qCHh3+TMpch23cbFjNy28corC/7mOKf4gWTH8LXothrN9T7J1A57pNWmZcVhtSnie7xuTE00czIP3rsTjEuGFCpNMKkK0j1qaNYTCdmipCVHbKgBOLk4nCjgyKVy1c0KJVRdSMHzGWzwVtu6RxPL8Dx6ps/CAnOZVAAAAAElFTkSuQmCC');
    }

    input[success="false"].white{
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACKklEQVRYhbXXP2gUURDH8U+WICISjiAhiIhYiIVFEEklFoKdlVUKa7EQKxERG7EQsRArkRRWFmJpEURDqiASREOwsBD/cUUI4VQIMdVZ7K2e6763b3O5gal2dr6/N+/fvBHpNoqTOIPjOIwWMvzEZ7zDAl7iV4PcUduHm2ijm+gd3MeBQcAZLvWSpYLLvtkTv6spvIW5AcBlf4ODqfAJrOwgvPBvOJoy8uUhwAtv41AInuHZEOGFL2N3lYCLkZ+WcLcBZAEPIt9vl+EtrAeCX/e+w/UE+HPs6cXfC8Rsyc+RP3YjMvKWf+1qBD7n//KGRDwsAjJ8CQSdLZeqZ1cS4TCu+izZwF6YjoyogxMJIkLwlnwKQ/lniJe0K18bUxERIfgYXtXknoUnNUF1IrIAfDEh7xLxEqWK2A68izX4kBicIqIJvFhjjQR08Tgi4HzDXB3yeUj9IbTg+q1qi4Z8FZ7uILypiCW4NgB8DMcGEDFL/CDqys/2EHxRfGHWDW6GfB9/CgTM+3uxVMFTdkfontno5YkqPZcArxOxX/Vd8KicdC2g8nQpLna8rstb9sIm8b4ibgtHykovBJIWIuouln4R0xF4F3cqKiUT7oQ3NTuwfuBj4NuKyHYeN5yOuPC2UidUZZNDEtGW0Jb3V+LFDsLfirTjIctwWT6f2wVv4pZtPM36bULeRq82ABeP09rn2EgDIaM4JX+eT8kX07i8Ut/xVf48n9fgef4bNn5scvFxUbUAAAAASUVORK5CYII=');
    }

    input[success="true"].black{
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACUklEQVRYhb2XT0hUURSHvzsMIiIhLcRVibRoFVK7FiJY0LKlIBFtIiKCpE3tQkokWrUKl0HQLtoEkkhrFYuIgoiEAguJyMqsnL4W7408HjPz3pt5+ts85p4/v3PPuXPvOYGcULuAE8BJ4CgwBPQCf4BN4BOwBMwDcyGEzby+s4j71Rn1i/nxTb2rHuiEuKpejZ21i1/qTbW7KPmA+qwD4jRW1KG85EPquxLJ6/isDmeR9+8SeTKIxplQK+r8LpLX8cJGZ0K9vAfkdcykyferX0sk+K4ut5D/Ni5FJY7hCtCX65TmwwRwDDgDbDSQdwHX6ruvqmsl7v5eKrvXm+j9VPehjpZI/lbtTZB3q69b6I9XgLGS0v4POBdC+JFYmwIOt7AZQ31S0u5vp1J/XP2bYbOI+rIE8lcm/ttqj1E5srBeAXo6TP02cDaEsJVYmwYO5bCtVohql4XHwEHgUQPZrRDCUv2HOgpcyuFzxyCrBPNqNdatqg8TsuW6LJb3qu8LlG69AnzMiPFNCGEbIP5OAA+ALaLUbyd07wCDuXcPq6hTGVHW1IuprFXUkdTaqVi3CGZRR3Io1tTzzbah9qkfCpKrjhe5ipsGod5vgzy6imMHN3Ia1dQLKfLTbZCrziadFHmOa+pkbDdg1OUUxc5znAyiaEOyaPuv6HSjOu5VS7ZiszbdqCnNc4e3izWz2nN1cJeCWFOPtCRPZWKhRPL8g0nqTEza+Wg2ZTTYtgejbEyr6wWIcw+noUAgXcAo0Xg+TDSe1zvpDWAVeA4sAE/zjuf/AeNr4ntDo0DlAAAAAElFTkSuQmCC');
    }

    input[success="false"].black{
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACPklEQVRYhbWXPWsUURiFzwxBJEhYFglBRCSFWFiEIClELAJ2wcIqv0AsgpWKiE1IEcRCrERSWIulRRANqYLIIhqCRYoQP9gihLAqLGuqx+LuwDDOe++d2d3Tzpn3OXPv3I83UaSAMUlXJV2XNCtpWlJDUirpj6Rvkr5I2pT0PkmSv7G1Q+DTwDLQJl4d4BlwdhBwCiz1i9VVrx/+RFV4A1gfAFzUJ+BcLHwS2BkiPNNP4GLMl2+PAJ6pDZz3zfmbEcIzbQMnywLc9rzUAp5UgGwCzz3PV8uG/sgwfwQafd/DCPhbYBwQ8NTwHAPT+QCPDGMrg+e89z3wdXLDGwjxIj/33w3TgvG/3A3Bc94m5XtJFzglYM7zRR3gckQIC97ATaGlxdCQgvs3ZjwhLPgE8CFQe03Aq4ApFCI14FsRdVvCP0RRIWrCAQ4F7EaagyEqwgE6/w1fQE1J9zzPb0i6Uqkibq3HqvSHK9QrW6KWDgS8Hha8RoiWgAd14bg5vzRAiLXQRgRub7fgW/iXaOjjFrOteN8wbADjHngmXwjrnOkCE6GkNyPg3hDAGcrPgpfFoodGyvmCz7e9HgGzOf8U8LXEdwxcKCa9ZRTtAvOED5Z8iDkPHOBx2Vyl2DfhHtV2zN/AnvFsB2s5487uUdyIM7XJ34SMEFMjCtEmdC0vjMS7IcI/Y13HPSFS4A5uPuuqB6xQtTUrBJkEVoGDCuCsOQ22Y0mFIGOSrsm15zNy7XlTrj3/JemHXHu+oQrt+T+SiWY1a+IcVQAAAABJRU5ErkJggg==');
    }

</style>
