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
          <router-link to="/" exact>
            <img
              class="svg"
              src="../assets/img/svg/home-run.svg"
              alt="homerun"
            />
            <span class="menu_content">Accueil</span>
          </router-link>
          <!-- End Home -->
          <router-link to="/reflexologie">
            <img
              class="svg"
              src="../assets/img/svg/foot.png"
              alt="foot"
            />
            <span class="menu_content">Réflexologie plantaire</span>
          </router-link>
          <!-- End Reflexologie -->
          <router-link to="/hakim">
            <img
              class="svg"
              src="../assets/img/svg/back.png"
              alt="back"
            />
            <span class="menu_content">Massage Hakim</span>
          </router-link>
          <!-- End Hakim -->
          <router-link to="/shirotchampi">
            <img
              class="svg"
              src="../assets/img/svg/elephant.svg"
              alt="elephant"
            />
            <span class="menu_content">Massage Shirotchampi</span>
          </router-link>
          <!-- End SHIROTCHAMPI -->
          <router-link to="/relaxation">
            <img
              class="svg"
              src="../assets/img/svg/relaxation.png"
              alt="yogi"
            />
            <span class="menu_content">Relaxation</span>
          </router-link>
          <!-- End Relaxation -->
          <router-link to="/faq">
            <img class="svg" src="../assets/img/svg/question.svg" alt="avatar" />
            <span class="menu_content">Questions - Réponses</span>
          </router-link>
          <!-- End Answers -->
          <router-link to="/contact">
            <img class="svg" src="../assets/img/svg/mail.svg" alt="mail" />
            <span class="menu_content">Contactez-moi</span>
          </router-link>
          <!-- End Contact -->
        </div>
        <div class="copyright">
          <p>
            &copy; {{ new Date().getFullYear() }} Simone Marck
            <br />2 rue de la Trinité, 
            <br />67190 Mutzig
            <br />06 13 37 64 66
          </p>
          <div class="menu">
            <router-link to="/credits">
              <span class="menu_content">Crédits</span>
            </router-link>
            <!-- End Credits -->
          </div>
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
            <router-view />
          </div>
        </div>
      </div>
    </div>
    <!-- End rightpart -->
  </div>
</template>

<script>
  export default {
  };

</script>

<style lang="scss" scoped></style>
