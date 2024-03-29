import http from 'http';
import https from 'https';
import url from 'url';
import require$$0 from 'stream';
import assert from 'assert';
import tty from 'tty';
import util from 'util';
import os from 'os';
import zlib from 'zlib';
import { pushScopeId, popScopeId, openBlock, createBlock, createVNode, toDisplayString, withScopeId, createCommentVNode, Fragment, renderList, withDirectives, vShow, resolveComponent } from 'vue';

var script$b = {
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
};

const _withId$a = /*#__PURE__*/withScopeId("data-v-7aa5bb22");

pushScopeId("data-v-7aa5bb22");

const _hoisted_1$6 = {
  class: "alert"
};

const _hoisted_2$4 = /*#__PURE__*/createVNode("span", {
  class: "closebtn",
  onclick: "this.parentElement.style.display='none';"
}, "×", -1);

const _hoisted_3$1 = {
  class: "title"
};
const _hoisted_4$1 = {
  class: "message"
};

popScopeId();

const render$a = /*#__PURE__*/_withId$a((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$6, [_hoisted_2$4, createVNode("strong", _hoisted_3$1, toDisplayString($props.title), 1), createVNode("span", _hoisted_4$1, toDisplayString($props.msg), 1)]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$b = "\n.alert[data-v-7aa5bb22]{\n    margin-bottom: 0px;\n}\n.message[data-v-7aa5bb22]{\n    margin-left: 40px;\n    font-family: 'font-clock-italic'\n}\n.title[data-v-7aa5bb22]{\n    font-family: 'font-clock-bold'\n}\n.lg[data-v-7aa5bb22]{\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 20px;\n    padding: 17px;\n}\n.sm[data-v-7aa5bb22]{\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 15px;\n    padding: 10px;\n}\n.md[data-v-7aa5bb22]{\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 17px;\n    padding: 15px;\n}\n.danger.alert[data-v-7aa5bb22] {\n      padding: 12px;\n      background-color: rgb(135, 0, 0);\n      color: white;\n}\n.warning.alert[data-v-7aa5bb22] {\n      padding: 12px;\n      background-color: #a1a100;\n      color: black;\n}\n.closebtn[data-v-7aa5bb22] {\n      margin-left: 15px;\n      color: white;\n      font-weight: bold;\n      float: right;\n      font-size: 22px;\n      line-height: 15px;\n      cursor: pointer;\n      transition: 0.3s;\n}\n.closebtn[data-v-7aa5bb22]:hover {\n      color: black;\n}\n\n";
styleInject(css_248z$b);

script$b.render = render$a;
script$b.__scopeId = "data-v-7aa5bb22";

var script$a = {
  name: 'btn-clock',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["on-click"]
};

const _withId$9 = /*#__PURE__*/withScopeId("data-v-16cab35a");

pushScopeId("data-v-16cab35a");

const _hoisted_1$5 = /*#__PURE__*/createVNode("div", {
  class: "continue-icon"
}, null, -1);

popScopeId();

const render$9 = /*#__PURE__*/_withId$9((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("button", {
    disabled: $props.disabled,
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('on-click'))
  }, [_hoisted_1$5], 8, ["disabled"]);
});

var css_248z$a = "\n\n    /* Tamaños */\nbutton.sm[data-v-16cab35a]{\n        height: 30px;\n        font-size: 13px;\n}\nbutton.md[data-v-16cab35a]{\n        height: 35px;\n        font-size: 16px;\n}\nbutton.lg[data-v-16cab35a]{\n        height: 40px;\n        font-size: 18px;\n}\nbutton.black[data-v-16cab35a]{\n      background-color: black;\n      color: white;\n      border: 2px solid white;\n}\nbutton.white[data-v-16cab35a]{\n      background-color: white;\n      color: black;\n      border: 2px solid black;\n}\nbutton[data-v-16cab35a]{\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-color: black;\n      color: white;\n      border: 2px solid white;\n      border-radius: 10px;\n      outline: none;\n}\nbutton[data-v-16cab35a]:hover{\n      cursor: pointer;\n}\nbutton[data-v-16cab35a]:hover:before {\n      width: 100%;\n}\nbutton[data-v-16cab35a]:before{\n      content:\"\";\n      position: relative;\n      top: 0px;\n      left: 0px;\n      width: 0px;\n      height: 100%;\n      transition: all 1s ease;\n}\nbutton[data-v-16cab35a]:disabled{\n      background-color: rgb(181, 181, 181);\n      border: 2px solid rgb(181, 181, 181);\n      cursor: not-allowed;\n}\nbutton[data-v-16cab35a]:disabled:hover:before{\n      width: 0%;\n}\nbutton:disabled:hover .continue-icon[data-v-16cab35a]{\n      cursor: not-allowed;\n}\nbutton:disabled .continue-icon[data-v-16cab35a]{\n      border-left: 25px solid rgb(74, 74, 74);\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n}\n\n    /* Icono triangulo */\n.continue-icon[data-v-16cab35a]{\n      border-left: 25px solid white;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n}\n.black .continue-icon[data-v-16cab35a]{\n      border-left: 25px solid white;\n}\n.white .continue-icon[data-v-16cab35a]{\n      border-left: 25px solid black;\n}\n.continue-icon[data-v-16cab35a]:hover{\n      cursor: pointer;\n}\n\n";
styleInject(css_248z$a);

script$a.render = render$9;
script$a.__scopeId = "data-v-16cab35a";

var script$9 = {
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
  emits: ['update:modelValue']
};

const _withId$8 = /*#__PURE__*/withScopeId("data-v-20ce04cb");

pushScopeId("data-v-20ce04cb");

const _hoisted_1$4 = {
  class: "content-select"
};
const _hoisted_2$3 = {
  key: 0,
  disabled: "",
  selected: "",
  value: ""
};

popScopeId();

const render$8 = /*#__PURE__*/_withId$8((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$4, [createVNode("select", {
    onInput: _cache[1] || (_cache[1] = $event => _ctx.$emit('update:modelValue', $event.target.value)),
    disabled: $props.disabled
  }, [$props.enabledOptionTitle ? (openBlock(), createBlock("option", _hoisted_2$3, toDisplayString($props.optionTitle), 1)) : createCommentVNode("", true), (openBlock(true), createBlock(Fragment, null, renderList($props.options, option => {
    return openBlock(), createBlock("option", null, toDisplayString(option), 1);
  }), 256))], 40, ["disabled"])]);
});

var css_248z$9 = "\n.content-select.sm select[data-v-20ce04cb]{\n    height: 25px;\n    font-size: 11px;\n}\n.content-select.md select[data-v-20ce04cb]{\n    height: 30px;\n    font-size: 14px;\n}\n.content-select.lg select[data-v-20ce04cb]{\n    height: 35px;\n    font-size: 17px;\n}\n.content-select.black select[data-v-20ce04cb]{\n    color: white;\n    border: 1px solid black;\n    border-bottom: 2px solid white;\n    background-color: black;\n}\n.content-select.white select[data-v-20ce04cb]{\n    color: black;\n    border: 1px solid white;\n    border-bottom: 2px solid black;\n    background-color: white;\n}\n.content-select select[data-v-20ce04cb]{\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    font-family: font-clock-normal;\n    height: 30px;\n    width: 100%;\n    outline: 0;\n    font-size: 14px;\n    color: white;\n    border: 1px solid black;\n    padding-left: 5px;\n    letter-spacing: 1px;\n    border-bottom: 2px solid white;\n    background-color: black;\n    border-radius: 4px;\n}\n.content-select select[data-v-20ce04cb]::-ms-expand {\n    display: flex;\n}\n.content-select[data-v-20ce04cb]{\n    overflow: hidden;\n    position: relative;\n}\n.content-select[data-v-20ce04cb]:before {\n    content: '';\n    position: absolute;\n    left: calc(100% - 16px);\n    top: calc(100% - 18px);\n    border-style: solid;\n    border-width: 11px 5px 0 5px;\n    border-color: white transparent transparent transparent;\n    z-index: 91;\n    pointer-events: none;\n}\n.content-select[data-v-20ce04cb]:after {\n    content: '';\n    position: absolute;\n    left: calc(100% - 24px);\n    top: calc(100% - 22px);\n    border-width: 18px 14px 0 10px;\n    border-style: solid;\n    border-color: black;\n    z-index: 90;\n    pointer-events: none;\n}\n.content-select.lg[data-v-20ce04cb]:after{\n    border-width: 22px 18px 0 10px;\n    left: calc(100% - 28px);\n    top: calc(100% - 26px);\n}\n.content-select.md[data-v-20ce04cb]:after{\n    left: calc(100% - 26px);\n    top: calc(100% - 24px);\n    border-width: 20px 16px 0 10px;\n}\n.content-select.sm[data-v-20ce04cb]:after{\n    left: calc(100% - 24px);\n    top: calc(100% - 22px);\n    border-width: 18px 14px 0 10px;\n}\n.content-select.white[data-v-20ce04cb]:after {\n    border-color: white;\n}\n.content-select.black[data-v-20ce04cb]:after {\n    border-color: black;\n}\n.content-select.black[data-v-20ce04cb]:before {\n    border-color: white transparent transparent transparent;\n}\n.content-select.white[data-v-20ce04cb]:before {\n    border-color: black transparent transparent transparent;\n}\n.black select[data-v-20ce04cb]:focus{\n    border: 1px dashed white;\n    border-bottom: 2px solid white;\n    outline: none;\n}\n.white select[data-v-20ce04cb]:focus{\n    border: 1px dashed black;\n    border-bottom: 2px solid black;\n    outline: none;\n}\nselect[data-v-20ce04cb]:disabled{\n    color: rgb(135, 135, 135);\n    border-bottom: 2px dashed rgb(135, 135, 135);\n}\nselect[data-v-20ce04cb]:disabled:hover{\n    cursor: not-allowed;\n}\n\n";
styleInject(css_248z$9);

