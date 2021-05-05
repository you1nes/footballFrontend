<template>
  <div id = "ListeOfteams">
    <body>
    <div class="container" id="ListeOfTeams">
      <br />

      <div class="main">
        <div class="title">
          <h2>Tableau des équipes </h2>
        </div>
        <table class="table table-hover">
          <thead>
          <tr>
            <th>Nom de l'equipe</th>
            <th>Pays </th>
            <th>Stade </th>

          </tr>
          </thead>
          <tbody>

          <tr v-for="team in teams" :key="team.idTeam">
            <td>
              {{ team.nom }}
            </td>
            <td>
              {{ team.pays }}
            </td>
            <td>
              {{ team.stade }}
            </td>
              <td>
              <div class="button">
                <a href="#" class="myButon" v-on:click="modifier(team.idTeam)">MODIFIER</a>
              </div>
              </td>
            <td>

              <div class="button">
                <a href="#" class="myButton" v-on:click="supprimer(team.idTeam)">SUPPRIMER</a>
              </div>

            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br>
    </body>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ListeOfTeams",
  data() {
    return {
      teams: [],
      url: "http://localhost:8080/api/teams",
      newTeams: {
        nom: "none",
        pays: "none",
        stade: "none"
      }
    };
  },
  methods: {
    get_teams() {
      axios
          .get("http://localhost:8080/api/teams")
          .then(response => {
            this.teams = response.data.teams;
            console.log(this.teams);
          })
          .catch(error => {
            console.log(error);
          });
    },
    supprimer : function(index) {
      console.log("DANS METHODE DELETE APRES CLICK");
      axios
          .delete("http://localhost:8080/api/teams/"+index)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: 'ListeOfTeams'});
          })
          .catch(error => {
            console.log(error);
          });
    },
    modifier : function(index) {
      console.log("DANS METHODE MODFIER APRES CLICK:"+index);
      this.$router.push({ name: 'EditTeams', params: { team: index }});
    }
  },
  mounted() {
    this.get_teams();
  }
}
</script>

