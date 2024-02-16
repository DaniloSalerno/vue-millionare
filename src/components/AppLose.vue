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
    <div class="container">
        <div class="d-flex justify-content-center align-items-center pt-5 gap-3">
            <div class="text-white">
                Risposta sbagliata
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