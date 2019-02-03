<template lang="pug">
v-dialog(:value="dlg" @input="dlgChanged($event)")
	slot
</template>

<script>
export default {
	name: 'ARouteDialog',
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
