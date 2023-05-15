<template>
    <div>
        <h1>{{ message }}</h1>
        <li :key="index" v-for="(user, index) in users">{{ user }}</li>
        <button @click="changeMess()">Change</button>
        <li :key="index" v-for="(getProduct, index) in getProducts">{{ getProduct.name }}</li>
        <h3>Count: {{ $store.state.count }}</h3>
        <button @click="upCountValue()">Increment</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
    name: 'HomeVuex',

    data() { 
        return {

        }
    },

    created() {
        console.log(this.getProducts);
    },

    computed: {
        ...mapState(['users', 'message']),
        ...mapGetters(['getProducts'])
    },
    methods: {
        changeMess() {
            this.changeMessage()
        },
        ...mapMutations(['changeMessage']),

        upCountValue() {
            this.$store.dispatch('changeUpCount', 1)
        }
    }
}
</script>