script$9.render = render$8;
script$9.__scopeId = "data-v-20ce04cb";

var script$8 = {
  name: 'textBtn-clock',
  props: {
    name: {
      type: String,
      require: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};

const _withId$7 = /*#__PURE__*/withScopeId("data-v-045235d6");

const render$7 = /*#__PURE__*/_withId$7((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("a", {
    disabled: $props.disabled,
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('on-click'))
  }, toDisplayString($props.name), 9, ["disabled"]);
});

var css_248z$8 = "\na.sm[data-v-045235d6]{\n      font-size: 11px;\n}\na.md[data-v-045235d6]{\n      font-size: 14px;\n}\na.lg[data-v-045235d6]{\n      font-size: 17px;\n}\na.black[data-v-045235d6]{\n      color: white;\n}\na.white[data-v-045235d6]{\n      color: black;\n}\na[data-v-045235d6]{\n      border: none;\n      outline: none;\n      background-color: inherit;\n      cursor: pointer;\n      font-size: 16px;\n      font-family: font-clock-total;\n      letter-spacing: 2px;\n      color: white;\n      text-decoration: none;\n}\na[data-v-045235d6]:hover{\n      color: rgb(175, 175, 175);\n      text-decoration: underline;\n}\na[disabled=\"true\"][data-v-045235d6]{\n      color: rgb(175, 175, 175);\n      text-decoration: overline underline line-through;\n      cursor: not-allowed;\n      pointer-events: none;\n}\na[data-v-045235d6]:active{\n      color: rgb(175, 175, 175);\n}\na[data-v-045235d6]:focus{\n      color: rgb(175, 175, 175);\n}\n\n";
styleInject(css_248z$8);

script$8.render = render$7;
script$8.__scopeId = "data-v-045235d6";

var script$7 = {
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
  emits: ['update:modelValue']
};

const _withId$6 = /*#__PURE__*/withScopeId("data-v-3d3ffbaa");

const render$6 = /*#__PURE__*/_withId$6((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("input", {
    value: $props.modelValue,
    onInput: _cache[1] || (_cache[1] = $event => _ctx.$emit('update:modelValue', $event.target.value)),
    type: $props.type,
    placeholder: $props.placeholder,
    disabled: $props.disabled,
    success: $props.state
  }, null, 40, ["value", "type", "placeholder", "disabled", "success"]);
});

var css_248z$7 = "\ninput.sm[data-v-3d3ffbaa]{\n      height: 25px;\n      font-size: 11px;\n}\ninput.md[data-v-3d3ffbaa]{\n      height: 30px;\n      font-size: 14px;\n}\ninput.lg[data-v-3d3ffbaa]{\n      height: 35px;\n      font-size: 17px;\n}\ninput.black[data-v-3d3ffbaa]{\n      color: white;\n      border: 1px solid black;\n      border-bottom: 2px solid white;\n      background-color: black;\n}\ninput.white[data-v-3d3ffbaa]{\n      color: black;\n      border: 1px solid white;\n      border-bottom: 2px solid black;\n      background-color: white;\n}\ninput[data-v-3d3ffbaa]{\n      font-family: font-clock-normal;\n      height: 30px;\n      font-size: 14px;\n      padding-left: 5px;\n      padding-bottom: 0px;\n      color: white;\n      border: 1px solid black;\n      letter-spacing: 1px;\n      border-bottom: 2px solid white;\n      background-color: black;\n      border-radius: 4px;\n}\ninput[data-v-3d3ffbaa]:hover::-webkit-input-placeholder{\n      color: rgb(175, 175, 175);\n}\ninput[data-v-3d3ffbaa]:hover::-moz-placeholder{\n      color: rgb(175, 175, 175);\n}\ninput[data-v-3d3ffbaa]:hover::-ms-input-placeholder{\n      color: rgb(175, 175, 175);\n}\ninput[data-v-3d3ffbaa]:focus{\n      border: 1px dashed white;\n      border-bottom: 2px solid white;\n      outline: none;\n}\ninput:focus.black[data-v-3d3ffbaa]{\n      border: 1px dashed white;\n      border-bottom: 2px solid white;\n}\ninput:focus.white[data-v-3d3ffbaa]{\n      border: 1px dashed black;\n      border-bottom: 2px solid black;\n}\ninput[data-v-3d3ffbaa]:focus::-webkit-input-placeholder{\n      color: rgb(175, 175, 175);\n}\ninput[data-v-3d3ffbaa]:focus::-moz-placeholder{\n      color: rgb(175, 175, 175);\n}\ninput[data-v-3d3ffbaa]:focus:-ms-input-placeholder{\n      color: rgb(175, 175, 175);\n}\ninput[data-v-3d3ffbaa]:disabled{\n      color: rgb(135, 135, 135);\n      border-bottom: 2px dashed rgb(135, 135, 135);\n}\ninput[data-v-3d3ffbaa]:disabled:hover{\n      cursor: not-allowed;\n}\ninput[data-v-3d3ffbaa]:disabled::-webkit-input-placeholder {\n      color: rgb(135, 135, 135);\n}\ninput[data-v-3d3ffbaa]:disabled::-moz-placeholder {\n      color: rgb(135, 135, 135);\n}\ninput[data-v-3d3ffbaa]:disabled:-ms-input-placeholder {\n      color: rgb(135, 135, 135);\n}\ninput[success=\"true\"][data-v-3d3ffbaa]{\n      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACUklEQVRYhb2XT0hUURSHvzsMIiIhLcRVibRoFVK7FiJY0LKlIBFtIiKCpE3tQkokWrUKl0HQLtoEkkhrFYuIgoiEAguJyMqsnL4W7408HjPz3pt5+ts85p4/v3PPuXPvOYGcULuAE8BJ4CgwBPQCf4BN4BOwBMwDcyGEzby+s4j71Rn1i/nxTb2rHuiEuKpejZ21i1/qTbW7KPmA+qwD4jRW1KG85EPquxLJ6/isDmeR9+8SeTKIxplQK+r8LpLX8cJGZ0K9vAfkdcykyferX0sk+K4ut5D/Ni5FJY7hCtCX65TmwwRwDDgDbDSQdwHX6ruvqmsl7v5eKrvXm+j9VPehjpZI/lbtTZB3q69b6I9XgLGS0v4POBdC+JFYmwIOt7AZQ31S0u5vp1J/XP2bYbOI+rIE8lcm/ttqj1E5srBeAXo6TP02cDaEsJVYmwYO5bCtVohql4XHwEHgUQPZrRDCUv2HOgpcyuFzxyCrBPNqNdatqg8TsuW6LJb3qu8LlG69AnzMiPFNCGEbIP5OAA+ALaLUbyd07wCDuXcPq6hTGVHW1IuprFXUkdTaqVi3CGZRR3Io1tTzzbah9qkfCpKrjhe5ipsGod5vgzy6imMHN3Ia1dQLKfLTbZCrziadFHmOa+pkbDdg1OUUxc5znAyiaEOyaPuv6HSjOu5VS7ZiszbdqCnNc4e3izWz2nN1cJeCWFOPtCRPZWKhRPL8g0nqTEza+Wg2ZTTYtgejbEyr6wWIcw+noUAgXcAo0Xg+TDSe1zvpDWAVeA4sAE/zjuf/AeNr4ntDo0DlAAAAAElFTkSuQmCC');\n      background-repeat: no-repeat;\n      background-position: 99% center;\n      background-size: 20px;\n}\ninput[success=\"false\"][data-v-3d3ffbaa]{\n      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACPklEQVRYhbWXPWsUURiFzwxBJEhYFglBRCSFWFiEIClELAJ2wcIqv0AsgpWKiE1IEcRCrERSWIulRRANqYLIIhqCRYoQP9gihLAqLGuqx+LuwDDOe++d2d3Tzpn3OXPv3I83UaSAMUlXJV2XNCtpWlJDUirpj6Rvkr5I2pT0PkmSv7G1Q+DTwDLQJl4d4BlwdhBwCiz1i9VVrx/+RFV4A1gfAFzUJ+BcLHwS2BkiPNNP4GLMl2+PAJ6pDZz3zfmbEcIzbQMnywLc9rzUAp5UgGwCzz3PV8uG/sgwfwQafd/DCPhbYBwQ8NTwHAPT+QCPDGMrg+e89z3wdXLDGwjxIj/33w3TgvG/3A3Bc94m5XtJFzglYM7zRR3gckQIC97ATaGlxdCQgvs3ZjwhLPgE8CFQe03Aq4ApFCI14FsRdVvCP0RRIWrCAQ4F7EaagyEqwgE6/w1fQE1J9zzPb0i6Uqkibq3HqvSHK9QrW6KWDgS8Hha8RoiWgAd14bg5vzRAiLXQRgRub7fgW/iXaOjjFrOteN8wbADjHngmXwjrnOkCE6GkNyPg3hDAGcrPgpfFoodGyvmCz7e9HgGzOf8U8LXEdwxcKCa9ZRTtAvOED5Z8iDkPHOBx2Vyl2DfhHtV2zN/AnvFsB2s5487uUdyIM7XJ34SMEFMjCtEmdC0vjMS7IcI/Y13HPSFS4A5uPuuqB6xQtTUrBJkEVoGDCuCsOQ22Y0mFIGOSrsm15zNy7XlTrj3/JemHXHu+oQrt+T+SiWY1a+IcVQAAAABJRU5ErkJggg==');\n      background-repeat: no-repeat;\n      background-position: 99% center;\n      background-size: 20px;\n}\ninput[success=\"true\"].white[data-v-3d3ffbaa]{\n      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACDUlEQVRYhb3XPWhUQRDA8V+OIwQREYsjlchVFiIiVhYSiAErsUxhYyNiYSFWdnKIBCsRi5BSLKzEShCDWCchioiFiILFKYcEv9FwxmLvHefq3dt39y4Dw4PdN/uf3Z2d3ZmQLpM4jjkcRh078Qvf8R6rWMbDTlspUsMCPmIrUT/hJvaOAq7iUmewVHCsP3AVU0Xh03gyAjjWdWHLkqSO1yXCM/2AQ3nw2pjgvU70XYmKEMHjgmf6TJ+YuLAN8EwXYvgebJQI+IK1Af0/RVvRKHmGJzvjntb/GC9l8CqaJcIXo9W93Oe/b9gFMyXCXwnpOZMpvBzw/3wFs8qR3ziDrz1tDewfYDMLDwZ4WESvR4MfxWaOzQo8LwH+wt9ne4ewHXl2LUbPfJs4Es3+RqLthkRP7wtX673/9F2J4DNoF3EgbwuWhaOq873b07fW00c4AW8KrF6L/CC8Fc2wijvCXX8g6lssAO8GYV4WbON8BKrgWNR2QvrSZ7qkM1Dej22c1V92411B+BbmSU/Fg5y4PQS8m4oJkZxi1Ma5CH5qCHh3+TMpch23cbFjNy28corC/7mOKf4gWTH8LXothrN9T7J1A57pNWmZcVhtSnie7xuTE00czIP3rsTjEuGFCpNMKkK0j1qaNYTCdmipCVHbKgBOLk4nCjgyKVy1c0KJVRdSMHzGWzwVtu6RxPL8Dx6ps/CAnOZVAAAAAElFTkSuQmCC');\n}\ninput[success=\"false\"].white[data-v-3d3ffbaa]{\n      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACKklEQVRYhbXXP2gUURDH8U+WICISjiAhiIhYiIVFEEklFoKdlVUKa7EQKxERG7EQsRArkRRWFmJpEURDqiASREOwsBD/cUUI4VQIMdVZ7K2e6763b3O5gal2dr6/N+/fvBHpNoqTOIPjOIwWMvzEZ7zDAl7iV4PcUduHm2ijm+gd3MeBQcAZLvWSpYLLvtkTv6spvIW5AcBlf4ODqfAJrOwgvPBvOJoy8uUhwAtv41AInuHZEOGFL2N3lYCLkZ+WcLcBZAEPIt9vl+EtrAeCX/e+w/UE+HPs6cXfC8Rsyc+RP3YjMvKWf+1qBD7n//KGRDwsAjJ8CQSdLZeqZ1cS4TCu+izZwF6YjoyogxMJIkLwlnwKQ/lniJe0K18bUxERIfgYXtXknoUnNUF1IrIAfDEh7xLxEqWK2A68izX4kBicIqIJvFhjjQR08Tgi4HzDXB3yeUj9IbTg+q1qi4Z8FZ7uILypiCW4NgB8DMcGEDFL/CDqys/2EHxRfGHWDW6GfB9/CgTM+3uxVMFTdkfontno5YkqPZcArxOxX/Vd8KicdC2g8nQpLna8rstb9sIm8b4ibgtHykovBJIWIuouln4R0xF4F3cqKiUT7oQ3NTuwfuBj4NuKyHYeN5yOuPC2UidUZZNDEtGW0Jb3V+LFDsLfirTjIctwWT6f2wVv4pZtPM36bULeRq82ABeP09rn2EgDIaM4JX+eT8kX07i8Ut/xVf48n9fgef4bNn5scvFxUbUAAAAASUVORK5CYII=');\n}\ninput[success=\"true\"].black[data-v-3d3ffbaa]{\n      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACUklEQVRYhb2XT0hUURSHvzsMIiIhLcRVibRoFVK7FiJY0LKlIBFtIiKCpE3tQkokWrUKl0HQLtoEkkhrFYuIgoiEAguJyMqsnL4W7408HjPz3pt5+ts85p4/v3PPuXPvOYGcULuAE8BJ4CgwBPQCf4BN4BOwBMwDcyGEzby+s4j71Rn1i/nxTb2rHuiEuKpejZ21i1/qTbW7KPmA+qwD4jRW1KG85EPquxLJ6/isDmeR9+8SeTKIxplQK+r8LpLX8cJGZ0K9vAfkdcykyferX0sk+K4ut5D/Ni5FJY7hCtCX65TmwwRwDDgDbDSQdwHX6ruvqmsl7v5eKrvXm+j9VPehjpZI/lbtTZB3q69b6I9XgLGS0v4POBdC+JFYmwIOt7AZQ31S0u5vp1J/XP2bYbOI+rIE8lcm/ttqj1E5srBeAXo6TP02cDaEsJVYmwYO5bCtVohql4XHwEHgUQPZrRDCUv2HOgpcyuFzxyCrBPNqNdatqg8TsuW6LJb3qu8LlG69AnzMiPFNCGEbIP5OAA+ALaLUbyd07wCDuXcPq6hTGVHW1IuprFXUkdTaqVi3CGZRR3Io1tTzzbah9qkfCpKrjhe5ipsGod5vgzy6imMHN3Ia1dQLKfLTbZCrziadFHmOa+pkbDdg1OUUxc5znAyiaEOyaPuv6HSjOu5VS7ZiszbdqCnNc4e3izWz2nN1cJeCWFOPtCRPZWKhRPL8g0nqTEza+Wg2ZTTYtgejbEyr6wWIcw+noUAgXcAo0Xg+TDSe1zvpDWAVeA4sAE/zjuf/AeNr4ntDo0DlAAAAAElFTkSuQmCC');\n}\ninput[success=\"false\"].black[data-v-3d3ffbaa]{\n      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACPklEQVRYhbWXPWsUURiFzwxBJEhYFglBRCSFWFiEIClELAJ2wcIqv0AsgpWKiE1IEcRCrERSWIulRRANqYLIIhqCRYoQP9gihLAqLGuqx+LuwDDOe++d2d3Tzpn3OXPv3I83UaSAMUlXJV2XNCtpWlJDUirpj6Rvkr5I2pT0PkmSv7G1Q+DTwDLQJl4d4BlwdhBwCiz1i9VVrx/+RFV4A1gfAFzUJ+BcLHwS2BkiPNNP4GLMl2+PAJ6pDZz3zfmbEcIzbQMnywLc9rzUAp5UgGwCzz3PV8uG/sgwfwQafd/DCPhbYBwQ8NTwHAPT+QCPDGMrg+e89z3wdXLDGwjxIj/33w3TgvG/3A3Bc94m5XtJFzglYM7zRR3gckQIC97ATaGlxdCQgvs3ZjwhLPgE8CFQe03Aq4ApFCI14FsRdVvCP0RRIWrCAQ4F7EaagyEqwgE6/w1fQE1J9zzPb0i6Uqkibq3HqvSHK9QrW6KWDgS8Hha8RoiWgAd14bg5vzRAiLXQRgRub7fgW/iXaOjjFrOteN8wbADjHngmXwjrnOkCE6GkNyPg3hDAGcrPgpfFoodGyvmCz7e9HgGzOf8U8LXEdwxcKCa9ZRTtAvOED5Z8iDkPHOBx2Vyl2DfhHtV2zN/AnvFsB2s5487uUdyIM7XJ34SMEFMjCtEmdC0vjMS7IcI/Y13HPSFS4A5uPuuqB6xQtTUrBJkEVoGDCuCsOQ22Y0mFIGOSrsm15zNy7XlTrj3/JemHXHu+oQrt+T+SiWY1a+IcVQAAAABJRU5ErkJggg==');\n}\n\n";
styleInject(css_248z$7);

script$7.render = render$6;
script$7.__scopeId = "data-v-3d3ffbaa";

var script$6 = {
  name: 'overlay-clock',
  props: {
    show: {
      type: Boolean,
      require: true,
      default: false
    },
    msg: {
      type: String,
      require: false,
      default: ""
    }
  }
};

const _withId$5 = /*#__PURE__*/withScopeId("data-v-6fb28924");

pushScopeId("data-v-6fb28924");

const _hoisted_1$3 = {
  class: "overlay"
};

const _hoisted_2$2 = /*#__PURE__*/createVNode("div", {
  class: "loader"
}, null, -1);

popScopeId();

const render$5 = /*#__PURE__*/_withId$5((_ctx, _cache, $props, $setup, $data, $options) => {
  return withDirectives((openBlock(), createBlock("div", _hoisted_1$3, [_hoisted_2$2, createVNode("p", null, toDisplayString($props.msg), 1)], 512)), [[vShow, $props.show]]);
});

var css_248z$6 = "\np[data-v-6fb28924]{\n        color: rgb(169, 169, 169);\n        font-size: 20px;\n        font-family: font-clock-bold;\n}\n.overlay[data-v-6fb28924] {\n        position: fixed;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0,0,0,0.75);\n        z-index: 105;\n}\n.loader[data-v-6fb28924] {\n        border: 16px dotted rgba(0, 0, 0, 1);;\n        border-radius: 100%;\n        border-top: 16px inset rgba(250, 250, 250, 1);\n        box-shadow: 0 0 0 5px rgba(175, 175, 175, 1);\n        width: 90px;\n        height: 90px;\n        -webkit-animation: spin-6fb28924 1s linear infinite; /* Safari */\n        animation: spin-6fb28924 1s linear infinite;\n}\n\n    /* Safari */\n@-webkit-keyframes spin-6fb28924 {\n0% { -webkit-transform: rotate(0deg);\n}\n100% { -webkit-transform: rotate(360deg);\n}\n}\n@keyframes spin-6fb28924 {\n0% { transform: rotate(0deg);\n}\n100% { transform: rotate(360deg);\n}\n}\n";
styleInject(css_248z$6);

script$6.render = render$5;
script$6.__scopeId = "data-v-6fb28924";

var script$5 = {
  name: 'logo-facebook',
  props: {}
};

const _withId$4 = /*#__PURE__*/withScopeId("data-v-153ed651");

const render$4 = /*#__PURE__*/_withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    id: "facebook",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('on-click'))
  });
});

