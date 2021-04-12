import Vue from "vue";
import VueRouter from "vue-router";


import ListeOfPlayers from "./ListeOfPlayers.vue";
import addPlayer from "@/addPlayers";


Vue.use(VueRouter)
export default new VueRouter({
routes : [
{
path: "/",
    name:"ListeOfPlayers",
component: ListeOfPlayers

},
    {
    path: "/addPlayers",
        name:"addPlayers",
    component: addPlayer

}

]
})
