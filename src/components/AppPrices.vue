<script>
import { state } from '../state'
export default {
    name: 'AppPrices',
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
    <div id="prices" class="pt-1 container">
        <div v-for="price in this.state.prices" class="pt-1">
            <div id="price" class="text-center rounded-pill px-1"
                :class="price.goal ? 'bg-warning' : 'bg-secondary', price.id <= this.state.count ? 'bg-success' : ''"> {{
                    price.price
                }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#prices {
    font-size: 0.5rem;

    #price {
        width: 60px;
    }
}

@media screen and (min-width: 768px) {

    #prices {
        font-size: 0.5rem;

        #price {
            width: 150px;
        }
    }
}
</style>