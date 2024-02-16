<script>
import AppAnswersBox from './AppAnswersBox.vue';
import AppQuestion from './AppQuestion.vue';

export default {
    name: 'AppMain',
    data() {
        return {};
    },
    components: { AppQuestion, AppAnswersBox }
}
</script>

<template>
    <main>
        <div class="container">
            <AppQuestion />
            <AppAnswersBox />
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
    height: 65vh;
    background-color: $primary_dark;

    padding-top: 3rem;

    .container {
        width: 75%;
    }
}
</style>