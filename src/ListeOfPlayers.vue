<template>
  <div id="ListeOfPlayers">
    <body>
    <div class="container" id="ListeOfPlayers">
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
          <tbody>
          <tr v-for="(player) in players">
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
              <td>
              <div class="button">
                <a href="#" class="myButon" v-on:click="modifier(player.idPlayer)">MODIFY</a>
              </div>
              </td>
            <td>

              <div class="button">
                <a href="#" class="myButton" v-on:click="supprimer(player.idPlayer)">DELETE</a>
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
  name: "Listing",
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
    supprimer : function(index) {
      console.log("DANS METHODE DELETE APRES CLICK");
      axios
          .delete("http://localhost:8080/api/players/"+index, index)
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
      this.$router.push({ name: 'edit', params: { play: index }});
    }
  },
  mounted() {
    this.get_players();
  }
}
</script>

<style>
table {
  border: 3px solid #6495ed;
  border-collapse: collapse;
  width: 90%;
  margin: auto;
}
thead,
tfoot {
  background-color: #d0e3fa;
  border: 1px solid #6495ed;
}
tbody {
  background-color: #ffffff;
  border: 1px solid #6495ed;
}
th {
  font-family: monospace;
  border: 1px dotted #6495ed;
  padding: 5px;
  background-color: #eff6ff;
  width: 25%;
}
td {
  font-family: sans-serif;
  font-size: 80%;
  border: 1px solid #6495ed;
  padding: 5px;
  text-align: left;
}
caption {
  font-family: sans-serif;
}
.myButton {
  box-shadow: 3px 4px 0px 0px #8a2a21;
  background:linear-gradient(to bottom, #c62d1f 5%, #f24437 100%);
  background-color:#c62d1f;
  border-radius:18px;
  border:1px solid #d02718;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:17px;
  padding:7px 25px;
  text-decoration:none;
  text-shadow:0px 1px 0px #810e05;
}
.myButon {
  box-shadow: 3px 4px 0px 0px #2811ac;
  background:linear-gradient(to bottom, #2811ac 5%, #2811ac 100%);
  background-color:#2811ac;
  border-radius:18px;
  border:1px solid #2811ac;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:17px;
  padding:7px 25px;
  text-decoration:none;
  text-shadow:0px 1px 0px #2811ac;
}
.myButton:hover {
  background:linear-gradient(to bottom, #f24437 5%, #c62d1f 100%);
  background-color:#f24437;
}
.myButton:active {
  position:relative;
  top:1px;
}
@media only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }
  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  tr {
    border: 3px solid #ccc;
  }
  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }
  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }
  td:nth-of-type(1):before {
    content: "Nom Animal";
    font-weight: bold;
  }
  td:nth-of-type(2):before {
    content: "Age Animal";
    font-weight: bold;
  }
  td:nth-of-type(3):before {
    content: "Poids Animal";
    font-weight: bold;
  }
  td:nth-of-type(4):before {
    content: "Regne Animal";
    font-weight: bold;
  }
  td:nth-of-type(5):before {
    content: "Provenance";
    font-weight: bold;
  }
  td:nth-of-type(6):before {
    content: "Espace Vital";
    font-weight: bold;
  }
  td:nth-of-type(7):before {
    content: "Nom propriétaire";
    font-weight: bold;
  }
  td:nth-of-type(8):before {
    content: "Modification";
    font-weight: bold;
  }
  td:nth-of-type(9):before {
    content: "Suppression";
    font-weight: bold;
  }
}
</style>
