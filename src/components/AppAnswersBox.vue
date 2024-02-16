<script>
import AppAnswer from './AppAnswer.vue';
import { state } from '../state'
import AppModalConfirm from './AppModalConfirm.vue';

export default {
    name: 'AppAnswersBox',
    data() {
        return {
            state
        };
    },
    components: { AppAnswer, AppModalConfirm }

}
</script>

<template>
    <div id="answer_box" class="text-white text-center">

        <div class="row row-cols-1 row-cols-md-2 g-3">

            <AppAnswer v-for="n in state.qAndA[state.count].answers.length" :n="n"
                :answers="state.qAndA[state.count].answers" :key="n" />

        </div>

        <AppModalConfirm v-if="state.modalConfim" />


        <h5 class="correct text-uppercase mt-3 d-inline-block bg-success px-3 rounded-pill" v-if="state.correct">
            risposta esatta
        </h5>

    </div>
</template>

<style lang="scss" scoped>
#answer_box {
    padding-top: 2rem;
}

@media screen and (min-width: 768px) {
    #answer_box {
        padding-top: 3rem;
    }
}
</style>