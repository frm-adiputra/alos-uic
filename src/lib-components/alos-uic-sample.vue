<script>
export default {
    name: 'AlosUicSample', // vue component name
    data() {
        return {
            counter: 5,
            initCounter: 5,
        };
    },
}
</script>

<template lang="pug">
    .alos-uic-sample
        p The counter is set to <b>{{counter}}</b>.
        button(@click="counter += 1") Click +1
        button(@click="counter -= 1") Click -1
        button(@click="counter = initCounter") Reset
</template>

<style scoped lang="stylus">
    .alos-uic-sample
        display block
        width 400px
        margin 25px auto
        border 1px solid #ccc
        background #eaeaea
        text-align center
        padding 25px

    .alos-uic-sample p
        margin 0 0 1em
</style>
