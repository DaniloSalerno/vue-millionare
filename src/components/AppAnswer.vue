<script>
import { state } from '../state'
export default {
    name: 'AppAnswer',
    data() {
        return {
            state,
        }
    },
    props: {
        answers: Array,
        n: Number
    },
    methods: {
        answerSelected(n) {

            this.state.index = n

            this.state.modalConfim = true

            console.log(this.answers[n - 1].index, this.state.index, this.answers[n - 1].correct);
        }
    },
    mounted() {
    }

}
</script>

<template>
    <div class="col">
        <div class="answer"
            :class="this.state.index === answers[n - 1].index ? 'focus' : '', this.state.correct && this.state.index === answers[n - 1].index ? 'bg-success' : ''"
            @click="answerSelected(n)">
            {{
                answers[n - 1].text }}</div>
    </div>
</template>

<style lang="scss" scoped>
.answer {
    padding: 0.5rem;
    border-radius: 2rem;
    border: 2px solid white;

    &.focus {
        background-color: yellow;
        color: black;
    }

}
</style>