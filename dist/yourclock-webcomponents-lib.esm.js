import { pushScopeId, popScopeId, openBlock, createBlock, createVNode, toDisplayString, withScopeId, withDirectives, vShow } from 'vue';

var script$7 = {
  name: 'alert-clock',
  props: {
    msg: {
      type: String,
      require: true
    },
    state: {
      type: Boolean,
      default: true
    }
  }
};

const _withId$7 = /*#__PURE__*/withScopeId("data-v-1b2b8254");

pushScopeId("data-v-1b2b8254");

const _hoisted_1$2 = {
  class: "alert"
};

const _hoisted_2$1 = /*#__PURE__*/createVNode("span", {
  class: "closebtn",
  onclick: "this.parentElement.style.display='none';"
}, "×", -1);

const _hoisted_3 = /*#__PURE__*/createVNode("strong", null, "¡Atencion! ", -1);

popScopeId();

const render$7 = /*#__PURE__*/_withId$7((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$2, [_hoisted_2$1, _hoisted_3, createVNode("span", null, toDisplayString($props.msg), 1)]);
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

var css_248z$7 = "\n.alert[data-v-1b2b8254]{\n    margin-bottom: 0px;\n}\n.lg[data-v-1b2b8254]{\n    font-size: 15px;\n    padding: 5px;\n    padding: 14px;\n}\n.sm[data-v-1b2b8254]{\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 13px;\n    padding: 10px;\n}\n.danger.alert[data-v-1b2b8254] {\n    padding: 12px;\n    background-color: rgb(160, 0, 0);\n    color: white;\n}\n.warning.alert[data-v-1b2b8254] {\n    padding: 12px;\n    background-color: #C0C000;\n    color: black;\n}\n.closebtn[data-v-1b2b8254] {\n    margin-left: 15px;\n    color: white;\n    font-weight: bold;\n    float: right;\n    font-size: 22px;\n    line-height: 15px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n.closebtn[data-v-1b2b8254]:hover {\n    color: black;\n}\n\n";
styleInject(css_248z$7);

script$7.render = render$7;
script$7.__scopeId = "data-v-1b2b8254";

var script$6 = {
  name: 'btn-clock',
  props: {
    name: {
      type: String,
      require: true
    },
    state: {
      type: Boolean,
      default: false
    }
  }
};

const _withId$6 = /*#__PURE__*/withScopeId("data-v-d7c57026");

const render$6 = /*#__PURE__*/_withId$6((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("button", {
    disabled: $props.state,
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('on-click'))
  }, toDisplayString($props.name), 9, ["disabled"]);
});

var css_248z$6 = "\nbutton.sm[data-v-d7c57026]{\n        height: 30px;\n        font-size: 13px;\n}\nbutton.md[data-v-d7c57026]{\n        height: 35px;\n        font-size: 16px;\n}\nbutton.lg[data-v-d7c57026]{\n        height: 40px;\n        font-size: 18px;\n}\nbutton[data-v-d7c57026]{\n        width: 100%;\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n        border-radius: 5px;\n        font-size: 16px;\n        transition: all 0.3s ease;\n        outline: none;\n}\nbutton[data-v-d7c57026]:hover{\n        background-color: black;\n        color: white;\n        border: 1px solid white;\n        cursor: pointer;\n}\nbutton[data-v-d7c57026]:disabled{\n        background-color: white;\n        color: gray;\n        border: 1px solid grey;\n}\nbutton[data-v-d7c57026]:active{\n        background-color: black;\n        color: white;\n        border: 1px solid white;\n}\nbutton[data-v-d7c57026]:focus{\n        background-color: grey;\n        color: black;\n        border: 1px solid grey;\n}\n\n";
styleInject(css_248z$6);

script$6.render = render$6;
script$6.__scopeId = "data-v-d7c57026";

var script$5 = {
  name: 'textBtn-clock',
  props: {
    name: {
      type: String,
      require: true
    },
    state: {
      type: Boolean,
      default: false
    }
  }
};

const _withId$5 = /*#__PURE__*/withScopeId("data-v-09418e55");

const render$5 = /*#__PURE__*/_withId$5((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("a", {
    disabled: $props.state,
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('on-click'))
  }, toDisplayString($props.name), 9, ["disabled"]);
});