var css_248z$5 = "\n#facebook[data-v-153ed651] {\n        background: #ffffff;\n        border-radius: 9%;\n        border-color: black;\n        height: 50px;\n        position: relative;\n        width: 50px;\n}\n#facebook[data-v-153ed651]:after {\n        color: #000000;\n        content: \"f\";\n        display: block;\n        font-family: Facebook Letter Faces, Arial, fantasy;\n        font-size: 50px;\n        font-weight: bold;\n        margin: 6% 0 0 50%;\n}\n#facebook[data-v-153ed651]:hover {\n        -moz-box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);\n        -webkit-box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);\n        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);\n        cursor: pointer;\n}\n";
styleInject(css_248z$5);

script$5.render = render$4;
script$5.__scopeId = "data-v-153ed651";

var script$4 = {
  name: 'logo-google',
  props: {}
};

const _withId$3 = /*#__PURE__*/withScopeId("data-v-4fa58579");

const render$3 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    id: "google",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('on-click'))
  });
});

var css_248z$4 = "\n#google[data-v-4fa58579] {\n    position: relative;\n    border-top: 10px solid #ffffff;\n    border-right: 10px solid #e8e8e8;\n    border-bottom: 10px solid #bdbdbd;\n    border-left: 10px solid #767676;\n    border-radius: 50%;\n    background-color: #000000;\n    width: 30px;\n    height: 30px;\n    padding: 0;\n}\n#google[data-v-4fa58579]::before {\n    content: \"\";\n    z-index: 100;\n    position: absolute;\n    top: 50%;\n    right: -5px;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 10px;\n    background: #e8e8e8;\n}\n#google[data-v-4fa58579]::after {\n    content: \"\";\n    z-index: 101;\n    position: absolute;\n    border-top: 20px solid transparent;\n    border-right: 24px solid #000000;\n    border-top-right-radius: 100%;\n    top: -10px;\n    right: -9px;\n    width: 0;\n    height: 0;\n}\n#google[data-v-4fa58579]:hover {\n    -moz-box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);\n    -webkit-box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);\n    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);\n    cursor: pointer;\n}\n";
styleInject(css_248z$4);

