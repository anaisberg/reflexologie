<template>
<div>
  <div class="tokyo_tm_home">
    <div class="home_content">
      <div class="avatar">
        <div
          class="image avatar_img"
          :style="{ backgroundImage: 'url(' + src1 + ')' }"
        ></div>
      </div>
      <!-- End .avatar -->
      <div class="details">
        <h3 class="name">Simone Marck</h3>
        <p class="job">
          Réflexologue plantaire, praticienne du massage Hakim, relaxologue.
        </p>
      </div>
      <!-- End .details -->
    </div>
  </div>
  <div class="home_details">
    <h3 class="article_subtitle">
      Qui suis-je ?              
    </h3>
    <p>
      Praticienne de réflexologie plantaire depuis 2011, je me suis formée pendant 2 ans avec l'école ERVE puis
      spécialisée en Médecine Traditionnelle Chinoise auprès de Mireille Meunier en 2017.
    </p>
    <p>
      Praticienne de Massage Hakim depuis 2015, formée à la Libre Université du Samadeva.
    </p>
    <p>
      Relaxologue depuis 2014, formée par Pascal Cathiard.
    </p>
    <p>
      Infirmière de Santé du Travail, je travaille spécialement dans le domaine de la
      prévention et je porte un intérêt particulier à l'approche holistique de la personne.
    </p>
    <p>
      J'exerce mes activités dans le cadre d'auto-entrepreneur à mon domicile,
      ou chez la personne lorsqu'elle ne peut se déplacer.
    </p>
  </div>
</div>
  
  
</template>

<script>
  export default {
    data() {
      return {
        src1: require("../assets/img/simone1.jpg"),
      };
    },
  };
</script>

<style lang="scss"></style>
