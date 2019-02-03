import $alos from '../globals.js'

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

	eventBus.$on('open-dialog', $alos._onOpenDialog)

	eventBus.$on('close-dialog', $alos._onCloseDialog)

	Vue.prototype.$a = {
		snackbar,
		alertDialog,
		_eventBus: eventBus
	}
}

export default {
	install
}
