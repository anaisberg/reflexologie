<template>
  <div>
    <!-- Start leftpart -->
    <div class="leftpart">
      <div class="leftpart_inner">
        <div class="logo">
          <router-link to="/"
            ></router-link>
        </div>
        <!-- End .logo -->
        <div class="menu">
          <a
            v-on:click="activetab = 1"
            :class="[activetab === 1 ? 'active' : '']"
          >
            <img
              class="svg"
              src="../assets/img/svg/home-run.svg"
              alt="homerun"
            />
            <span class="menu_content">Accueil</span></a
          >
          <!-- End Home -->
          <a
            v-on:click="activetab = 2"
            :class="[activetab === 2 ? 'active' : '']"
          >
            <img
              class="svg"
              src="../assets/img/svg/foot.png"
              alt="briefcase"
            />
            <span class="menu_content">Réflexologie plantaire</span></a
          >
          <!-- End Reflexologie -->
          <a
            v-on:click="activetab = 3"
            :class="[activetab === 3 ? 'active' : '']"
          >
            <img
              class="svg"
              src="../assets/img/svg/back.png"
              alt="briefcase"
            />
            <span class="menu_content">Massage Hakim</span></a
          >
          <!-- End Hakim -->
          <a
            v-on:click="activetab = 4"
            :class="[activetab === 4 ? 'active' : '']"
          >
            <img
              class="svg"
              src="../assets/img/svg/relaxation.png"
              alt="briefcase"
            />
            <span class="menu_content">Relaxation</span></a
          >
          <!-- End Relaxation -->
          <a
            v-on:click="activetab = 5"
            :class="[activetab === 5 ? 'active' : '']"
          >
            <img class="svg" src="../assets/img/svg/question.svg" alt="avatar" />
            <span class="menu_content">Questions - Réponses</span></a
          >
          <!-- End Answers -->
          <a
            v-on:click="activetab = 6"
            :class="[activetab === 6 ? 'active' : '']"
          >
            <img class="svg" src="../assets/img/svg/mail.svg" alt="mail" />
            <span class="menu_content">Contactez-moi</span></a
          >
          <!-- End Contact -->
        </div>
        <div class="copyright">
          <p>
            &copy; {{ new Date().getFullYear() }} Simone Marck
            <br />2 rue de la Trinité, 
            <br />67190 Mutzig
            <br />06 13 37 64 66
          </p>
        </div>
        <!-- End copyright -->
      </div>
    </div>
    <!-- End leftpart -->

    <!-- Start rightpart -->
    <div class="rightpart">
      <div class="rightpart_in">
        <div class="tokyo_tm_section">
          <div class="container">
            <div v-if="activetab === 1" class="tabcontent">
              <Home />
            </div>
            <!-- End Home tabcontent -->
            <div v-if="activetab === 2" class="tabcontent">
              <Reflexologie />
            </div>
            <!-- End Reflexologie tabcontent  -->
            <div v-if="activetab === 3" class="tabcontent">
              <Hakim />
            </div>
            <!-- End Hakim tabcontent  -->
            <div v-if="activetab === 4" class="tabcontent">
              <Relaxation />
            </div>
            <!-- End Relaxation tabcontent  -->
            <div v-if="activetab === 5" class="tabcontent">
              <FAQ />
            </div>
            <!-- End Answers tabcontent  -->
            <div v-if="activetab === 6" class="tabcontent">
              <Contact />
            </div>
            <!-- End Contact tabcontent -->
          </div>
        </div>
      </div>
    </div>
    <!-- End rightpart -->
  </div>
</template>

<script>
  import Contact from "../views/Contact";
  import Home from "../views/Home";
  import FAQ from "../views/FAQ";
  import Hakim from "../views/Hakim";
  import Reflexologie from "../views/Reflexologie";
  import Relaxation from "../views/Relaxation";
  export default {
    components: {
      FAQ,
      Home,
      Hakim,
      Reflexologie,
      Relaxation,
      Contact,
    },
    data() {
      return {
        activetab: 1,
      };
    },
  };
</script>

<style lang="scss" scoped></style>
