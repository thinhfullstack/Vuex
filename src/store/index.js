import { createStore } from "vuex";


export default createStore({
    state: {
        message: "Hello Vuex!",
        users: {
            id: 1,
            name: "Tran Van Thinh",
            age: 20
        }
    }
})