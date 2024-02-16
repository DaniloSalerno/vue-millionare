<script>
import { state } from '../state';

export default {
    name: 'AppQuestion',
    data() {
        return {
            state
        }
    },
    mounted() {
    }
}
</script>

<template>
    <div id="question">
        {{ state.qAndA[state.count].question }}
    </div>
</template>


<style lang="scss" scoped>
#question {
    color: white;

    padding: 0.5rem 0;

    text-align: center;

    position: relative;

    border: 2px solid white;
    border-radius: 2rem;

}
</style>