script$4.render = render$3;
script$4.__scopeId = "data-v-4fa58579";

var script$3 = {
  name: 'title-clock',
  props: {
    title: {
      type: String,
      require: true
    }
  }
};

const _withId$2 = /*#__PURE__*/withScopeId("data-v-6b03baa5");

pushScopeId("data-v-6b03baa5");

const _hoisted_1$2 = {
  class: "text"
};

popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("h1", _hoisted_1$2, toDisplayString($props.title), 1);
});

var css_248z$3 = "\n.text.white[data-v-6b03baa5]{\n    color: black;\n}\n.text.black[data-v-6b03baa5]{\n    color: white;\n}\n.text.sm[data-v-6b03baa5]{\n    font-size: 15px;\n}\n.text.md[data-v-6b03baa5]{\n    font-size: 25px;\n}\n.text.lg[data-v-6b03baa5]{\n    font-size: 35px;\n}\n.text[data-v-6b03baa5]{\n    font-family: font-clock-normal;\n    letter-spacing: 4px;\n    color: white;\n    font-size: 25px;\n    margin-bottom: 0rem;\n    margin-top: 0rem;\n}\n";
styleInject(css_248z$3);

script$3.render = render$2;
script$3.__scopeId = "data-v-6b03baa5";

var script$2 = {
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
  emits: ["click-btn", "click-google", "click-facebook", "update:userPassword", "update:userEmail"],

  data() {
    return {
      userEmail: "",
      userPassword: ""
    };
  },

  computed: {
    comprobarEmail() {
      return this.userEmail.length <= this.minEmail ? 'null' : this.userEmail.length >= this.maxEmail ? 'true' : 'false';
    },

    comprobarPassword() {
      return this.userPassword.length <= this.minPwd ? 'null' : this.userPassword.length >= this.maxPwd ? 'true' : 'false';
    },

    comprobarBtnEnviar() {
      return !(this.comprobarPassword === 'true' && this.comprobarEmail === 'true');
    }

  }
};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-7e45afc6");

pushScopeId("data-v-7e45afc6");

const _hoisted_1$1 = {
  class: "form"
};
const _hoisted_2$1 = {
  class: "auth"
};
const _hoisted_3 = {
  class: "accounts"
};
const _hoisted_4 = {
  class: "list-accounts"
};

popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_titleClock = resolveComponent("titleClock");

  const _component_inputClock = resolveComponent("inputClock");

  const _component_textBtnClock = resolveComponent("textBtnClock");

  const _component_btnClock = resolveComponent("btnClock");

  const _component_logoGoogle = resolveComponent("logoGoogle");

  const _component_logoFacebook = resolveComponent("logoFacebook");

  return openBlock(), createBlock("div", _hoisted_1$1, [createVNode("div", _hoisted_2$1, [createVNode(_component_titleClock, {
    id: "text-title",
    class: "lg",
    title: $props.titleForm
  }, null, 8, ["title"]), createVNode(_component_titleClock, {
    id: "text-email",
    class: "md",
    title: $props.subtitle1
  }, null, 8, ["title"]), createVNode(_component_inputClock, {
    id: "input-email",
    class: "sm",
    disabled: false,
    type: "email",
    placeholder: $props.placeholderEmail,
    success: $options.comprobarEmail,
    modelValue: $data.userEmail,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.userEmail = $event),
    value: $data.userEmail,
    onInput: _cache[2] || (_cache[2] = $event => _ctx.$emit('update:userEmail', $event.target.value))
  }, null, 8, ["placeholder", "success", "modelValue", "value"]), createVNode(_component_titleClock, {
    id: "text-pwd",
    class: "md",
    title: $props.subtitle2
  }, null, 8, ["title"]), createVNode(_component_inputClock, {
    id: "input-pwd",
    class: "sm",
    disabled: false,
    type: "password",
    placeholder: $props.placeholderPwd,
    success: $options.comprobarPassword,
    modelValue: $data.userPassword,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.userPassword = $event),
    value: $data.userPassword,
    onInput: _cache[4] || (_cache[4] = $event => _ctx.$emit('update:userPassword', $event.target.value))
  }, null, 8, ["placeholder", "success", "modelValue", "value"]), createVNode(_component_textBtnClock, {
    id: "href-pwd",
    class: "sm",
    disabled: false,
    name: $props.nameHrefPwd,
    target: $props.targetPwd,
    href: $props.hrefPwd
  }, null, 8, ["name", "target", "href"]), createVNode(_component_btnClock, {
    id: "btn-login",
    class: "lg",
    disabled: $options.comprobarBtnEnviar,
    onOnClick: _cache[5] || (_cache[5] = $event => _ctx.$emit('click-btn'))
  }, null, 8, ["disabled"]), createVNode(_component_textBtnClock, {
    id: "href-account",
    class: "sm",
    disabled: false,
    name: $props.nameHrefAccount,
    target: $props.targetAccount,
    href: $props.hrefAccount
  }, null, 8, ["name", "target", "href"])]), createVNode("div", _hoisted_3, [createVNode(_component_titleClock, {
    id: "text-accounts",
    class: "sm",
    title: $props.titleAccounts
  }, null, 8, ["title"]), createVNode("div", _hoisted_4, [createVNode(_component_logoGoogle, {
    id: "google",
    onOnClick: _cache[6] || (_cache[6] = $event => _ctx.$emit('click-google'))
  }), createVNode(_component_logoFacebook, {
    id: "facebook",
    onOnClick: _cache[7] || (_cache[7] = $event => _ctx.$emit('click-facebook'))
  })])])]);
});

