<template>
  <div class="tokyo_tm_news">
    <div class="tokyo_tm_title">
      <div class="title_flex">
        <div class="left">
          <span>Réflexologie plantaire</span>
          <!-- <h3>Latest News</h3> -->
        </div>
      </div>
    </div>
    <!-- END TITLE -->
    <div class="tokyo_tm_modalbox_news">

      <div class="details"><div class="extra"></div></div>
      <!-- END DETAILS -->
      
      <div class="main_content ">
        <div class="descriptions">
          <ul class="tokyo_tm_news_inner">
            <!-- image -->
            <li>
            <div class="list_inner">
              <div class="image">
                <img src="../assets/img/portfolio/babyFeet.jpg" alt="thumb" />
              </div>
            </div>
            </li>
            <!-- text next to image -->
            <li>
              <p class="bigger">
                La réflexologie plantaire soulage vos douleurs, vos tensions, votre stress et rééquilibre votre corps.
                Elle vous prépare au changement de saison, à vous calmer en période d'examens et aide l'organisme 
                à se débarasser des toxines.
              </p>
              <p class="bigger">
                La réflexologie s'intéresse aux points réflexes situés sur les pieds et permet de rééquilibrer les fonctions
                qui le nécessitent, de se renforcer avec l'avancée des séances par homéostasie.
              </p>
            </li>  
    
          </ul>
          <!-- description below image -->
        </div>
        <div class="descriptions"> 
          <div class="quotebox">
            <div class="icon"><img class="svg" src="../assets/img/svg/quote.svg" alt="tumb" /></div>
            <p>Les citations de médecins vont ici</p>
          </div>
          <!-- END QUOTEBOX -->      
          <p>
            Pretend everything is new and that you haven’t seen it frsegsergstrtrhzrsth
          </p>
          <div class="image">
                <img src="../assets/img/hist1.jpg" alt="thumb" />
              </div>
          <p>
            Pretend everything is new and that you haven’t seen it
          </p>       
        </div>
        <!-- END DESCRIPTION -->                   
      </div>
      <!-- END CONTENT -->
    </div>
    <!-- END ARTICLE TEXT -->
  </div>
</template>

<script>
export default {
  components: {
  },
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
