const install = Vue => {
	const _eventBus = new Vue()
	const fn = ({ multiline, timeout, text, actionLabel, actionFn }) => {
		_eventBus.$emit('msg', { multiline, timeout, text, actionLabel, actionFn })
	}
	fn._eventBus = _eventBus
	Vue.prototype.$snackbar = fn
}

export default {
	install
}
