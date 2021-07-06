const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: httpVueLoader("src/pages/index.vue")}
    ]
})

const app = new Vue({
    el: "#app",
    router
})