var css_248z$2 = "\n@media only screen and (min-width: 1024px) {\n  /* For desktop: */\n.form[data-v-7e45afc6] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.auth[data-v-7e45afc6] {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n    background: black;\n    border-radius: 25px;\n    padding: 40px 48px;\n    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);\n}\n#text-title[data-v-7e45afc6] {\n    text-align: center;\n    margin-bottom: 24px;\n    margin-left: 40px;\n    margin-right: 40px;\n}\n#text-email[data-v-7e45afc6] {\n    text-align: left;\n    margin-bottom: 16px;\n}\n#input-email[data-v-7e45afc6] {\n    margin-bottom: 24px;\n}\n#text-pwd[data-v-7e45afc6] {\n    text-align: left;\n    margin-bottom: 16px;\n}\n#input-pwd[data-v-7e45afc6] {\n    margin-bottom: 24px;\n}\n#href-pwd[data-v-7e45afc6] {\n    text-align: right;\n    margin-bottom: 32px;\n}\n#btn-login[data-v-7e45afc6] {\n    margin-bottom: 32px;\n    margin-left: 64px;\n    margin-right: 64px;\n}\n#href-account[data-v-7e45afc6] {\n    text-align: center;\n}\n#text-accounts[data-v-7e45afc6] {\n    text-align: center;\n    margin-bottom: 24px;\n}\n.accounts[data-v-7e45afc6] {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n    background: black;\n    border-radius: 25px;\n    padding: 24px 48px;\n    margin-top: 32px;\n    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);\n}\n.list-accounts[data-v-7e45afc6] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}\n#facebook[data-v-7e45afc6] {\n    margin-left: 16px;\n    margin-right: 16px;\n}\n#google[data-v-7e45afc6] {\n    margin-left: 16px;\n    margin-right: 16px;\n}\n}\n@media only screen and (min-width: 700px) and (max-width: 1024px) {\n  /* For tablets: */\n.form[data-v-7e45afc6] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.auth[data-v-7e45afc6] {\n    display: flex;\n    flex-direction: column;\n    width: 450px;\n    background: black;\n    border-radius: 25px;\n    padding: 40px 48px;\n    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);\n}\n.accounts[data-v-7e45afc6] {\n    display: flex;\n    flex-direction: column;\n    width: 450px;\n    background: black;\n    border-radius: 25px;\n    padding: 32px 48px;\n    margin-top: 16px;\n    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);\n}\n#text-title[data-v-7e45afc6] {\n    text-align: center;\n    margin-bottom: 40px;\n    margin-right: 40px;\n    margin-left: 40px;\n}\n#text-email[data-v-7e45afc6] {\n    text-align: left;\n    margin-bottom: 16px;\n}\n#input-email[data-v-7e45afc6] {\n    text-align: left;\n    margin-bottom: 24px;\n}\n#text-pwd[data-v-7e45afc6] {\n    text-align: left;\n    margin-bottom: 16px;\n}\n#input-pwd[data-v-7e45afc6] {\n    text-align: left;\n    margin-bottom: 32px;\n}\n#href-pwd[data-v-7e45afc6] {\n    text-align: right;\n    margin-bottom: 32px;\n}\n#btn-login[data-v-7e45afc6] {\n    margin-bottom: 40px;\n    margin-left: 56px;\n    margin-right: 56px;\n}\n#href-account[data-v-7e45afc6] {\n    text-align: center;\n}\n#text-accounts[data-v-7e45afc6] {\n    text-align: center;\n    margin-bottom: 24px;\n}\n.list-accounts[data-v-7e45afc6] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}\n#facebook[data-v-7e45afc6] {\n    margin-left: 16px;\n    margin-right: 16px;\n}\n#google[data-v-7e45afc6] {\n    margin-left: 16px;\n    margin-right: 16px;\n}\n}\n@media only screen and (max-width: 700px) {\n  /* For mobile phones: */\n.form[data-v-7e45afc6] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.auth[data-v-7e45afc6] {\n    display: flex;\n    flex-direction: column;\n    background: black;\n    width: 87%;\n    box-sizing: border-box;\n    border-radius: 25px;\n    padding: 40px 48px;\n    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);\n}\n.accounts[data-v-7e45afc6] {\n    display: flex;\n    flex-direction: column;\n    background: black;\n    width: 87%;\n    box-sizing: border-box;\n    border-radius: 25px;\n    padding: 32px 48px;\n    margin-top: 16px;\n    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);\n}\n#text-title[data-v-7e45afc6] {\n    text-align: center;\n    margin-bottom: 40px;\n    margin-right: 40px;\n    margin-left: 40px;\n}\n#text-email[data-v-7e45afc6] {\n    text-align: left;\n    margin-bottom: 16px;\n}\n#input-email[data-v-7e45afc6] {\n    text-align: left;\n    margin-bottom: 24px;\n}\n#text-pwd[data-v-7e45afc6] {\n    text-align: left;\n    margin-bottom: 16px;\n}\n#input-pwd[data-v-7e45afc6] {\n    text-align: left;\n    margin-bottom: 32px;\n}\n#href-pwd[data-v-7e45afc6] {\n    text-align: right;\n    margin-bottom: 32px;\n}\n#btn-login[data-v-7e45afc6] {\n    margin-bottom: 40px;\n    margin-left: 40px;\n    margin-right: 40px;\n}\n#href-account[data-v-7e45afc6] {\n    text-align: center;\n}\n#text-accounts[data-v-7e45afc6] {\n    text-align: center;\n    margin-bottom: 24px;\n}\n.list-accounts[data-v-7e45afc6] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}\n#facebook[data-v-7e45afc6] {\n    margin-left: 16px;\n    margin-right: 16px;\n}\n#google[data-v-7e45afc6] {\n    margin-left: 16px;\n    margin-right: 16px;\n}\n}\n\n";
styleInject(css_248z$2);

script$2.render = render$1;
script$2.__scopeId = "data-v-7e45afc6";

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

var cookies = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

var isURLSameOrigin = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = ms;
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

var common = setup;

/* eslint-env browser */

var browser$1 = createCommonjsModule(function (module, exports) {
/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};
});

var hasFlag = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};

/**
 * Module dependencies.
 */

var node = createCommonjsModule(function (module, exports) {
/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = supportsColor_1;

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};
});

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

var src = createCommonjsModule(function (module) {
if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = browser$1;
} else {
	module.exports = node;
}
});

var debug;

var debug_1 = function () {
  if (!debug) {
    try {
      /* eslint global-require: off */
      debug = src("follow-redirects");
    }
    catch (error) { /* */ }
    if (typeof debug !== "function") {
      debug = function () { /* */ };
    }
  }
  debug.apply(null, arguments);
};

var URL = url.URL;


var Writable = require$$0.Writable;



// Create handlers that pass events from native requests
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

// Error types with codes
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded"
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype.abort = function () {
  abortRequest(this._currentRequest);
  this.emit("abort");
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;

  // Destroys the socket on timeout
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }

  // Stops a timeout from triggering
  function clearTimer() {
    // Clear the timeout
    if (self._timeout) {
      clearTimeout(self._timeout);
      self._timeout = null;
    }

    // Clean up all attached listeners
    self.removeListener("abort", clearTimer);
    self.removeListener("error", clearTimer);
    self.removeListener("response", clearTimer);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!self.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Attach callback if passed
  if (callback) {
    this.on("timeout", callback);
  }

  // Start the timer if or when the socket is opened
  if (this.socket) {
    startTimer(this.socket);
  }
  else {
    this._currentRequest.once("socket", startTimer);
  }

  // Clean up on events
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);

  return this;
};

