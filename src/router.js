import Vue from "vue";
import VueRouter from "vue-router";


import ListeOfPlayers from "./ListeOfPlayers.vue";
import addPlayer from "@/addPlayers";
import addTeams from "@/addTeams";
import ListeOfTeams from "@/ListeOfTeams";
import psgPage from "@/psgPage";
import realMadridPage from "@/realMadridPage";


Vue.use(VueRouter)
export default new VueRouter({
routes : [
{
path: "/ListeOfPlayers",
    name:"ListeOfPlayers",
component: ListeOfPlayers

},
    {
    path: "/addPlayers",
        name:"addPlayers",
    component: addPlayer

},
    {
        path: "/addTeams",
        name:"addTeams",
        component: addTeams

    },
    {
        path: "/ListeOfTeams",
        name:"ListeOfTeams",
        component: ListeOfTeams

    },

    {
        path: "/psg",
        name:"psgPage",
        component: psgPage

    },
    {
        path: "/real",
        name:"realMadridPage",
        component: realMadridPage

    }





]
})
