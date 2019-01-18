<template lang="pug">
v-dialog(
	v-model="visible"
	@input="visibleChanged"
	:scrollable="scrollable"
	:width="width"
	:dark="dark"
	:light="light"
	:disabled="disabled"
	:persistent="persistent"
	:max-width="maxWidth"
)
	v-card
		v-card-title.headline(v-if="title != null") {{ title }}
		v-divider(v-if="scrollable")
		v-card-text
			slot
		v-divider(v-if="scrollable && hasButtons")
		v-card-actions(v-if="hasButtons")
			v-spacer
			v-btn(v-if="cancel != null" @click="onCancel" flat color="primary") {{ cancel }}
			v-btn(v-if="ok != null" @click="onOk" flat color="primary") {{ ok }}
</template>

<script>
export default {
	name: 'ADialog',
	model: {
		prop: 'value',
		event: 'input'
	},
	props: {
		value: Boolean,
		scrollable: Boolean,
		ok: String,
		cancel: String,
		title: String,
		width: [String, Number],
		dark: Boolean,
		light: Boolean,
		disabled: Boolean,
		persistent: Boolean,
		maxWidth: [String, Number]
	},
	data() {
		return {
			visible: false,
			dialogResult: null
		}
	},
	mounted() {
		this.visible = this.value
	},
	computed: {
		hasButtons() {
			return this.ok != null || this.cancel != null
		},
		result() {
			return this.visible ? null : this.dialogResult
		}
	},
	methods: {
		visibleChanged() {
			this.$emit('input', this.visible)
		},
		onOk() {
			this.dialogResult = 'ok'
			this.visible = false
			this.visibleChanged()
		},
		onCancel() {
			this.dialogResult = 'cancel'
			this.visible = false
			this.visibleChanged()
		}
	},
	watch: {
		value(newVal) {
			this.visible = newVal
		},
		visible(newVal) {
			if (newVal) {
				this.dialogResult = null
			} else {
				if (this.dialogResult != null) {
					this.$emit(this.dialogResult)
				} else {
					if ((this.ok != null && this.cancel == null) || !this.hasButtons) {
						this.$emit('ok')
					} else {
						this.$emit('cancel')
					}
				}
			}
		}
	}
}
</script>
