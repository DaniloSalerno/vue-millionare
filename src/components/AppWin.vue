<script>
import { state } from '../state'
export default {
    name: 'AppWin',
    data() {
        return {
            state,
        }
    },
    methods: {

    },
    mounted() {
    }

}
</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center gap-4 text-white pt-5">
        <h2 class="text-uppercase">🎉 congratulazioni 🎉</h2>

        <h2 class="text-uppercase">
            Hai vinto 1.000.000 €
        </h2>

        <div>
            <button class="btn btn-success">
                Gioca una nuova partita
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>