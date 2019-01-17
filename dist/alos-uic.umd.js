(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.AlosUic = {})));
}(this, (function (exports) { 'use strict';

	//
	//
	//
	//
	//
	//

	// TODO: close snackbar when action is clicked
	var script = {
		name: 'ASnackbar',
		data: function data() {
			return {
				visible: false,
				msg: null,
				promise: Promise.resolve(),
				currResolve: null,
				timeoutId: null
			}
		},
		computed: {
			text: function text() {
				return this.msg ? this.msg.text : null
			},
			timeout: function timeout() {
				return this.msg ? this.msg.timeout : null
			},
			multiLine: function multiLine() {
				return this.msg ? this.msg.multiLine : null
			},
			actionLabel: function actionLabel() {
				return this.msg ? this.msg.actionLabel : null
			}
		},
		methods: {
			actionFn: function actionFn() {
				if (this.msg && this.msg.actionFn) {
					this.msg.actionFn();
					clearTimeout(this.timeoutId);
					this.visible = false;
					this.currResolve();
				}
			},
			showSnackbar: function showSnackbar(msg) {
				var this$1 = this;

				this.promise = this.promise
					.then(function () {
						this$1.msg = msg;
						this$1.visible = true;
						return new Promise(function (resolve) {
							var timeout = msg.timeout || 6000;
							this$1.currResolve = resolve;
							this$1.timeoutId = setTimeout(function () {
								this$1.visible = false;
								resolve();
							}, timeout);
						})
					})
					.then(function () {
						return new Promise(function (resolve) {
							setTimeout(function () {
								resolve();
							}, 1000);
						})
					});
			},
			addMsg: function addMsg(ref) {
				var multiLine = ref.multiLine;
				var timeout = ref.timeout;
				var text = ref.text;
				var actionLabel = ref.actionLabel;
				var actionFn = ref.actionFn;

				this.showSnackbar({ multiLine: multiLine, timeout: timeout, text: text, actionLabel: actionLabel, actionFn: actionFn });
			}
		},
		created: function created() {
			this.$snackbar._eventBus.$on('msg', this.addMsg);
		},
		destroyed: function destroyed() {
			this.$snackbar._eventBus.$off('msg', this.addMsg);
		}
	};

	/* script */
	            var __vue_script__ = script;
	            
	/* template */
	var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-snackbar',{attrs:{"timeout":0,"multiLine":_vm.multiLine},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v;},expression:"visible"}},[_vm._v(_vm._s(_vm.text)),_c('v-btn',{attrs:{"flat":"flat"},on:{"click":_vm.actionFn}},[_vm._v(_vm._s(_vm.actionLabel))])],1)};
	var __vue_staticRenderFns__ = [];

	  /* style */
	  var __vue_inject_styles__ = undefined;
	  /* scoped */
	  var __vue_scope_id__ = undefined;
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
	    component.__file = "ASnackbar.vue";

	    if (!component.render) {
	      component.render = template.render;
	      component.staticRenderFns = template.staticRenderFns;
	      component._compiled = true;

	      if (functional) { component.functional = true; }
	    }

	    component._scopeId = scope;

	    return component
	  }
	  /* style inject */
	  
	  /* style inject SSR */
	  

	  
	  var ASnackbar = __vue_normalize__(
	    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
	    __vue_inject_styles__,
	    __vue_script__,
	    __vue_scope_id__,
	    __vue_is_functional_template__,
	    __vue_module_identifier__,
	    undefined,
	    undefined
	  );

	/* eslint-disable import/prefer-default-export */

	var components = /*#__PURE__*/Object.freeze({
		ASnackbar: ASnackbar
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

	var install = function (Vue) {
		var _eventBus = new Vue();
		var addMsg = function (ref) {
			var multiline = ref.multiline;
			var timeout = ref.timeout;
			var text = ref.text;
			var actionLabel = ref.actionLabel;
			var actionFn = ref.actionFn;

			_eventBus.$emit('msg', { multiline: multiline, timeout: timeout, text: text, actionLabel: actionLabel, actionFn: actionFn });
		};

		Vue.prototype.$snackbar = {
			_eventBus: _eventBus,
			addMsg: addMsg
		};
	};

	var snackbar = {
		install: install
	};

	/* eslint-disable import/prefer-default-export */

	var plugins = /*#__PURE__*/Object.freeze({
		snackbar: snackbar
	});

	// Import vue components

	// install function executed by Vue.use()
	function install$1(Vue) {
	  if (install$1.installed) { return; }
	  install$1.installed = true;
	  Object.keys(plugins).forEach(function (pluginName) {
	    plugins[pluginName].install(Vue);
	  });
	  Object.keys(components).forEach(function (componentName) {
	    Vue.component(componentName, components[componentName]);
	  });
	  Object.keys(directives).forEach(function (directiveName) {
	    Vue.directive(directiveName, directives[directiveName]);
	  });
	}

	// Create module definition for Vue.use()
	var plugin = {
	  install: install$1,
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

	exports.ASnackbar = ASnackbar;
	exports.scroll = scroll;
	exports.snackbar = snackbar;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
