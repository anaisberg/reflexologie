<template>
  <div class="tokyo_tm_news">
    <div class="tokyo_tm_title">
      <div class="title_flex">
        <div class="left">
          <span>Massage Hakim</span>
          <!-- <h3>Latest News</h3> -->
        </div>
      </div>
    </div>

    <div class="tokyo_tm_modalbox_news">
      <div class="image">
        <img src="../assets/img/thumbs/4-3.jpg" alt="tumb" />
        <div class="main" :style="{ backgroundImage: 'url(' + popup1 + ')' }"></div>
      </div>
      <!-- END IMAGE-->
  
      <div class="details">
        <div class="extra">
          <p class="date">
            Par <a href="#">Simone Marck</a>
          </p>
        </div>
        <h3 class="title">
          Les grandes lignes                 
        </h3>
      </div>
      <!-- END DETAILS -->
  
      <div class="main_content ">
        <div class="descriptions">
          <p class="bigger">
            Le massage Hakim calme les douleurs aiguës ou chroniques siégeant au niveau de votre dos.
            Cette technique manuelle est réalisable à tous les âges de la vie.
          </p>
          <p class="bigger">
          </p>
          <p>
          </p>
      
          <div class="quotebox">
            <div class="icon"><img class="svg" src="../assets/img/svg/quote.svg" alt="tumb" /></div>
            <p>Les citations de médecins vont ici</p>
          </div>
          <!-- END QUOTEBOX -->
                      
          <p>
            Pretend everything is new and that you haven’t seen it
          </p>
          <p>
            Pretend everything is new and that you haven’t seen it
          </p>               
        </div>
        <!-- END DESCRIPTION -->
      </div>
    </div>
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