// Proxy all other public ClientRequest methods
[
  "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var e = 0; e < events.length; e++) {
    request.on(events[e], eventHandlers[events[e]]);
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.

  // If the response is not a redirect; return it as-is
  var location = response.headers.location;
  if (!location || this._options.followRedirects === false ||
      statusCode < 300 || statusCode >= 400) {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
    return;
  }

  // The response is a redirect, so abort the current request
  abortRequest(this._currentRequest);
  // Discard the remainder of the response to avoid waiting for data
  response.destroy();

  // RFC7231§6.4: A client SHOULD detect and intervene
  // in cyclical redirections (i.e., "infinite" redirection loops).
  if (++this._redirectCount > this._options.maxRedirects) {
    this.emit("error", new TooManyRedirectsError());
    return;
  }

  // RFC7231§6.4: Automatic redirection needs to done with
  // care for methods not known to be safe, […]
  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
  // the request method from POST to GET for the subsequent request.
  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
      // RFC7231§6.4.4: The 303 (See Other) status code indicates that
      // the server is redirecting the user agent to a different resource […]
      // A user agent can perform a retrieval request targeting that URI
      // (a GET or HEAD request if using HTTP) […]
      (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    this._options.method = "GET";
    // Drop a possible entity and headers related to it
    this._requestBodyBuffers = [];
    removeMatchingHeaders(/^content-/i, this._options.headers);
  }

  // Drop the Host header, as the redirect might lead to a different host
  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

  // If the redirect is relative, carry over the host of the last request
  var currentUrlParts = url.parse(this._currentUrl);
  var currentHost = currentHostHeader || currentUrlParts.host;
  var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
    url.format(Object.assign(currentUrlParts, { host: currentHost }));

  // Determine the URL of the redirection
  var redirectUrl;
  try {
    redirectUrl = url.resolve(currentUrl, location);
  }
  catch (cause) {
    this.emit("error", new RedirectionError(cause));
    return;
  }

  // Create the redirected request
  debug_1("redirecting to", redirectUrl);
  this._isRedirect = true;
  var redirectUrlParts = url.parse(redirectUrl);
  Object.assign(this._options, redirectUrlParts);

  // Drop confidential headers when redirecting to a less secure protocol
  // or to a different domain that is not a superdomain
  if (redirectUrlParts.protocol !== currentUrlParts.protocol &&
     redirectUrlParts.protocol !== "https:" ||
     redirectUrlParts.host !== currentHost &&
     !isSubdomain(redirectUrlParts.host, currentHost)) {
    removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
  }

  // Evaluate the beforeRedirect callback
  if (typeof this._options.beforeRedirect === "function") {
    var responseDetails = { headers: response.headers };
    try {
      this._options.beforeRedirect.call(null, this._options, responseDetails);
    }
    catch (err) {
      this.emit("error", err);
      return;
    }
    this._sanitizeOptions(this._options);
  }

  // Perform the redirected request
  try {
    this._performRequest();
  }
  catch (cause) {
    this.emit("error", new RedirectionError(cause));
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters
      if (typeof input === "string") {
        var urlStr = input;
        try {
          input = urlToOptions(new URL(urlStr));
        }
        catch (err) {
          /* istanbul ignore next */
          input = url.parse(urlStr);
        }
      }
      else if (URL && (input instanceof URL)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (typeof options === "function") {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug_1("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return (lastValue === null || typeof lastValue === "undefined") ?
    undefined : String(lastValue).trim();
}

function createErrorType(code, defaultMessage) {
  function CustomError(cause) {
    Error.captureStackTrace(this, this.constructor);
    if (!cause) {
      this.message = defaultMessage;
    }
    else {
      this.message = defaultMessage + ": " + cause.message;
      this.cause = cause;
    }
  }
  CustomError.prototype = new Error();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  CustomError.prototype.code = code;
  return CustomError;
}

function abortRequest(request) {
  for (var e = 0; e < events.length; e++) {
    request.removeListener(events[e], eventHandlers[events[e]]);
  }
  request.on("error", noop);
  request.abort();
}

function isSubdomain(subdomain, domain) {
  const dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}

// Exports
var followRedirects = wrap({ http: http, https: https });
var wrap_1 = wrap;
followRedirects.wrap = wrap_1;

var name="axios";var version="0.21.4";var description="Promise based HTTP client for the browser and node.js";var main="index.js";var scripts={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"};var repository={type:"git",url:"https://github.com/axios/axios.git"};var keywords=["xhr","http","ajax","promise","node"];var author="Matt Zabriskie";var license="MIT";var bugs={url:"https://github.com/axios/axios/issues"};var homepage="https://axios-http.com";var devDependencies={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"};var browser={"./lib/adapters/http.js":"./lib/adapters/xhr.js"};var jsdelivr="dist/axios.min.js";var unpkg="dist/axios.min.js";var typings="./index.d.ts";var dependencies={"follow-redirects":"^1.14.0"};var bundlesize=[{path:"./dist/axios.min.js",threshold:"5kB"}];var pkg = {name:name,version:version,description:description,main:main,scripts:scripts,repository:repository,keywords:keywords,author:author,license:license,bugs:bugs,homepage:homepage,devDependencies:devDependencies,browser:browser,jsdelivr:jsdelivr,unpkg:unpkg,typings:typings,dependencies:dependencies,bundlesize:bundlesize};

var httpFollow = followRedirects.http;
var httpsFollow = followRedirects.https;






var isHttps = /https:?/;

/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */
function setProxy(options, proxy, location) {
  options.hostname = proxy.host;
  options.host = proxy.host;
  options.port = proxy.port;
  options.path = location;

  // Basic proxy authorization
  if (proxy.auth) {
    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
  }

  // If a proxy is used, any redirects must also pass through the proxy
  options.beforeRedirect = function beforeRedirect(redirection) {
    redirection.headers.host = redirection.host;
    setProxy(redirection, proxy, redirection.href);
  };
}

/*eslint consistent-return:0*/
var http_1 = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var resolve = function resolve(value) {
      resolvePromise(value);
    };
    var reject = function reject(value) {
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;

    // Set User-Agent (required by some servers)
    // See https://github.com/axios/axios/issues/69
    if ('User-Agent' in headers || 'user-agent' in headers) {
      // User-Agent is specified; handle case where no UA header is desired
      if (!headers['User-Agent'] && !headers['user-agent']) {
        delete headers['User-Agent'];
        delete headers['user-agent'];
      }
      // Otherwise, use specified value
    } else {
      // Only set header if it hasn't been set in config
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) ; else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }

        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port,
            protocol: parsedProxyUrl.protocol
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;

      // return the last request in case of redirects
      var lastRequest = res.req || req;


      // if no content, is HEAD request or decompress disabled we should not decompress
      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
        switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
        // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib.createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        }
      }

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        var totalResponseBytes = 0;
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString(config.responseEncoding);
            if (!config.responseEncoding || config.responseEncoding === 'utf8') {
              responseData = utils.stripBOM(responseData);
            }
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout) {
      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
      var timeout = parseInt(config.timeout, 10);

      if (isNaN(timeout)) {
        reject(createError(
          'error trying to parse `config.timeout` to int',
          config,
          'ERR_PARSE_TIMEOUT',
          req
        ));

        return;
      }

      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(timeout, function handleRequestTimeout() {
        req.abort();
        reject(createError(
          'timeout of ' + timeout + 'ms exceeded',
          config,
          config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
          req
        ));
      });
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = http_1;
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
  var context = this || defaults_1;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults_1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};

var validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

var validator = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators$1
};

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
var isAxiosError = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios_1.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios$1 = createInstance(defaults_1);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios_1;

// Factory for creating new instances
axios$1.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;

// Expose isAxiosError
axios$1.isAxiosError = isAxiosError;

var axios_1 = axios$1;

// Allow use of default import syntax in TypeScript
var _default = axios$1;
axios_1.default = _default;

var axios = axios_1;

var geonames_min = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t(axios);}(commonjsGlobal,function(e){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=2)}([function(e,t,r){var o=Object.prototype.hasOwnProperty,n=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},combine:function(e,t){return [].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var i=t[o],a=i.obj[i.prop],s=Object.keys(a),c=0;c<s.length;++c){var l=s[c],u=a[l];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:a,prop:l}),r.push(u));}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(n(r)){for(var o=[],i=0;i<r.length;++i)void 0!==r[i]&&o.push(r[i]);t.obj[t.prop]=o;}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r){if(0===e.length)return e;var o=e;if("symbol"==typeof e?o=Symbol.prototype.toString.call(e):"string"!=typeof e&&(o=String(e)),"iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(e){return "%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var n="",a=0;a<o.length;++a){var s=o.charCodeAt(a);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?n+=o.charAt(a):s<128?n+=i[s]:s<2048?n+=i[192|s>>6]+i[128|63&s]:s<55296||s>=57344?n+=i[224|s>>12]+i[128|s>>6&63]+i[128|63&s]:(a+=1,s=65536+((1023&s)<<10|1023&o.charCodeAt(a)),n+=i[240|s>>18]+i[128|s>>12&63]+i[128|s>>6&63]+i[128|63&s]);}return n},isBuffer:function(e){return !(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return "[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(n(e)){for(var r=[],o=0;o<e.length;o+=1)r.push(t(e[o]));return r}return t(e)},merge:function e(t,r,i){if(!r)return t;if("object"!=typeof r){if(n(t))t.push(r);else {if(!t||"object"!=typeof t)return [t,r];(i&&(i.plainObjects||i.allowPrototypes)||!o.call(Object.prototype,r))&&(t[r]=!0);}return t}if(!t||"object"!=typeof t)return [t].concat(r);var s=t;return n(t)&&!n(r)&&(s=a(t,i)),n(t)&&n(r)?(r.forEach(function(r,n){if(o.call(t,n)){var a=t[n];a&&"object"==typeof a&&r&&"object"==typeof r?t[n]=e(a,r,i):t.push(r);}else t[n]=r;}),t):Object.keys(r).reduce(function(t,n){var a=r[n];return o.call(t,n)?t[n]=e(t[n],a,i):t[n]=a,t},s)}};},function(e,t,r){var o=String.prototype.replace,n=/%20/g,i=r(0),a={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=i.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return String(e)}}},a);},function(e,t,r){e.exports=r(3);},function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Geonames=void 0;const n=o(r(4)),i=o(r(5)),a=r(6),s=o(r(7));function c(e){return (e=>{if(!e||!e.username)throw new Error("you must provide a username, if you don't have one register on http://www.geonames.org/login");const t=Object.assign(Object.assign({},a.baseParams),e),{username:r,token:o}=t,c={options:e,config:t,version:n.default.version,uri:o?a.baseUriCommercial:a.baseUri},l=i.default.create({baseURL:c.uri});for(let e of a.geoNamesAPI){const t=`${e}${c.config.encoding}`;c[e]=(async e=>(await l.get(t,{params:Object.assign(Object.assign(Object.assign({username:r},o&&{token:o}),{lang:c.config.lan}),e),paramsSerializer:e=>s.default.stringify(e,{arrayFormat:"repeat"})})).data);}return c})(e)}t.Geonames=c,t.default=c;},function(e){e.exports={name:"geonames.js",version:"3.0.4",homepage:"https://github.com/kinotto/geonames.js",description:"REST api to fetch countries, regions, cities etc. A flexible library for browser and node.js usage built on top http://www.geonames.org/",main:"dist/geonames.min.js",types:"dist/geonames.d.ts",scripts:{test:"mocha --experimental-modules ./spec/test-server.js --timeout 50000","test-debug":"mocha ./spec/test-server.js --nolazy --inspect-brk=9229",coverage:"nyc npm test && nyc report --reporter=text-lcov | coveralls",build:"cross-env NODE_ENV=production webpack","build:dev":"cross-env NODE_ENV=development webpack","build:all":"rm -rf dist/* && npm run build && npm run build:dev"},repository:"git+https://github.com/kinotto/geonames.js.git",author:"Karim Abdelcadir <kinotto88@yahoo.it>",contributors:[{name:"Vito Macchia",email:"vito.macchia@gmail.com"},{name:"Xavi Torelló",email:"info@xaviertorello.cat"}],license:"MIT",bugs:{url:"https://github.com/kinotto/geonames.js/issues"},dependencies:{axios:"^0.21.0",qs:"^6.9.4"},devDependencies:{"@types/chai":"^4.2.14","@types/jest":"^26.0.15","@types/mocha":"^8.0.3","@types/node":"^14.14.6","@types/qs":"^6.9.5","@types/sinon-chai":"^3.2.5","babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-env":"^1.7.0",chai:"^4.2.0",coveralls:"^2.12.0","cross-env":"^5.2.0",mocha:"^8.2.0",nyc:"^10.1.2",opener:"^1.4.1","require-dir":"^0.3.1",sinon:"^9.2.1","sinon-chai":"^3.5.0","tiny-lr":"^0.2.1","ts-loader":"^4.4.2","ts-node":"^9.0.0",typescript:"^4.0.5","uglifyjs-webpack-plugin":"^1.2.7",webpack:"^4.16.2","webpack-cli":"^3.1.0","webpack-node-externals":"^1.7.2"}};},function(t,r){t.exports=e;},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.geoNamesAPI=t.baseUriCommercial=t.baseUri=t.baseParams=void 0,t.baseParams={encoding:"JSON",formatted:!0,lan:"en",style:"full",username:null,token:null},t.baseUri="https://secure.geonames.org/",t.baseUriCommercial="https://secure.geonames.net/",t.geoNamesAPI=["astergdem","children","cities","contains","countryCode","countryInfo","countrySubdivision","earthquakes","extendedFindNearby","findNearby","findNearbyPlaceName","findNearbyPostalCodes","findNearbyStreets","findNearbyStreetsOSM","findNearByWeather","findNearbyWikipedia","findNearestAddress","findNearestIntersection","findNearestIntersectionOSM","findNearbyPOIsOSM","geocode","get","gtopo30","hierarchy","neighbourhood","neighbours","ocean","postalCodeCountryInfo","postalCodeLookup","postalCodeSearch","rssToGeo","search","siblings","srtm1","srtm3","timezone","weather","weatherIcao","wikipediaBoundingBox","wikipediaSearch","address","geoCodeAddress","streetNameLookup"];},function(e,t,r){var o=r(8),n=r(9),i=r(1);e.exports={formats:i,parse:n,stringify:o};},function(e,t,r){var o=r(0),n=r(1),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,c=Array.prototype.push,l=function(e,t){c.apply(e,s(t)?t:[t]);},u=Date.prototype.toISOString,f=n.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:f,formatter:n.formatters[f],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,n,i,a,c,u,f,d,y,m,b,h){var g=t;if("function"==typeof u?g=u(r,g):g instanceof Date?g=y(g):"comma"===n&&s(g)&&(g=o.maybeMap(g,function(e){return e instanceof Date?y(e):e}).join(",")),null===g){if(i)return c&&!b?c(r,p.encoder,h,"key"):r;g="";}if("string"==typeof g||"number"==typeof g||"boolean"==typeof g||"symbol"==typeof g||"bigint"==typeof g||o.isBuffer(g))return c?[m(b?r:c(r,p.encoder,h,"key"))+"="+m(c(g,p.encoder,h,"value"))]:[m(r)+"="+m(String(g))];var v,j=[];if(void 0===g)return j;if(s(u))v=u;else {var O=Object.keys(g);v=f?O.sort(f):O;}for(var w=0;w<v.length;++w){var x=v[w],N=g[x];if(!a||null!==N){var S=s(g)?"function"==typeof n?n(r,x):r:r+(d?"."+x:"["+x+"]");l(j,e(N,S,n,i,a,c,u,f,d,y,m,b,h));}}return j};e.exports=function(e,t){var r,o=e,c=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=n.default;if(void 0!==e.format){if(!i.call(n.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format;}var o=n.formatters[r],a=p.filter;return ("function"==typeof e.filter||s(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:a,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof c.filter?o=(0, c.filter)("",o):s(c.filter)&&(r=c.filter);var u,f=[];if("object"!=typeof o||null===o)return "";u=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var y=a[u];r||(r=Object.keys(o)),c.sort&&r.sort(c.sort);for(var m=0;m<r.length;++m){var b=r[m];c.skipNulls&&null===o[b]||l(f,d(o[b],b,y,c.strictNullHandling,c.skipNulls,c.encode?c.encoder:null,c.filter,c.sort,c.allowDots,c.serializeDate,c.formatter,c.encodeValuesOnly,c.charset));}var h=f.join(c.delimiter),g=!0===c.addQueryPrefix?"?":"";return c.charsetSentinel&&("iso-8859-1"===c.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&"),h.length>0?g+h:""};},function(e,t,r){var o=r(0),n=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},c=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},l=function(e,t,r,o){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,s=r.depth>0&&/(\[[^[\]]*])/.exec(i),l=s?i.slice(0,s.index):i,u=[];if(l){if(!r.plainObjects&&n.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l);}for(var f=0;r.depth>0&&null!==(s=a.exec(i))&&f<r.depth;){if(f+=1,!r.plainObjects&&n.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(s[1]);}return s&&u.push("["+i.slice(s.index)+"]"),function(e,t,r,o){for(var n=o?t:c(t,r),i=e.length-1;i>=0;--i){var a,s=e[i];if("[]"===s&&r.parseArrays)a=[].concat(n);else {a=r.plainObjects?Object.create(null):{};var l="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,u=parseInt(l,10);r.parseArrays||""!==l?!isNaN(u)&&s!==l&&String(u)===l&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(a=[])[u]=n:a[l]=n:a={0:n};}n=a;}return n}(u,t,r,o)}};e.exports=function(e,t){var r=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?a.charset:e.charset;return {allowDots:void 0===e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:a.comma,decoder:"function"==typeof e.decoder?e.decoder:a.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}}(t);if(""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var u="string"==typeof e?function(e,t){var r,l={},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,p=u.split(t.delimiter,f),d=-1,y=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?y="utf-8":"utf8=%26%2310003%3B"===p[r]&&(y="iso-8859-1"),d=r,r=p.length);for(r=0;r<p.length;++r)if(r!==d){var m,b,h=p[r],g=h.indexOf("]="),v=-1===g?h.indexOf("="):g+1;-1===v?(m=t.decoder(h,a.decoder,y,"key"),b=t.strictNullHandling?null:""):(m=t.decoder(h.slice(0,v),a.decoder,y,"key"),b=o.maybeMap(c(h.slice(v+1),t),function(e){return t.decoder(e,a.decoder,y,"value")})),b&&t.interpretNumericEntities&&"iso-8859-1"===y&&(b=s(b)),h.indexOf("[]=")>-1&&(b=i(b)?[b]:b),n.call(l,m)?l[m]=o.combine(l[m],b):l[m]=b;}return l}(e,r):e,f=r.plainObjects?Object.create(null):{},p=Object.keys(u),d=0;d<p.length;++d){var y=p[d],m=l(y,u[y],r,"string"==typeof e);f=o.merge(f,m,r);}return o.compact(f)};}]).Geonames});
});

