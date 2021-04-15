

<template>
  <div id="realMadridPage">
    <body>
    <div class="container" id="realMadridPage">
      <br />

      <div class="main">
        <div class="title">
          <h2>Listing </h2>
        </div>
        <table class="table table-fixed">
          <thead>
          <tr>
            <th>Nom du player</th>
            <th>Prenom du player</th>
            <th>Age du player </th>
            <th>nationalité </th>
            <th>image</th>
          </tr>
          </thead>
          <tbody v-for="(player) in players" :key="player.idPlayer">

            <tr v-if="player.idTeam==2">
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
            <td>
              {{ player.image }}
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
  name: "realMadridPage",
  data() {
    return {
      players: [],
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


  },
  mounted() {
    this.get_players();
  }
}
</script>
