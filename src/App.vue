<template>
  <div id="app">

    <div class="conteneur-flex">
      <div class="header">
        <!-- <a href="https://www.w3schools.com/" tabindex="2">W3Schools</a>
        <a href="http://www.google.com/" tabindex="1">Google</a>
        <a href="http://www.microsoft.com/" tabindex="3">Microsoft</a> -->


        <nav>
          <div class="navstrong">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/listeOfPlayers">Liste des players</router-link>
            </li>
            <li>
              <router-link to="/addPlayers">Ajouter DES players</router-link>
            </li>
            <li>
              <router-link to="/listeOfTeams">Liste des équipes</router-link>
            </li>
            <li>
              <router-link to="/addTeams">Ajouter des équipes</router-link>
            </li>

          </div>


        </nav>

      </div>
      <div id="overlay"></div>
      <div class="main-image">
        <h1>Le foot</h1>
      </div>
      <router-view></router-view>
    </div>
  </div>

</template>
<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>

* {
  box-sizing: border-box;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  z-index: 10;
}
*:last-child {
  margin-bottom: 0;
}
body {
  font-size: 16px;
  font-family: 'PT Sans', sans-serif;
}
.header {
  position: relative;
  display:flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 12px;
  position: relative;
  z-index: 100;
  background-color: white;
}
.header nav {
  display: none;
}

a {
  text-decoration: none;
  color: inherit;
}

#dropdown li {
  display: inline-block;
  width: 100%;
  margin: 20px 0 ;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1em;
}

#overlay {
  position: fixed;
  top: 0;
  left: -100%;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.911);
  z-index: 20;
  opacity: 0;
  transition: opacity 0.5s;
}
#overlay.onscreen {
  left:0;
  opacity: 1;
}

.sub-header a {
  width: 50%;
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: white;
  padding: 20px 0;
  font-size: 0.95em;
  font-family: 'Source Sans Pro', sans-serif;
}


