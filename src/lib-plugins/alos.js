const install = Vue => {
	const eventBus = new Vue()
	const snackbar = ({ multiline, timeout, text, actionLabel, actionFn }) => {
		eventBus.$emit('msg', { multiline, timeout, text, actionLabel, actionFn })
	}

	Vue.prototype._alosEventBus = eventBus
	Vue.prototype.$snackbar = snackbar
}

export default {
	install
}
