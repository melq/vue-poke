const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: httpVueLoader("./index.vue")}
    ]
})

const app = new Vue({
    el: "#app",
    router
})
