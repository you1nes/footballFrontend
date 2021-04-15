<template>
  <div id="Add">
    <div class="main">
      <div class="title">
        <h2>Inscrire Nouveau team</h2>
      </div>
      <div class="grid-contact-container">
        <img class="item1" src="./img/logo.png" alt="team add pic" />
        <div class="form">
          <div class="form-group">
            <label class="control-label col-sm-2" for="nom">Nom team </label>
            <div class="col-sm-10">
              <input
                  type="text"
                  v-model="newTeam.nom"
                  class="form-control"
                  name="nom"
                  id="nom"
                  placeholder="Entrez nom team"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="pays">Pays team </label>
            <div class="col-sm-10">
              <input
                  type="text"
                  v-model="newTeam.pays"
                  class="form-control"
                  name="pays"
                  id="pays"
                  placeholder="Entrez pays"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2" for="stade">stade de la team</label>
            <div class="col-sm-10">
              <input
                  type="text"
                  v-model="newTeam.stade"
                  class="form-control"
                  name="stade"
                  id="stade"
                  placeholder="Entrez stade "
              />
            </div>
          </div>




          <button id="submit" v-on:click="postTeam">AJOUTER</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddTeams",
  data() {
    return {
      teams: [],
      newTeam: {
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
            console.log("DANS METHODE DES TEAMS");
            this.teams = response.data.teams;
            console.log(this.teams);
          })
          .catch(error => {
            console.log(error);
          });
    },

    postTeam() {
      console.log("DANS METHODE POST APRES CLICK");
      axios
          .post("http://localhost:8080/api/teams", this.newTeam)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "ListeOfTeams" });
          })
          .catch(error => {
            console.log(error);
          });
    }
  },
  mounted() {
   this.get_teams();
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
