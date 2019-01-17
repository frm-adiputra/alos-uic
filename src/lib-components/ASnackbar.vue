<template lang="pug">
	v-snackbar(v-model="visible" :timeout="0" :multiLine="multiLine")
		| {{ text }}
		v-btn(flat @click="actionFn") {{ actionLabel }}
</template>

<script>
// TODO: close snackbar when action is clicked
export default {
	name: 'ASnackbar',
	data() {
		return {
			visible: false,
			msg: null,
			promise: Promise.resolve(),
			currResolve: null,
			timeoutId: null
		}
	},
	computed: {
		text() {
			return this.msg ? this.msg.text : null
		},
		timeout() {
			return this.msg ? this.msg.timeout : null
		},
		multiLine() {
			return this.msg ? this.msg.multiLine : null
		},
		actionLabel() {
			return this.msg ? this.msg.actionLabel : null
		}
	},
	methods: {
		actionFn() {
			if (this.msg && this.msg.actionFn) {
				this.msg.actionFn()
				clearTimeout(this.timeoutId)
				this.visible = false
				this.currResolve()
			}
		},
		showSnackbar(msg) {
			this.promise = this.promise
				.then(() => {
					this.msg = msg
					this.visible = true
					return new Promise(resolve => {
						const timeout = msg.timeout || 6000
						this.currResolve = resolve
						this.timeoutId = setTimeout(() => {
							this.visible = false
							resolve()
						}, timeout)
					})
				})
				.then(() => {
					return new Promise(resolve => {
						setTimeout(() => {
							resolve()
						}, 1000)
					})
				})
		},
		addMsg({ multiLine, timeout, text, actionLabel, actionFn }) {
			this.showSnackbar({ multiLine, timeout, text, actionLabel, actionFn })
		}
	},
	created() {
		this.$snackbar._eventBus.$on('msg', this.addMsg)
	},
	destroyed() {
		this.$snackbar._eventBus.$off('msg', this.addMsg)
	}
}
</script>

<style>
</style>
