<template>
  <div class="tokyo_tm_news">
    <div class="article_title">
      <div class="title_flex">
        <div class="left">
          <span>Massage Hakim</span>
          <!-- <h3>Latest News</h3> -->
        </div>
      </div>
    </div>

    <div class="tokyo_tm_modalbox_news">
      <div class="details">
        <div class="extra"></div>
        <h3 class="title">
          Le massage Hakim du dos                
        </h3>
      </div>
      <!-- END DETAILS -->
  
      <div class="main_content ">
        <div class="descriptions">
          <p>
            Le massage Hakim calme les douleurs aiguës ou chroniques siégeant au niveau de votre dos.
            Cette technique manuelle est réalisable à tous les âges de la vie.
          </p>                  
          <p>
            En Allemagne, Autriche et Suisse, ce massage est nommé d'après le naturopathe BREUSS, 
            à qui nous devons de l'avoir simplifié tout en lui gardant son efficacité. 
          </p>
          <p>
            Il s'agit d'un massage dorsal énergétique, pratiqué depuis des millénaires dans les confréries 
            de guérisseurs Hakim du Moyen-Orient. Ce touché est rythmique et répétitif afin de mettre le corps 
            au diapason des rythmes naturels. 
            <br/>
            Il est à la fois puissant et doux.
          </p>
          <p>
            Le but du massage Hakim est de permettre aux organes et aux systèmes bloqués ou freinés dans 
            leurs fonctions de retrouver leur vitalité.
          </p>
          <div class="image">
            <img src="../assets/img/spine2.jpg" alt="tumb" />
            <p class="image_legend">
              Photo by 
              <a href="https://unsplash.com/@moonshadowpress?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joyce McCown</a> on 
              <a href="https://unsplash.com/s/photos/chiropractor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </p>
          </div>
          <p>
            Le praticien stimule et éveille les énergies et l'ensemble des systèmes. Cela engendre un effet 
            non seulement physique et énergétique mais également psychologique.
          </p>
          <p>
            Il s'agit de massages doux et énergiques qui conduisent non seulement à la régénération de la 
            colonne vertébrale et des disques inter-vertébraux, mais permettent également une amélioration 
            du fonctionnement de <b>tous</b> les organes du corps ainsi que la libération des tensions psychiques.
          </p>
          <p>
            Le massage étire la colonne vertébrale en douceur et libère les tensions physiques.
          </p>
          <div class="quotebox">
            <div class="icon"><img class="svg" src="../assets/img/svg/quote.svg" alt="tumb" /></div>
            <p>Les citations de médecins vont ici</p>
          </div>
          <p>
            Pour ce massage, j'utilise une huile au Millepertuis que je prépare moi-même, dont la base est une huile d'olive.
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