var Geonames = /*@__PURE__*/getDefaultExportFromCjs(geonames_min);

var script$1 = {
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
  emits: ["click-btn", "update:userName", "update:userPwd", "update:userEmail", "update:userCity"],

  data() {
    return {
      userEmail: "",
      userName: "",
      userPassword: "",
      userCity: "",
      cities: null
    };
  },

  async created() {
    const geonames = Geonames({
      username: 'yourclock',
      lan: 'es',
      encoding: 'JSON'
    });

    try {
      const citiesId = await geonames.search({
        country: 'CO',
        featureClass: 'P',
        maxRows: 1000
      });
      this.cities = citiesId.geonames.map(city => {
        return city.toponymName;
      });
    } catch (err) {
      console.error(err);
    }
  },

  computed: {
    comprobarEmail() {
      return this.userEmail.length <= this.minEmail ? 'null' : this.userEmail.length >= this.maxEmail ? 'true' : 'false';
    },

    comprobarUserName() {
      return this.userName.length <= this.minUserName ? 'null' : this.userName.length >= this.maxUserName ? 'true' : 'false';
    },

    comprobarPassword() {
      return this.userPassword.length <= this.minPwd ? 'null' : this.userPassword.length >= this.maxPwd ? 'true' : 'false';
    },

    comprobarCity() {
      return this.userCity.length <= 0 ? 'null' : this.userCity.length >= 1 ? 'true' : 'false';
    },

    comprobarBtnEnviar() {
      return !(this.comprobarUserName === 'true' && this.comprobarEmail === 'true' && this.comprobarPassword === 'true' && this.comprobarCity === 'true');
    }

  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-5153e314");

pushScopeId("data-v-5153e314");

const _hoisted_1 = {
  class: "form"
};
const _hoisted_2 = {
  class: "login"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_titleClock = resolveComponent("titleClock");

  const _component_inputClock = resolveComponent("inputClock");

  const _component_selectClock = resolveComponent("selectClock");

  const _component_btnClock = resolveComponent("btnClock");

  const _component_textBtnClock = resolveComponent("textBtnClock");

  return openBlock(), createBlock("div", _hoisted_1, [createVNode("div", _hoisted_2, [createVNode(_component_titleClock, {
    id: "text-title",
    class: "lg white",
    title: $props.titleForm
  }, null, 8, ["title"]), createVNode(_component_inputClock, {
    id: "input-userName",
    class: "sm white",
    disabled: false,
    type: "text",
    placeholder: $props.placeholderUserName,
    success: $options.comprobarUserName,
    modelValue: $data.userName,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.userName = $event),
    value: $data.userName,
    onInput: _cache[2] || (_cache[2] = $event => _ctx.$emit('update:userName', $event.target.value))
  }, null, 8, ["placeholder", "success", "modelValue", "value"]), createVNode(_component_selectClock, {
    id: "select-city",
    class: "sm white",
    enabledOptionTitle: true,
    optionTitle: $props.titleSelectCity,
    options: $data.cities,
    modelValue: $data.userCity,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.userCity = $event),
    onInput: _cache[4] || (_cache[4] = $event => _ctx.$emit('update:userCity', $event.target.value)),
    disabled: false
  }, null, 8, ["optionTitle", "options", "modelValue"]), createVNode(_component_inputClock, {
    id: "input-email",
    class: "sm white",
    disabled: false,
    type: "email",
    placeholder: $props.placeholderEmail,
    success: $options.comprobarEmail,
    modelValue: $data.userEmail,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $data.userEmail = $event),
    value: $data.userEmail,
    onInput: _cache[6] || (_cache[6] = $event => _ctx.$emit('update:userEmail', $event.target.value))
  }, null, 8, ["placeholder", "success", "modelValue", "value"]), createVNode(_component_inputClock, {
    id: "input-pwd",
    class: "sm white",
    disabled: false,
    type: "password",
    placeholder: $props.placeholderPwd,
    success: $options.comprobarPassword,
    modelValue: $data.userPassword,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $data.userPassword = $event),
    value: $data.userPassword,
    onInput: _cache[8] || (_cache[8] = $event => _ctx.$emit('update:userPassword', $event.target.value))
  }, null, 8, ["placeholder", "success", "modelValue", "value"]), createVNode(_component_btnClock, {
    id: "btn-login",
    class: "lg white",
    disabled: $options.comprobarBtnEnviar,
    onOnClick: _cache[9] || (_cache[9] = $event => _ctx.$emit('click-btn'))
  }, null, 8, ["disabled"]), createVNode(_component_textBtnClock, {
    id: "href-account",
    class: "sm white",
    disabled: false,
    name: $props.nameHrefAccount,
    target: $props.targetAccount,
    href: $props.hrefAccount
  }, null, 8, ["name", "target", "href"])])]);
});

