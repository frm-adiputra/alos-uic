<script>
import { AlosUicSample } from './entry';
export default {
    name:  'AlosUicLibDev', // vue library dev component
    components: {
        AlosUicSample,
    },
}
</script>

<template>
    <div class="alos-uic-lib-dev">
        <alos-uic-sample></alos-uic-sample>
    </div>
</template>

<style scoped>
    .alos-uic-lib-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
