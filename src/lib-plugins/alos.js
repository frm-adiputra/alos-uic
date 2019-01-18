const install = Vue => {
	const eventBus = new Vue()
	const snackbar = ({ multiline, timeout, text, actionLabel, actionFn }) => {
		eventBus.$emit('snackbar', {
			multiline,
			timeout,
			text,
			actionLabel,
			actionFn
		})
	}

	const alertDialog = () => {}

	Vue.prototype.$a = {
		snackbar,
		alertDialog,
		_eventBus: eventBus
	}
}

export default {
	install
}
