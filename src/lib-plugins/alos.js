const install = Vue => {
	const eventBus = new Vue()
	const dialogStack = []

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
		eventBus.$emit('alert-dialog', {
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

	eventBus.$on('open-dialog', closeCb => {
		dialogStack.push(closeCb)
	})

	eventBus.$on('close-dialog', () => {
		const cb = dialogStack.pop()
		if (cb) {
			cb()
		}
	})

	Vue.prototype.$a = {
		snackbar,
		alertDialog,
		_eventBus: eventBus
	}
}

export default {
	install
}
