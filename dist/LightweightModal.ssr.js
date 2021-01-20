'use strict';Object.defineProperty(exports,'__esModule',{value:true});var Vue=require('vue');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var Vue__default=/*#__PURE__*/_interopDefaultLegacy(Vue);var script = Vue__default['default'].extend({
  props: {
    show: {
      required: true,
      default: false,
      type: Boolean
    },
    video: {
      required: false,
      default: false,
      type: Boolean
    },
    title: {
      required: false,
      type: String
    },
    radius: {
      required: false,
      default: 0,
      type: Number
    },
    max: {
      required: false,
      default: '1000px',
      type: String
    },
    min: {
      required: false,
      default: '0',
      type: String
    },
    duration: {
      required: false,
      default: '900ms',
      type: String
    }
  },
  computed: {
    cssProps: function cssProps() {
      return {
        '--border-radius': "".concat(this.radius, "px"),
        '--max-width': "".concat(this.max),
        '--min-width': "".concat(this.min),
        '--duration': "".concat(this.duration)
      };
    }
  },
  methods: {
    closeModal: function closeModal() {
      this.$emit('close');
    }
  }
});function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode("<div class=\"vue-lightweight-modal\"" + _vm._ssrStyle(null, _vm.cssProps, null) + " data-v-47175996>", "</div>", [_c('transition', {
    attrs: {
      "name": "fade-up",
      "appear": ""
    }
  }, [_vm.show ? _c('div', {
    staticClass: "inner"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('h3', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "close",
    on: {
      "click": _vm.closeModal
    }
  }, [_c('svg', {
    attrs: {
      "width": "13",
      "height": "12",
      "viewBox": "0 0 13 12",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('rect', {
    attrs: {
      "x": "2",
      "width": "15",
      "height": "1.5",
      "rx": "0.75",
      "transform": "rotate(45 2 0)",
      "fill": "black"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "1",
      "y": "10.6066",
      "width": "15",
      "height": "1.5",
      "rx": "0.75",
      "transform": "rotate(-45 1 10.6066)",
      "fill": "black"
    }
  })])])]), _vm._v(" "), !_vm.video ? _vm._t("default") : _c('div', {
    staticClass: "scale-video"
  }, [_vm._t("default")], 2)], 2) : _vm._e()])], 1), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "fade",
      "appear": ""
    }
  }, [_vm.show ? _c('div', {
    staticClass: "outerclick",
    on: {
      "click": _vm.closeModal
    }
  }) : _vm._e()])], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-47175996_0", {
    source: ".vue-lightweight-modal[data-v-47175996]{position:fixed;top:50%;left:50%;transform:translate(-50%,-60%);max-width:var(--max-width);min-width:var(--min-width);width:98%;z-index:9999}.vue-lightweight-modal .inner[data-v-47175996]{padding:1rem;background:#fff;border-radius:var(--border-radius)}.header[data-v-47175996]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1em}h3[data-v-47175996]{margin:0}.close[data-v-47175996]{height:20px;width:20px;cursor:pointer}.outerclick[data-v-47175996]{background:rgba(0,0,0,.2);position:fixed;z-index:9998;width:100vw;height:100vh;position:fixed;top:0;left:0;opacity:1}.fade-up-enter-active[data-v-47175996]{animation:fade-up-data-v-47175996 var(--duration) cubic-bezier(.075,.82,.165,1)}.fade-up-leave-active[data-v-47175996]{animation:fade-down-data-v-47175996 calc(var(--duration) - 150ms) cubic-bezier(.075,.82,.165,1)}@keyframes fade-up-data-v-47175996{from{opacity:0;visibility:hidden;transform:translateY(50px)}to{opacity:1;transform:0;visibility:visible}}@keyframes fade-down-data-v-47175996{from{opacity:1;transform:0;visibility:visible}to{opacity:0;visibility:hidden;transform:translateY(50px)}}.fade-enter-active[data-v-47175996],.fade-leave-active[data-v-47175996]{transition:opacity .8s ease}.fade-enter-from[data-v-47175996],.fade-leave-to[data-v-47175996]{opacity:0}",
    map: undefined,
    media: undefined
  }), inject("data-v-47175996_1", {
    source: ".scale-video{width:100%;padding-top:56.25%;position:relative}.scale-video iframe{position:absolute;top:0;left:0;width:100%;height:100%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-47175996";
/* module identifier */

var __vue_module_identifier__ = "data-v-47175996";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component
// eslint-disable-next-line @typescript-eslint/no-explicit-any

// install function executed by Vue.use()
var install = function installLightweightModal(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('LightweightModal', __vue_component__);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
// eslint-disable-next-line @typescript-eslint/no-explicit-any


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=__vue_component__;