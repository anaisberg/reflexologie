<template>
  <div class="tokyo_tm_news">
    <div class="article_title">
      <div class="title_flex">
        <div class="left">
          <span>Réflexologie plantaire</span>
          <!-- <h3>Latest News</h3> -->
        </div>
      </div>
    </div>
    <!-- END TITLE -->
    <div class="tokyo_tm_modalbox_news">
      
      <div class="main_content ">
        <div class="descriptions"> 
          <p>
            La réflexologie plantaire soulage vos douleurs, vos tensions, votre stress et rééquilibre votre corps.
            Elle vous prépare au changement de saison, à vous calmer en période d'examens et aide l'organisme 
            à se débarasser des toxines.
          </p>
          <p>
            La réflexologie s'intéresse aux points réflexes situés sur les pieds et permet de rééquilibrer les fonctions
            qui le nécessitent, de se renforcer avec l'avancée des séances par homéostasie.
          </p>
          <div  v-bind:style="{'text-align': 'center'}" class="article_image">
            <img src="../assets/img/portfolio/ext.jpeg" alt="thumb" />
          </div>
          <h3 class="article_subtitle">
            Déroulement d'une séance          
          </h3>  
          <p>
            La séance se déroule dans un environnement calme, la pièce dégage un aspect simple et la nature 
            y est une invitée de choix. 
          </p>
          <p>
            Vous serez installé en position demi-assise et les pieds nus en face des mains de la réflexologue.
            Après l'application d'une huile, la séance va se poursuivre par des actions diverses et des 
            échanges d'informations auront lieu tout au long des 45 minutes nécessaires.
          </p>
          <p>
            Après la séance, il faudra boire plusieurs grands verres d'eau pour atteindre 1 litre dans 
            les 2 heures qui suivent.
          </p>
             
          <h3 class="article_subtitle">
            Une technique qui remonte à la nuit des temps          
          </h3>  
          <p>
            En Egypte, en 2230 avant JC., dans la nécropole de Saqqarah, on observe une fresque sur le tombeau d'Ankhamahor.
            En Inde, des cartographies plantaires et des pieds de Vishnu et de Bouddha. En Chine, le traité de 
            médecine chinoise de l'époque mentionne le Nei Ching qui décrit des actions au niveau des pieds. 
            Les descendants des Indiens d'Amérique du Nord témoignant de ces pratiques réflexologiques.
          </p>
          <div  v-bind:style="{'text-align': 'center'}" class="article_image">
            <img src="../assets/img/hist1.jpg" alt="thumb" />
          </div>
          <p>
            Docteur William Fitzgerald, Eunice Ingham, Henry Head et Alfons Cornelius sont tous des pionniers qui 
            ont remis ces techniques en avant. D'autres groupes d'études en médecine manuelle et réflexe se sont 
            créés plus tard et des recherches sont toujours en cours.
          </p>
          <div class="quotebox">
            <div class="icon"><img class="svg" src="../assets/img/svg/quote.svg" alt="tumb" /></div>
            <p>Les citations de médecins vont ici</p>
          </div>
          <!-- END QUOTEBOX --> 
          <p>
            En France, docteur Philippe Malafosse a fait un travail remarquable et décrit dans son livre "Grand 
            Manuel de la réfléxothérapie" l'interconnection entre le système nerveux, la peau et les phanères 
            (cheveux, poils et ongles)
          </p>  
        </div>
        <!-- END DESCRIPTION --> 
        <div class="footer">
          <p>Par Simone Marck</p>
        </div>                  
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
