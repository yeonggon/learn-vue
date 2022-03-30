import Vue from 'vue'
import VueRouter  from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import BoardTable from "@/components/BoardTable";

Vue.use(VueRouter)

export default new VueRouter({
    routes : [
        {
            path: "/",
            name: "HelloWorld",
            component: HelloWorld
        },
        {
            path: "/board",
            name: "BoardTable",
            component: BoardTable
        }
    ]
})
