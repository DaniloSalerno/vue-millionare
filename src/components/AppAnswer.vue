<script>
import { state } from '../state'
export default {
    name: 'AppAnswer',
    data() {
        return {
            state
        }
    },
    props: {
        answers: Array,
        n: Number
    },
    mounted() {
    }

}
</script>

<template>
    <div class="col">
        <div class="answer">{{ answers[n - 1].text }}</div>
    </div>
</template>

<style lang="scss" scoped>
.answer {
    padding: 0.5rem;
    border-radius: 2rem;
    border: 2px solid white;

}
</style>