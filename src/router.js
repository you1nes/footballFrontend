import Vue from "vue";
import VueRouter from "vue-router";


import ListeOfPlayers from "./ListeOfPlayers.vue";


Vue.use(VueRouter)
export default new VueRouter({
routes : [
{
path: "/",
component: ListeOfPlayers


}
]
})
