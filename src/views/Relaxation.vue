<template>
  <div class="tokyo_tm_news">
    <div class="article_title">
      <div class="title_flex">
        <div class="left">
          <span>Relaxation</span>
          <!-- <h3>Latest News</h3> -->
        </div>
      </div>
    </div>
      <div class="tokyo_tm_modalbox_news">
      <div class="details">
        <div class="extra"></div>
        <h3 class="title">
          Séance de relaxation                
        </h3>
      </div>
      <!-- END DETAILS -->
  
      <div class="main_content ">
        <div class="descriptions">
          <p>
            La relaxation est à la fois un état et une méthode qui consiste à se libérer des tensions physiques <u>et</u> 
            psychiques.
          </p>         
          <p>
            Concrêtement cela se passe de la manière suivante :
            <br/>- La personne est installée confortablement (ambiance calme)
            <br/>- elle va suivre les indications données verbalement
            <br/>- apprentissage ou exercices avec la respiration
            <br/> -ressentir son corps, prendre conscience de soi
            <br/>- exercices de visualisation pour amner le changement
          </p>
          <div class="quotebox">
            <div class="icon"><img class="svg" src="../assets/img/svg/quote.svg" alt="tumb" /></div>
            <p>Comme tu diriges ton souffle, tu diriges ta vie <br/>- Proverbe indien</p>
          </div>
          <div class="image">
            <img src="../assets/img/spine2.jpg" alt="tumb" />
            <p class="image_legend">
              Photo by 
              <a href="https://unsplash.com/@moonshadowpress?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joyce McCown</a> on 
              <a href="https://unsplash.com/s/photos/chiropractor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </p>
          </div>
          <div class="quotebox">
            <div class="icon"><img class="svg" src="../assets/img/svg/quote.svg" alt="tumb" /></div>
            <p>La plus importante et la plus négligée de toutes les conversations,
              c'est l'entretien avec soi-même <br/>-Chancelier Ovenstiern</p>
          </div>
          <p>
            Cette méthode permet de diminuer ou de supprimer des troubles d'origine psychologique ou physiologiques.
            Cette technique améliore la quilité de vie. 
          </p>
          <!-- END QUOTEBOX -->
          <div class="footer">
            <p>Par Simone Marck</p>
          </div>
        </div>
        <!-- END DESCRIPTION -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      src1: require("../assets/img/news/1.jpg"),
      src2: require("../assets/img/news/2.jpg"),
      src3: require("../assets/img/news/3.jpg"),
      src4: require("../assets/img/news/4.jpg"),
      popup1: require("../assets/img/news/1.jpg"),
      popup2: require("../assets/img/news/2.jpg"),
      popup3: require("../assets/img/news/3.jpg"),
      popup4: require("../assets/img/news/4.jpg"),

      isVisible: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
    };
  },
  methods: {
    showModal: function() {
      this.isActive = true;
      this.isVisible = true;
    },
    showModal2: function() {
      this.isActive2 = true;
      this.isVisible2 = true;
    },
    showModal3: function() {
      this.isActive3 = true;
      this.isVisible3 = true;
    },
    showModal4: function() {
      this.isActive4 = true;
      this.isVisible4 = true;
    },
    closeModal: function() {
      this.isActive = false;
      this.isVisible = false;
    },
    closeModal2: function() {
      this.isActive2 = false;
      this.isVisible2 = false;
    },
    closeModal3: function() {
      this.isActive3 = false;
      this.isVisible3 = false;
    },
    closeModal4: function() {
      this.isActive4 = false;
      this.isVisible4 = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
