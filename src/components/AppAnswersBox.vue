<script>
import AppAnswer from './AppAnswer.vue';
import { state } from '../state'

export default {
    name: 'AppAnswersBox',
    data() {
        return {
            state
        };
    },
    components: { AppAnswer }

}
</script>

<template>
    <div id="answer_box" class="text-white text-center">
        <div class="row row-cols-1 row-cols-md-2 g-3">

            <AppAnswer v-for="n in state.qAndA[state.count].answers.length" :n="n"
                :answers="state.qAndA[state.count].answers" />

        </div>
    </div>
</template>

<style lang="scss" scoped>
#answer_box {
    padding-top: 3rem;
}
</style>