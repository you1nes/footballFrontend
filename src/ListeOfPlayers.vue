<template>
  <div id="ListeOfPlayers">
    <body>
    <div class="container" id="ListeOfPlayers">
      <br />

      <div class="main">
        <div class="title">
          <h2>Tableau de joueur </h2>
        </div>
        <table class="table table-bordered table-dark">
          <thead>
          <tr>
            <th scope="col">Nom du player</th>
            <th scope="col">Prenom du player</th>
            <th scope="col"> Age du player </th>
            <th>nationalité </th>
            <th>équipe</th>
          </tr>
          </thead>
          <tbody>

          <tr v-for="(player) in players" :key="player.idPlayer">
            <td>
              {{ player.nom }}
            </td>
            <td>
              {{ player.prenom }}
            </td>
            <td>
              {{ player.age }}
            </td>
            <td>
              {{ player.nationality }}
            </td>
            <span

              v-for="team in teams" :key="team.idTeam"
              v-bind:value="'' + team.idTeam">


              <td v-if="player.idTeam===team.idTeam">
                {{team.nom}}</td>

            </span>
              <td>
              <div class="button">
                <a href="#" class="myButon" v-on:click="modifier(player.idPlayer)">MODIFIER</a>
              </div>
              </td>
            <td>

              <div class="button">
                <a href="#" class="myButton" v-on:click="supprimer(player.idPlayer)">SUPPRIMER</a>
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
  name: "ListeOfPlayers",
  data() {
    return {
      players: [],
      teams: [],

      url: "http://localhost:8080/api/players",
      newPlayer: {
        nom: "none",
        prenom: "none",
        age: 0,
        nationality: "none",
        image: "none"

      }
    };
  },
  methods: {
    get_players() {
      axios
          .get("http://localhost:8080/api/players")
          .then(response => {
            this.players = response.data.players;
            console.log(this.players);
          })
          .catch(error => {
            console.log(error);
          });
    },
    get_teams() {
      axios
          .get("http://localhost:8080/api/teams")
          .then(response => {
            console.log("DANS METHODE DES TEAMS");
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
          .delete("http://localhost:8080/api/players/"+index)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: 'ListeOfPlayers'});
          })
          .catch(error => {
            console.log(error);
          });
    },
    modifier : function(index) {
      console.log("DANS METHODE MODFIER APRES CLICK:"+index);
      this.$router.push({ name: 'EditPlayers', params: { play: index }});
    }
  },
  mounted() {
    this.get_players();
    this.get_teams()

  }
}
</script>

