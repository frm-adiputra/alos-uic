<template lang="pug">
    v-dialog(:value="dialog" @input="onDialogChanged($event)")
        slot
</template>

<script>
const cuid = require('cuid')

export default {
    name: 'ADialog',
    props: ['value'],
    data() {
        return {
            dialog: false
        }
    },
    methods: {
        onDialogChanged(value) {
            this.dialog = value
            this.$emit('input', value)
        },
        closeDialog() {
            this.dialog = false
            this.$emit('input', false)
        }
    },
    mounted() {
        this.dialog = this.value
    },
    beforeDestroy() {
        if (this.id != null) {
            this.$a._eventBus.$emit('close-dialog', this.id)
        }
    },
    watch: {
        value(newValue) {
            this.dialog = newValue
            if (newValue) {
                this.id = cuid()
                this.$a._eventBus.$emit('open-dialog', {id: this.id, close: this.closeDialog})
            } else {
                this.$a._eventBus.$emit('close-dialog', this.id)
                this.id = null
            }
        }
    }
}
</script>

<style>

</style>
