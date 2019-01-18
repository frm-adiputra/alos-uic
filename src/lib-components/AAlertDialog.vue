<template lang="pug">
v-dialog(
	v-model="visible"
	:width="width"
	:dark="dark"
	:light="light"
	:disabled="disabled"
	:persistent="persistent"
	:max-width="maxWidth"
)
	v-card
		v-card-title.headline(v-if="title != null") {{ title }}
		v-card-text.subheading(style="color: rgba(0,0,0,.6);") {{ message }}
		v-card-actions(v-if="hasButtons")
			v-spacer
			v-btn(v-if="cancel != null" @click="doCancel" flat color="primary") {{ cancel }}
			v-btn(v-if="ok != null" @click="doOk" flat color="primary") {{ ok }}
</template>

<script>
export default {
	name: 'AAlertDialog',
	data() {
		return {
			visible: false,
			dialogResult: null,
			ok: null,
			cancel: null,
			title: null,
			message: null,
			width: null,
			dark: null,
			light: null,
			disabled: null,
			persistent: null,
			maxWidth: null
		}
	},
	computed: {
		hasButtons() {
			return this.ok != null || this.cancel != null
		},
		result() {
			return this.visible ? null : this.dialogResult
		}
	},
	created() {
		this.$a._eventBus.$on('alertDialog', this.updateData)
	},
	destroyed() {
		this.$a._eventBus.$off('alertDialog', this.updateData)
	},
	methods: {
		updateData({
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
		}) {
			this.message = message
			this.title = title
			this.ok = ok
			this.cancel = cancel
			this.onOk = onOk
			this.onCancel = onCancel
			this.width = width || 300
			this.dark = dark
			this.light = light
			this.disabled = disabled
			this.persistent = persistent
			this.maxWidth = maxWidth
			this.visible = true
		},
		doOk() {
			this.dialogResult = 'ok'
			this.visible = false
		},
		doCancel() {
			this.dialogResult = 'cancel'
			this.visible = false
		}
	},
	watch: {
		visible(newVal) {
			if (newVal) {
				this.dialogResult = null
			} else {
				if (this.dialogResult == 'ok') {
					if (this.onOk) {
						this.onOk()
					}
				} else if (this.dialogResult == 'cancel') {
					if (this.onCancel) {
						this.onCancel()
					}
				} else {
					if ((this.ok != null && this.cancel == null) || !this.hasButtons) {
						if (this.onOk) {
							this.onOk()
						}
					} else {
						if (this.onCancel) {
							this.onCancel()
						}
					}
				}
			}
		}
	}
}
</script>