var css_248z$5 = "\na.sm[data-v-09418e55]{\n        height: 30px;\n        font-size: 13px;\n}\na.md[data-v-09418e55]{\n        height: 35px;\n        font-size: 16px;\n}\na.lg[data-v-09418e55]{\n        height: 40px;\n        font-size: 18px;\n}\na[data-v-09418e55]{\n        border: none;\n        outline: none;\n        background-color: inherit;\n        cursor: pointer;\n        font-size: 16px;\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        color: rgb(93, 112, 255);\n        text-decoration: none;\n}\na[data-v-09418e55]:hover{\n        color: rgb(0, 8, 255);\n        text-decoration: underline;\n}\na[data-v-09418e55]:disabled{\n        color: gray;\n}\na[data-v-09418e55]:active{\n        color: rgb(0, 5, 164);\n}\na[data-v-09418e55]:focus{\n        color: rgb(0, 5, 164);\n}\n\n";
styleInject(css_248z$5);

script$5.render = render$5;
script$5.__scopeId = "data-v-09418e55";

var script$4 = {
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

const _withId$4 = /*#__PURE__*/withScopeId("data-v-2d816cd2");

const render$4 = /*#__PURE__*/_withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("input", {
    value: $props.modelValue,
    onInput: _cache[1] || (_cache[1] = $event => _ctx.$emit('update:modelValue', $event.target.value)),
    type: $props.type,
    placeholder: $props.placeholder,
    disabled: $props.disabled,
    success: $props.state
  }, null, 40, ["value", "type", "placeholder", "disabled", "success"]);
});

var css_248z$4 = "\ninput.sm[data-v-2d816cd2]{\n        height: 25px;\n        font-size: 11px;\n}\ninput.md[data-v-2d816cd2]{\n        height: 30px;\n        font-size: 14px;\n}\ninput.lg[data-v-2d816cd2]{\n        height: 35px;\n        font-size: 17px;\n}\ninput[data-v-2d816cd2]{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        width: 100%;\n        height: 30px;\n        font-size: 14px;\n        padding-left: 10px;\n        border: 1px solid black;\n        border-radius: 5px;\n}\ninput[success=\"null\"][data-v-2d816cd2]:disabled{\n        border: 1px solid rgb(0, 0, 0);\n        background-color: rgb(0, 0, 0);\n}\ninput[data-v-2d816cd2]:disabled::-webkit-input-placeholder { \n        color: white;\n}\ninput[success=\"true\"][data-v-2d816cd2]{\n        border: 1.5px solid rgb(0, 115, 0);\n        background-color: #e8f0fe;\n}\ninput[success=\"false\"][data-v-2d816cd2]{\n        border: 1.5px solid rgb(185, 0, 0);\n        background-color: #FFEAEA;\n}\ninput[success=\"null\"][data-v-2d816cd2]{\n        border: 1px solid black;\n        background-color: #EEEEEE;\n}\ninput[success=\"true\"][data-v-2d816cd2]:focus{\n        box-shadow: 0 0 0 2px rgba(0, 115, 0, 0.4);\n        background-color: white;\n        outline: none;\n}\ninput[success=\"false\"][data-v-2d816cd2]:focus{\n        box-shadow: 0 0 0 2px rgba(185, 0, 0, 0.4);\n        background-color: white;\n        outline: none;\n}\ninput[success=\"null\"][data-v-2d816cd2]:focus{\n        box-shadow: 0 0 0 1.5px rgba(0, 0, 0, 0.4);\n        background-color: white;\n        outline: none;\n}\ninput[success=\"null\"][data-v-2d816cd2]:focus::-webkit-input-placeholder{\n        color: transparent;\n}\ninput[success=\"true\"][data-v-2d816cd2]:hover{\n        box-shadow: 0 0 0 2px rgba(0, 115, 0, 0.4);\n        outline: none;\n}\ninput[success=\"false\"][data-v-2d816cd2]:hover{\n        box-shadow: 0 0 0 2px rgba(185, 0, 0, 0.4);\n        outline: none;\n}\ninput[success=\"null\"][data-v-2d816cd2]:hover{\n        box-shadow: 0 0 0 1.5px rgba(0, 0, 0, 0.4);\n        outline: none;\n}\n\n";
styleInject(css_248z$4);

script$4.render = render$4;
script$4.__scopeId = "data-v-2d816cd2";

var script$3 = {
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

const _withId$3 = /*#__PURE__*/withScopeId("data-v-7b16f836");

pushScopeId("data-v-7b16f836");

const _hoisted_1$1 = {
  class: "overlay"
};

const _hoisted_2 = /*#__PURE__*/createVNode("div", {
  class: "loader"
}, null, -1);

popScopeId();

const render$3 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  return withDirectives((openBlock(), createBlock("div", _hoisted_1$1, [_hoisted_2, createVNode("p", null, toDisplayString($props.msg), 1)], 512)), [[vShow, $props.show]]);
});

