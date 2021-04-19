<template>
  <div id="EditPlayers">
    <div class="main">
      <div class="title">
        <h2>Modifier</h2>
        <div class="grid-contact-container">
          <img class="item1" src="./img/player.png" alt="player add pic" />
          <div class="form">
            <div class="form-group">
              <label class="control-label col-sm-2" for="nom">Nom player </label>
              <div class="col-sm-10">
                <input
                    type="text"
                    v-model="newPlayer.nom"
                    class="form-control"
                    name="nom"
                    id="nom"
                    placeholder="Entrez nom player"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="prenom">Prenom player </label>
              <div class="col-sm-10">
                <input
                    type="text"
                    v-model="newPlayer.prenom"
                    class="form-control"
                    name="prenom"
                    id="prenom"
                    placeholder="Entrez prenom du player"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="age">age player</label>
              <div class="col-sm-10">
                <input
                    type="text"
                    v-model="newPlayer.age"
                    class="form-control"
                    name="age"
                    id="age"
                    placeholder="Entrez l'age du player"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="nationality">nationalité du player</label>
              <div class="col-sm-10">
                <input
                    type="text"
                    v-model="newPlayer.nationality"
                    class="form-control"
                    name="nationality"
                    id="nationality"
                    placeholder="Entrez nationalité du player "
                />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="image">image du player</label>
              <div class="col-sm-10">
                <input
                    type="text"
                    v-model="newPlayer.image"
                    class="form-control"
                    name="image"
                    id="image"
                    placeholder="Entrez image du player "
                />
              </div>
            </div>

            <div class="form-group">
              <label>Equipe du joueur</label>

              <div class="col-sm-10">
                <select
                    v-validate="team"
                    v-model="newPlayer.idTeam"
                    class="form-control"
                >
                  <option
                      v-for="team in teams" :key="team.idTeam"
                      v-bind:value="'' + team.idTeam"
                  >{{ team.nom }}</option
                  >
                </select>
              </div>
            </div>
          <button id="submit" v-on:click="editPlayer">MODIFIER</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "EditPlayers",
  data() {
    return {
      teams: [],
      players: [],
      //url: 'http://localhost:8080/api/players',
      newPlayer: {
        nom: "none",
        prenom: "none",
        age: 0,
        nationality: 0,
        image:"none",
        idTeam: 0

      }
    };
  },
  methods: {
    get_players() {
      axios
          .get("http://localhost:8080/api/players")
          .then(response => {
            console.log(this.players);
            return response;
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

    editPlayer: function() {
      console.log("DANS METHODE EDIT APRES CLICK:" + this.lid);
      axios
          .put("http://localhost:8080/api/players/" + this.lid, this.newPlayer)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "listing" });
          })
          .catch(error => {
            console.log(error);
          });
    }
  },
  mounted() {
    this.get_players();
    this.get_teams();
  },
  created() {
    this.lid = this.$route.params.play;
  }
};
</script>

<style>
/* #add {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5bff33;
  margin-top: 60px;
}  */
</style>
