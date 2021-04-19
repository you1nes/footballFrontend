
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
      <h1 class="xlarge-font"><b>Le meilleur site d'information sur le football</b></h1>
      <h1 class="large-font" style="color:#D83A7F;"><b>Qui sommes-nous ?</b></h1>
      <p><span style="font-size:36px">Vous etes joueur ? </span> Le football reste le sport le plus pratiqué à travers le monde et en Belgique. Pour tous les passionnés de ce sport, voici le l'un des meilleurs sites sur le football mondial, européen et belge. Découvrez le sites officiel recommandés par des grandes fédérations, par tous les sites d'actualités du mercato, les boutiques en ligne pour acheter vos maillots et accessoires de foot ainsi que les sites de fans et forum des divers sites parlant de football.

        .</p>

    </div>
    <div class="column-33">
      <img src="./img/equipe.png" width="335" height="471">
    </div>
  </div>
</div>

<!-- Clarity Section -->
<div class="container" style="background-color:#f1f1f1">
  <div class="row">
    <div class="column-33">
      <img src="./img/psg.png" alt="App" width="335" height="471">
    </div>
    <div class="column-66">
      <h1 class="xlarge-font"><b>PSG</b></h1>
      <h1 class="large-font" style="color:#D83A7F;"><b> La meilleur équipe du foot francais</b></h1>
      <p><span style="font-size:24px">Une revolution.</span>  Le Paris Saint-Germain Football Club, couramment abrégé PSG, est un club de football français, basé à Saint-Germain-en-Laye et à Paris. C'est la section football du Paris Saint-Germain omnisports. Il est présent en première division du Championnat de France en 1971/1972 et depuis 1974. Il s'entraîne au Camp des Loges à Saint-Germain-en-Laye et joue au Parc des Princes à Paris.</p>
      <button class="button" style="background-color:#D83A7F" router-link to="/psgf" routerLinkActive="active-link">Plus d'infos sur le club</button>
    </div>
  </div>
</div>

<!-- The App Section -->
<div class="container">
  <div class="row">
    <div class="column-66">
      <h1 class="xlarge-font"><b>RESTAURANTS & BARS
      </b></h1>
      <h1 class="large-font" style="color:#D83A7F;"><b>Ouvert 24h/24</b></h1>
      <p><span style="font-size:36px"></span> Bruxelles est qualifiée à juste titre de capitale gastronomique. Savourez des plats régionaux et une sélection de classiques internationaux revisités par notre chef et accordés à des vins prestigieux. Notre Loui Bar vous accueille tous les jours jusqu’à minuit et propose des cocktails signature dans une atmosphère luxueuse.

      </p>
    </div>
    <div class="column-33">
      <img src="./img/wallpaper.png" width="335" height="471" >
    </div>
  </div>
</div>


</div>
</body>
</div>
</template>


<script>
export default {
  name: "realMadridPage",
}

</script>
