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
	props: ['width', 'dark', 'light', 'disabled', 'persistent', 'maxWidth', 'scrollable', 'fullscreen'],
	data() {
		return {
			dlg: false
		}
	},
	methods: {
		internalChanged(value) {
			this.dlg = value
			if (!value) {
				this.$router.back()
			}
		}
	},
	mounted() {
		this.dlg = true
	}
}
</script>

<style>
</style>
