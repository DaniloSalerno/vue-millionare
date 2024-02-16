<script>
import { state } from '../state'
export default {
    name: 'AppModalConfirm',
    data() {
        return {
            state,
        }
    },
    methods: {
        confirm() {

            if (this.state.qAndA[this.state.count].answers[this.state.index - 1].correct) {

                setTimeout(this.correctAnswer, 2000)

                this.state.correct = true

                this.state.modalConfim = false




            } else {
                this.state.lose = true
            }

        },

        correctAnswer() {
            this.state.prices[this.state.count].goal = false

            this.state.modalConfim = false
            this.state.count++
            this.state.index = 0
            this.state.correct = false

            if (this.state.prices[this.state.count].goal) {
                this.state.moneyWon = this.state.prices[this.state.count].price
            }

        },

        opposite() {
            this.state.index = 0
            this.state.modalConfim = false
        }

    },
    mounted() {
    }

}
</script>

<template>
    <div class="text-white pt-3">
        <h5 class="text-uppercase"> è la tua risposta definitiva?</h5>
        <div class="d-flex justify-content-center gap-5">
            <button class="btn btn-success px-5" @click="confirm()">SI</button>
            <button class="btn btn-danger px-5" @click="opposite()">NO</button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>