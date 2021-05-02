

<template>
  <div id="realMadridPage">
    <body>
    <div class="container" id="realMadridPage">
      <br />
      <img src="./img/realLogo.png" class="center" alt="..." style="width:500px;height:200px;" >

      <div class="main">
        <div class="title">
          <h2> joueur du REAL MADRID</h2>
        </div>
        <table class="table table-fixed">
          <thead>
          <tr>
            <th>Nom du player</th>
            <th>Prenom du player</th>
            <th>Age du player </th>
            <th>nationalité </th>
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


          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br>
    </body>
  </div>
</template>
<style>
* {
  box-sizing:border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  padding: 64px;
}

.row:after {
  content: "";
  display: table;
  clear: both
}

.column-66 {
  float: left;
  width: 66.66666%;
  padding: 20px;
}

.column-33 {
  float: left;
  width: 33.33333%;
  padding: 20px;
}

.large-font {
  font-size: 48px;
}

.xlarge-font {
  font-size: 64px
}

.button {
  border: none;
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4CAF50;
}

img {
  display: block;
  height: auto;
  max-width: 100%;
}

@media screen and (max-width: 1000px) {
  .column-66,
  .column-33 {
    width: 100%;
    text-align: center;
  }
  img {
    margin: auto;
  }
}
</style>

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
