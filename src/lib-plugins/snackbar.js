const install = Vue => {
	const _eventBus = new Vue()
	const addMsg = ({ multiline, timeout, text, actionLabel, actionFn }) => {
		_eventBus.$emit('msg', { multiline, timeout, text, actionLabel, actionFn })
	}

	Vue.prototype.$snackbar = {
		_eventBus,
		addMsg
	}
}

export default {
	install
}
