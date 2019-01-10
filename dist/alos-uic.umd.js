(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.AlosUic = {})));
}(this, (function (exports) { 'use strict';

    var script = {
        name: 'AlosUicSample', // vue component name
        data: function data() {
            return {
                counter: 5,
                initCounter: 5,
            };
        },
    };

    /* script */
                var __vue_script__ = script;
                
    /* template */
    var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alos-uic-sample"},[_c('p',[_vm._v("The counter is set to "),_c('b',[_vm._v(_vm._s(_vm.counter))]),_vm._v(".")]),_c('button',{on:{"click":function($event){_vm.counter += 1;}}},[_vm._v("Click +1")]),_c('button',{on:{"click":function($event){_vm.counter -= 1;}}},[_vm._v("Click -1")]),_c('button',{on:{"click":function($event){_vm.counter = _vm.initCounter;}}},[_vm._v("Reset")])])};
    var __vue_staticRenderFns__ = [];

      /* style */
      var __vue_inject_styles__ = function (inject) {
        if (!inject) { return }
        inject("data-v-19b29aba_0", { source: ".alos-uic-sample[data-v-19b29aba]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.alos-uic-sample p[data-v-19b29aba]{margin:0 0 1em}", map: undefined, media: undefined });

      };
      /* scoped */
      var __vue_scope_id__ = "data-v-19b29aba";
      /* module identifier */
      var __vue_module_identifier__ = undefined;
      /* functional template */
      var __vue_is_functional_template__ = false;
      /* component normalizer */
      function __vue_normalize__(
        template, style, script$$1,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "alos-uic-sample.vue";

        if (!component.render) {
          component.render = template.render;
          component.staticRenderFns = template.staticRenderFns;
          component._compiled = true;

          if (functional) { component.functional = true; }
        }

        component._scopeId = scope;

        {
          var hook;
          if (style) {
            hook = function(context) {
              style.call(this, createInjector(context));
            };
          }

          if (hook !== undefined) {
            if (component.functional) {
              // register for functional component in vue file
              var originalRender = component.render;
              component.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context)
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = component.beforeCreate;
              component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }
        }

        return component
      }
      /* style inject */
      function __vue_create_injector__() {
        var head = document.head || document.getElementsByTagName('head')[0];
        var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
        var isOldIE =
          typeof navigator !== 'undefined' &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

        return function addStyle(id, css) {
          if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

          var group = isOldIE ? css.media || 'default' : id;
          var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

          if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;

            style.ids.push(id);

            if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                ' */';
            }

            if (isOldIE) {
              style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }

            if (!style.element) {
              var el = style.element = document.createElement('style');
              el.type = 'text/css';

              if (css.media) { el.setAttribute('media', css.media); }
              if (isOldIE) {
                el.setAttribute('data-group', group);
                el.setAttribute('data-next-index', '0');
              }

              head.appendChild(el);
            }

            if (isOldIE) {
              index = parseInt(style.element.getAttribute('data-next-index'));
              style.element.setAttribute('data-next-index', index + 1);
            }

            if (style.element.styleSheet) {
              style.parts.push(code);
              style.element.styleSheet.cssText = style.parts
                .filter(Boolean)
                .join('\n');
            } else {
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index]) { style.element.removeChild(nodes[index]); }
              if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
              else { style.element.appendChild(textNode); }
            }
          }
        }
      }
      /* style inject SSR */
      

      
      var alosUicSample = __vue_normalize__(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        __vue_create_injector__,
        undefined
      );

    /* eslint-disable import/prefer-default-export */

    var components = /*#__PURE__*/Object.freeze({
        AlosUicSample: alosUicSample
    });

    var scroll = {
    	inserted: function(el, binding) {
    		var f = function(evt) {
    			if (binding.value(evt, el)) {
    				window.removeEventListener('scroll', f);
    			}
    		};
    		window.addEventListener('scroll', f);
    	}
    };

    /* eslint-disable import/prefer-default-export */

    var directives = /*#__PURE__*/Object.freeze({
        scroll: scroll
    });

    // Import vue components

    // install function executed by Vue.use()
    function install(Vue) {
      if (install.installed) { return; }
      install.installed = true;
      Object.keys(components).forEach(function (componentName) {
        Vue.component(componentName, components[componentName]);
      });
      Object.keys(directives).forEach(function (directiveName) {
        Vue.directive(directiveName, directives[directiveName]);
      });
    }

    // Create module definition for Vue.use()
    var plugin = {
      install: install,
    };

    // To auto-install when vue is found
    /* global window global */
    var GlobalVue = null;
    if (typeof window !== 'undefined') {
      GlobalVue = window.Vue;
    } else if (typeof global !== 'undefined') {
      GlobalVue = global.Vue;
    }
    if (GlobalVue) {
      GlobalVue.use(plugin);
    }

    exports.AlosUicSample = alosUicSample;
    exports.scroll = scroll;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
