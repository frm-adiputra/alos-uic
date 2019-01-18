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

	const alertDialog = ({
		message,
		title,
		ok,
		cancel,
		onOk,
		onCancel,
		width,
		dark,
		light,
		disabled,
		persistent,
		maxWidth
	}) => {
		eventBus.$emit('alertDialog', {
			message,
			title,
			ok,
			cancel,
			onOk,
			onCancel,
			width,
			dark,
			light,
			disabled,
			persistent,
			maxWidth
		})
	}

	Vue.prototype.$a = {
		snackbar,
		alertDialog,
		_eventBus: eventBus
	}
}

export default {
	install
}
