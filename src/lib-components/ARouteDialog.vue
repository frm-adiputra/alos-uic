<template lang="pug">
v-dialog(:value="dlg" @input="internalChanged($event)"
	:width="width"
	:dark="dark"
	:light="light"
	:disabled="disabled"
	:persistent="persistent"
	:max-width="maxWidth"
	:scrollable="scrollable"
	:fullscreen="fullscreen"
)
	slot
</template>

<script>
export default {
	name: 'ARouteDialog',
	props: {
		width: [Number, String],
		dark: Boolean,
		light: Boolean,
		disabled: Boolean,
		persistent: Boolean,
		maxWidth: [Number, String],
		scrollable: Boolean,
		fullscreen: Boolean,
		value: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			dlg: false
		}
	},
	methods: {
		internalChanged(value) {
			this.dlg = value
			this.$emit('input', value)
		}
	},
	mounted() {
		this.dlg = true
		this.$emit('input', true)
	},
	watch: {
		value(newValue) {
			this.dlg = newValue
			if (!newValue) {
				this.$router.back()
			}
		}
	}
}
</script>

<style>
</style>
