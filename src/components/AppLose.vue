<script>
import { state } from '../state'
export default {
    name: 'AppLose',
    data() {
        return {
            state,
        }
    },
    methods: {

        restart() {
            window.location.reload()
        }
    },
    mounted() {
    }

}
</script>

<template>
    <div class="container text-white">
        <div class="d-flex flex-column justify-content-center align-items-center pt-5 gap-5">
            <h3 class="bg-danger p-3 rounded-pill text-uppercase">
                Risposta sbagliata
            </h3>

            <div>
                Hai Vinto: {{ this.state.moneyWon ? this.state.moneyWon : '0 €' }}
            </div>

            <div>
                <button class="btn btn-success" @click="restart()">
                    Inizia una nuova partita
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>