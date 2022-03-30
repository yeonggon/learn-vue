import Vue from 'vue'
import VueRouter  from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import BoardTable from "@/components/BoardTable";
import BoardDetail from "@/components/BoardDetail";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes : [
        {
            path: "/",
            name: "main",
            redirect: '/helloWorld'
        },
        {
            path: "/helloWorld",
            name: "HelloWorld",
            component: HelloWorld
        },
        {
            path: "/board",
            name: "BoardTable",
            component: BoardTable
        },
        {
            path: "/board/:id",
            name: "detail",
            component: BoardDetail
        }
    ]
})