var css_248z$1 = "\n@media only screen and (min-width: 1024px) {\n  /* For desktop: */\n.form[data-v-5153e314] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.login[data-v-5153e314] {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n    background: white;\n    border-radius: 25px;\n    padding: 32px 40px;\n    box-shadow: 10px 10px 5px rgba(255, 255, 255, 0.25);\n}\n#text-title[data-v-5153e314] {\n    text-align: center;\n    margin-bottom: 32px;\n    margin-left: 40px;\n    margin-right: 40px;\n}\n#input-userName[data-v-5153e314] {\n    margin-bottom: 24px;\n}\n#select-city[data-v-5153e314] {\n    margin-bottom: 24px;\n}\n#input-email[data-v-5153e314] {\n    margin-bottom: 24px;\n}\n#input-pwd[data-v-5153e314] {\n    margin-bottom: 40px;\n}\n#btn-login[data-v-5153e314] {\n    margin-bottom: 32px;\n    margin-left: 64px;\n    margin-right: 64px;\n}\n#href-account[data-v-5153e314] {\n    text-align: center;\n}\n}\n@media only screen and (min-width: 700px) and (max-width: 1024px) {\n  /* For tablets: */\n.form[data-v-5153e314] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.login[data-v-5153e314] {\n    display: flex;\n    flex-direction: column;\n    width: 450px;\n    background: white;\n    border-radius: 25px;\n    padding: 40px 48px;\n    box-shadow: 10px 10px 5px rgba(255, 255, 255, 0.25);\n}\n#text-title[data-v-5153e314] {\n    text-align: center;\n    margin-bottom: 32px;\n    margin-left: 40px;\n    margin-right: 40px;\n}\n#input-userName[data-v-5153e314] {\n    margin-bottom: 24px;\n}\n#select-city[data-v-5153e314] {\n    margin-bottom: 24px;\n}\n#input-email[data-v-5153e314] {\n    margin-bottom: 24px;\n}\n#input-pwd[data-v-5153e314] {\n    margin-bottom: 40px;\n}\n#btn-login[data-v-5153e314] {\n    margin-bottom: 32px;\n    margin-left: 64px;\n    margin-right: 64px;\n}\n#href-account[data-v-5153e314] {\n    text-align: center;\n}\n}\n@media only screen and (max-width: 700px) {\n  /* For mobile phones: */\n.form[data-v-5153e314] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.login[data-v-5153e314] {\n    display: flex;\n    flex-direction: column;\n    background: white;\n    width: 87%;\n    box-sizing: border-box;\n    border-radius: 25px;\n    padding: 40px 48px;\n    box-shadow: 10px 10px 5px rgba(255, 255, 255, 0.25);\n}\n#text-title[data-v-5153e314] {\n    text-align: center;\n    margin-bottom: 32px;\n    margin-left: 40px;\n    margin-right: 40px;\n}\n#input-userName[data-v-5153e314] {\n    margin-bottom: 24px;\n}\n#select-city[data-v-5153e314] {\n    margin-bottom: 24px;\n}\n#input-email[data-v-5153e314] {\n    margin-bottom: 24px;\n}\n#input-pwd[data-v-5153e314] {\n    margin-bottom: 40px;\n}\n#btn-login[data-v-5153e314] {\n    margin-bottom: 32px;\n    margin-left: 64px;\n    margin-right: 64px;\n}\n}\n\n";
styleInject(css_248z$1);

script$1.render = render;
script$1.__scopeId = "data-v-5153e314";

var css_248z = "\n@font-face{\n  font-family:'font-clock-normal';\n  src: url('../fonts/DS-DIGI.ttf');\n}\n@font-face{\n  font-family:'font-clock-bold';\n  src: url('../fonts/DS-DIGIB.ttf');\n}\n@font-face{\n  font-family:'font-clock-italic';\n  src: url('../fonts/DS-DIGII.ttf');\n}\n@font-face{\n  font-family:'font-clock-total';\n  src: url('../fonts/DS-DIGIT.ttf');\n}\n";
styleInject(css_248z);

const script = {};

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    alertClock: script$b,
    btnClock: script$a,
    selectClock: script$9,
    textBtnClock: script$8,
    inputClock: script$7,
    overlayClock: script$6,
    logoFacebook: script$5,
    logoGoogle: script$4,
    titleClock: script$3,
    formAuthClock: script$2,
    formLoginClock: script$1,
    fontsClock: script
});

// Import vue components

const install = function installYourclockWebcomponentsLib(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$b as alertClock, script$a as btnClock, script as fontsClock, script$2 as formAuthClock, script$1 as formLoginClock, script$7 as inputClock, script$5 as logoFacebook, script$4 as logoGoogle, script$6 as overlayClock, script$9 as selectClock, script$8 as textBtnClock, script$3 as titleClock };