.main-image {
  background-image: url(./img/wallpaper.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 320px;
  position: relative;
  margin-bottom: 17px;
}
.main-image h1 {
  color: #0037ff;
  text-transform: uppercase;
  font-weight: bolder;
  font-family: OpenSansRegular, Helvetica, Arial, sans-serif;
  font-size: 32px;
  position: absolute;
  bottom: 30;
  left: 20;
}

.main h2 {
  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
  font-size: x-large;
  color: rgb(20, 90, 99);
  font-family: OpenSansRegular, Helvetica, Arial, sans-serif;
}
.main .title:before {
  background: rgba(80,55,55,0.15);
  content: "";
  display: block;
  height: 6px;
  margin: 0 auto 15;
  width: 100px;
}
.main .title:after {
  background: rgba(80,55,55,0.15);
  content: "";
  display: block;
  height: 6px;
  margin: 15 auto 35;
  width: 190px;
}
.main h3 {
  font-size: 1.2em;
  font-weight: lighter;
  text-align: center;
  color: rgba(9, 2, 17, 0.938);
}

.grid-container h4 {
  text-align: center;
  text-transform: uppercase;
  margin-top: 10px;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  font-size: 1.2em;
}
.grid-container img {
  border-radius: 50px;
}

footer {
  background: rgb(43, 43, 43);
  text-transform: uppercase;
  font-weight: bold;
  color: #474747;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
footer p {
  margin-left: 30px;
}

footer p, .logos {
  padding: 40px 0 25px 0;
  font-size: 1.1em;
}

.logos img {
  height: auto;
  width: 25px;
  margin: 0 5px;
}
@media (min-width: 800px ) {
  #barmenu {
    display: none;
  }
  #logo {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.938);
    padding: 10 0;
    border: rgb(36, 36, 36) 1px solid;
  }
  .header {
    background-color: rgb(12, 55, 17);
  }
  #m-dropdown {
    display: none;
  }
  .search img {
    height: auto;
    height: auto;
    width: 15px;
    position: relative;
    right: 25px;
    top: 3px;
  }

  .search input {
    box-shadow: none;
    border-color: rgb(88, 88, 88);
    border-radius: 3px;
    height: 30px;
    line-height: 1;
    border: 1px solid #ccc;
    padding-left: 9px;
  }
  .header {
    justify-content: flex-end;
  }
  .header nav {
    display: flex;
    color: white;
    list-style-type: none;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.1em;
  }
  .header nav li {
    margin: 0 15px 0 0;
  }

  .navstrong {
    display: flex;
    color: white;
    list-style-type: none;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.1em;
    font-family: 'Oswald', cursive;
    padding-right: 10px;
    margin-bottom: 1.5px;
  }
  .navstrong li {
    padding: 5px 10px;
    margin: 0 0px 0 0 !important;
    transition: all 0.25s ease-in-out;
  }

  .button {
    padding: 10px 12px;
    border-radius: 7px;
    font-weight: bolder;
    transition: all 0.25s ease-in-out;
    background-color: #af4c6b;

  }
  .button1 {
    background-color: #534728;
  }
  .button2 {
    background-color: #285329;
  }
  .button:hover {
    background-color: rgb(49, 49, 49);
  }
  .navweak:hover {
    color: white;
    background-color: rgb(49, 49, 49);
  }
  .navstrong li:hover {
    background-color: white;
    color: rgb(255, 124, 144);
  }
  .main-image {
    background-position: center;
  }
  .main-image h1 {
    font-size: 3.5em;
    left: 40px;
    padding-right: 20px;
  }

  .grid-container a {
    text-align: center;
  }
  .grid-container h4 {
    font-size: 2em;
  }
}
@media (min-width: 1050px ) and (max-width: 1240px){
  .wrapper {
    width: 800px;
  }
  .grid-container h4 {
    font-size: 1.3em;
  }
  .grid-container {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        "item1 item2 item3"
        "item4 item5 item6"
        "item7 item8 item9 item10";
    grid-row-gap: 35px;
    grid-column-gap: 0;
  }
}
@media (min-width: 800px ) and (max-width: 1050px){
  .wrapper {
    width: 800px;
  }

  .header nav li {
    margin: 0 8px 0 0;
    font-size: 0.7em !important;
  }
  .navstrong {
    padding-right: 5px;
  }
  .navstrong li {
    padding: 5px 6px;
  }
  .search input {
    width: 70%;
  }
  .search {
    margin-right: -52px;
  }
  .grid-container {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        "item1 item2 item3"
        "item4 item5 item6";
    grid-row-gap: 35px;
    grid-column-gap: 0;
  }
  .grid-container h4 {
    font-size: 1.3em;
  }
}

@media (max-width: 800px ){
  .grid-contact-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        "item1"
        "item2";
    grid-template-rows: auto;
    justify-items: center;
  }
  .grid-contact-container img {
    width: 200px;
    height: auto;
    margin-bottom: 25px;
  }
  .grid-contact-container .form {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  input {
    font-size: 1.1em;
  }
}
@media (min-width: 801px ){
  .grid-contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "item1 item2";
    grid-template-rows: auto;
    justify-items: center;
  }
  .grid-contact-container img {
    width: 300px;
    height: auto;
  }
  .grid-contact-container .form {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
}
.grid-contact-container .form input, .grid-contact-container .form select {
  margin: 8px 0;
  width: 100%;
  background-color: rgb(133, 189, 205);
  border-style: none;
  border-radius: 10px;
  line-height: 2em;
  padding-left: 20px;
  font-family: 'Source Sans Pro', sans-serif;
  color: rgb(66, 66, 66);
  resize: none;
  outline: none;
  transition: all 0.15s ease-in-out;
}
.grid-contact-container .form input:focus, .grid-contact-container .form select:focus {
  background-color: rgb(30, 191, 202);
}
#submit {
  width: 50%;
  font-size: 1em;
  padding: 8px 20px 10px 20px;
  background-color: #3a2fa1;
  color: white;
  font-weight: bolder;
  border-radius: 10px;
  text-transform: uppercase;
  border-style: none;
  font-family: 'Source Sans Pro', sans-serif;
  transition: all 0.20s ease-in-out;
  margin-top: 20px;
}
#submit:hover {
  background-color: rgb(74, 69, 80);
}
.label {
  color: white;
  padding: 0.2px;
}

select {
  width: 20%;
  padding: 5px 5px;
  border: 2px solid #41097c;
  border-radius: 2px;
  background-color: #f1f1f1;
}

</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

