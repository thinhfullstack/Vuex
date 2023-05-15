import { createStore } from "vuex";


export default createStore({
    state: {
        message: "Hello Vuex!",
        users: {
            id: 1,
            name: "Tran Van Thinh",
            age: 20
        },
        products: [
            {id: 1, name: "Product 1", qty: 0},
            {id: 2, name: "Product 2", qty: 10},
            {id: 3, name: "Product 3", qty: 30},
            {id: 4, name: "Product 4", qty: 60},
            {id: 5, name: "Product 5", qty: 100}
        ]
    },
    getters: {
        getProducts: (state) => {
            return state.products.filter(item => item.qty > 10)
        }
    },
    mutations: {
        changeMessage: (state, users) => {
            state.users = users
        }
    }
})