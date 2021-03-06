// Import vue components
import * as components from './lib-components/index'
import * as directives from './lib-directives/index'
import * as plugins from './lib-plugins/index'

// install function executed by Vue.use()
function install(Vue) {
	if (install.installed) return
	install.installed = true
	Object.keys(plugins).forEach(pluginName => {
		plugins[pluginName].install(Vue)
	})
	Object.keys(components).forEach(componentName => {
		Vue.component(componentName, components[componentName])
	})
	Object.keys(directives).forEach(directiveName => {
		Vue.directive(directiveName, directives[directiveName])
	})
}

// Create module definition for Vue.use()
const plugin = {
	install
}

// To auto-install when vue is found
/* global window global */
let GlobalVue = null
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue
}
if (GlobalVue) {
	GlobalVue.use(plugin)
}

// To allow use as module (npm/webpack/etc.) export components
export * from './lib-components/index'
export * from './lib-directives/index'
export * from './lib-plugins/index'
export { default as $alos } from './globals.js'
