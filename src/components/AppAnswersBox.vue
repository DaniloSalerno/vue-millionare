<script>
import AppAnswer from './AppAnswer.vue';

export default {
    name: 'AppAnswersBox',
    data() {
        return {};
    },
    components: { AppAnswer }

}
</script>

<template>
    <div id="answer_box" class="text-white text-center">
        <div class="row row-cols-1 row-cols-md-2 g-3">

            <AppAnswer v-for="n in 4" />

        </div>
    </div>
</template>

<style lang="scss" scoped>
#answer_box {
    padding-top: 3rem;
}
</style>