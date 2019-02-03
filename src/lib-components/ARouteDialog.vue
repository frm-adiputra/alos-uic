<template lang="pug">
v-dialog(:value="dlg" @input="dlgChanged($event)"
	:width="width"
	:dark="dark"
	:light="light"
	:disabled="disabled"
	:persistent="persistent"
	:max-width="maxWidth"
)
	slot
</template>

<script>
export default {
	name: 'ARouteDialog',
	props: ['width', 'dark', 'light', 'disabled', 'persistent', 'maxWidth'],
	data() {
		return {
			dlg: false
		}
	},
	methods: {
		dlgChanged(value) {
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
