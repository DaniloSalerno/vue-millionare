<script>
import AppAnswersBox from './AppAnswersBox.vue';
import AppQuestion from './AppQuestion.vue';
import AppLose from './AppLose.vue';
import { state } from '../state'
import AppWin from './AppWin.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            state
        };
    },
    methods: {
    },
    components: { AppQuestion, AppAnswersBox, AppLose, AppWin }
}
</script>

<template>
    <main>

        <AppWin v-if="this.state.count === 15" />

        <div class="container" v-else-if="!this.state.lose">
            <AppQuestion />
            <AppAnswersBox />
        </div>

        <AppLose v-else />

    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
    height: 65vh;
    background-color: $primary_dark;

    padding-top: 2rem;

    .container {
        width: 75%;
    }

}

@media screen and (min-width: 768px) {
    main {
        padding-top: 3rem;
    }
}
</style>