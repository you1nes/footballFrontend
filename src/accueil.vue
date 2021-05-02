
<template>

<div id="accueil">
<body>
<div class="container" id="accueil">

<div style="text-align:center">

</div>

<!-- The App Section -->


<div class="container" Style="background-color:#f1f1f1">
  <div class="row">
    <div class="column-66">
    </div>
      <h1 class="xlarge-font"><b>Le meilleur site d'information sur le football</b></h1>
      <h1 class="large-font" style="color:#475ecd;"><b>Qui sommes-nous ?</b></h1>
      <p><span style="font-size:36px">Vous etes joueur ? </span> Le football reste le sport le plus pratiqué à travers le monde et en Belgique. Pour tous les passionnés de ce sport, voici le l'un des meilleurs sites sur le football mondial, européen et belge. Découvrez le sites officiel recommandés par des grandes fédérations, par tous les sites d'actualités du mercato, les boutiques en ligne pour acheter vos maillots et accessoires de foot ainsi que les sites de fans et forum des divers sites parlant de football.

        .</p>




  </div>
</div>

<!-- Clarity Section -->
<div class="container" style="background-color:#f1f1f1">
  <div class="row">
    <div class="column-33">
      <img src="./img/scorePSG.png" class="center" alt="..." style="width:400px;height:400px;" >

    </div>
    <div class="column-66">
      <h1 class="xlarge-font"><b>PSG</b></h1>
      <h1 class="large-font" style="color:#3a79d8;"><b> La meilleur équipe du foot francais</b></h1>
      <p><span style="font-size:24px">Une revolution.</span>  Le Paris Saint-Germain Football Club, couramment abrégé PSG, est un club de football français, basé à Saint-Germain-en-Laye et à Paris. C'est la section football du Paris Saint-Germain omnisports. Il est présent en première division du Championnat de France en 1971/1972 et depuis 1974. Il s'entraîne au Camp des Loges à Saint-Germain-en-Laye et joue au Parc des Princes à Paris.</p>
      <img src="./img/clubPSG.png" class="center" alt="..." style="width:500px;height:400px;" >



      <router-link to="/psg" style="background-color:#d8d53a" >Voir les joueurs</router-link>
    </div>
  </div>
</div>

<!-- The App Section -->
<div class="container">
  <div class="row">
    <div class="column-66">
      <h1 class="xlarge-font"><b>REAL MADRID
      </b></h1>
      <h1 class="large-font" style="color:#D83A7F;"><b>Historia que tú hiciste
        Historia por hacer
        Porque nadie resiste</b></h1>
      <p><span style="font-size:36px"></span> Le Real Madrid Club de Fútbol, plus connu sous le nom de Real Madrid ou simplement Real, est un club professionnel espagnol de football, basé à Madrid. Vainqueur de très nombreux titres nationaux et internationaux, il a reçu de la Fédération internationale de football association (FIFA) le titre honorifique de plus grand club du xxe siècle.

      </p>
    </div>
    <div class="column-33">
      <img src="./img/realLogo.png" class="center" alt="..." style="width:700px;height:400px;" >
    </div>
  </div>
  <img src="./img/real.png" class="center" alt="..." style="width:800px;height:350px;" >
  <router-link to="/real"  style="background-color:#d8d53a" >Voir les joueurs</router-link>

</div>


</div>
</body>
</div>
</template>


<script>
export default {
  name: "home",

  methods: {
    psg() {
      this.$router.push('psgPage');

    }
  }

}

</script>

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
  background-color: #50ae7a;
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