var css_248z$3 = "\np[data-v-7b16f836]{\n        color: rgb(169, 169, 169);\n        font-size: 20px;\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n.overlay[data-v-7b16f836] {\n        position: fixed;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0,0,0,0.75);\n        z-index: 105;\n}\n.loader[data-v-7b16f836] {\n        border: 16px dotted rgba(0, 0, 0, 1);;\n        border-radius: 100%;\n        border-top: 16px inset rgba(250, 250, 250, 1);\n        box-shadow: 0 0 0 5px rgba(175, 175, 175, 1);\n        width: 90px;\n        height: 90px;\n        -webkit-animation: spin-7b16f836 1s linear infinite; /* Safari */\n        animation: spin-7b16f836 1s linear infinite;\n}\n\n    /* Safari */\n@-webkit-keyframes spin-7b16f836 {\n0% { -webkit-transform: rotate(0deg);\n}\n100% { -webkit-transform: rotate(360deg);\n}\n}\n@keyframes spin-7b16f836 {\n0% { transform: rotate(0deg);\n}\n100% { transform: rotate(360deg);\n}\n}\n";
styleInject(css_248z$3);

script$3.render = render$3;
script$3.__scopeId = "data-v-7b16f836";

var script$2 = {
  name: 'logo-facebook',
  props: {}
};

const _withId$2 = /*#__PURE__*/withScopeId("data-v-23ab5670");

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    id: "facebook",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('on-click'))
  });
});

var css_248z$2 = "\n#facebook[data-v-23ab5670] {\n        background: #43609C;\n        border-radius: 9%;\n        border-color: black;\n        height: 50px;\n        position: relative;\n        width: 50px;\n}\n#facebook[data-v-23ab5670]:after {\n        color: #fff;\n        content: \"f\";\n        display: block;\n        font-family: Facebook Letter Faces, Arial, fantasy;\n        font-size: 50px;\n        font-weight: bold;\n        margin: 6% 0 0 50%;\n}\n#facebook[data-v-23ab5670]:hover {\n        -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.90);\n        -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.90);\n        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.90);\n        cursor: pointer;\n}\n";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__scopeId = "data-v-23ab5670";

var script$1 = {
  name: 'logo-google',
  props: {}
};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-d73495d6");

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    id: "google",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('on-click'))
  });
});

var css_248z$1 = "\n#google[data-v-d73495d6] {\n  position: relative;\n  border-top: 10px solid #EA4335;\n  border-right: 10px solid #4285F4;\n  border-bottom: 10px solid #34A853;\n  border-left: 10px solid #FBBC05;\n  border-radius: 50%;\n  background-color: #FFFFFF;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n}\n#google[data-v-d73495d6]::before {\n  content: \"\";\n  z-index: 100;\n  position: absolute;\n  top: 50%;\n  right: -5px;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 10px;\n  background: #4285F4;\n}\n#google[data-v-d73495d6]::after {\n  content: \"\";\n  z-index: 101;\n  position: absolute;\n  border-top: 20px solid transparent;\n  border-right: 24px solid #FFFFFF;\n  border-top-right-radius: 100%;\n  top: -10px;\n  right: -9px;\n  width: 0;\n  height: 0;\n}\n#google[data-v-d73495d6]:hover {\n-moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.90);\n-webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.90);\nbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.90);\ncursor: pointer;\n}\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-d73495d6";

var script = {
  name: 'title-clock',
  props: {
    title: {
      type: String,
      require: true
    }
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-90f5fdf4");

pushScopeId("data-v-90f5fdf4");

const _hoisted_1 = {
  class: "title-1"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("h1", _hoisted_1, toDisplayString($props.title), 1);
});

var css_248z = "\n.title-1[data-v-90f5fdf4]{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        color:white;\n        font-size: 30px;\n        margin-bottom: 0rem;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-90f5fdf4";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    alertClock: script$7,
    btnClock: script$6,
    textBtnClock: script$5,
    inputClock: script$4,
    overlayClock: script$3,
    logoFacebook: script$2,
    logoGoogle: script$1,
    titleClock: script
});

// Import vue components

const install = function installYourclockWebcomponentsLib(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$7 as alertClock, script$6 as btnClock, script$4 as inputClock, script$2 as logoFacebook, script$1 as logoGoogle, script$3 as overlayClock, script$5 as textBtnClock, script as titleClock };
