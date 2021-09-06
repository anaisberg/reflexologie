<template>
  <div class="tokyo_tm_portfolio">
    <div class="article_title">
      <div class="title_flex">
        <div class="left">
          <span>en images</span>
        </div>
        <!-- End Left -->
      </div>
    </div>
    <!-- End tokyo_tm_title -->

    <div v-if="activetab === 1" class="tabcontent">
      <ul class="portfolio_list">
        <CoolLightBox :items="allItems" :index="index" @close="index = null">
        </CoolLightBox>
        <li
          v-for="(image, imageIndex) in allItems"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <div class="inner">
            <div class="entry tokyo_tm_portfolio_animation_wrap">
              <img class="image" :src="image.thumb" alt="Portfolio" />
            </div>
          </div>
        </li>
        <!-- End li -->
      </ul>
      <!-- End .portfolio_list -->
    </div>
    <!-- End .tabcontent 1 -->

    <div v-if="activetab === 2" class="tabcontent">
      <ul class="portfolio_list">
        <CoolLightBox :items="vimeoItems" :index="index" @close="index = null">
        </CoolLightBox>
        <li
          v-for="(image, imageIndex) in vimeoItems"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <div class="inner">
            <div class="entry tokyo_tm_portfolio_animation_wrap">
              <img class="image" :src="image.thumb" alt="Portfolio" />
            </div>
          </div>
        </li>
        <!-- End li -->
      </ul>
      <!-- End .portfolio_list -->
    </div>
    <!-- End .tabcontent 2 -->

    <div v-if="activetab === 3" class="tabcontent">
      <ul class="portfolio_list">
        <CoolLightBox
          :items="youtubeItems"
          :index="index"
          @close="index = null"
        >
        </CoolLightBox>
        <li
          v-for="(image, imageIndex) in youtubeItems"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <div class="inner">
            <div class="entry tokyo_tm_portfolio_animation_wrap">
              <img class="image" :src="image.thumb" alt="Portfolio" />
            </div>
          </div>
        </li>
        <!-- End li -->
      </ul>
      <!-- End .portfolio_list -->
    </div>
    <!-- End .tabcontent 3 -->

    <div v-if="activetab === 4" class="tabcontent">
      <ul class="portfolio_list">
        <CoolLightBox :items="mixItems" :index="index" @close="index = null">
        </CoolLightBox>
        <li
          v-for="(image, imageIndex) in mixItems"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <div class="inner">
            <div class="entry tokyo_tm_portfolio_animation_wrap">
              <img class="image" :src="image.thumb" alt="Portfolio" />
            </div>
          </div>
        </li>
        <!-- End li -->
      </ul>
      <!-- End .portfolio_list -->
    </div>
    <!-- End .tabcontent 4 -->

    <div v-if="activetab === 5" class="tabcontent">
      <ul class="portfolio_list">
        <CoolLightBox
          :items="galleryItems"
          :index="index"
          @close="index = null"
        >
        </CoolLightBox>

        <li
          v-for="(image, imageIndex) in galleryItems"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <div class="inner">
            <div class="entry tokyo_tm_portfolio_animation_wrap">
              <img class="image" :src="image.thumb" alt="Portfolio" />
            </div>
          </div>
        </li>
        <!-- End li -->
      </ul>
      <!-- End .portfolio_list -->
    </div>
    <!-- End .tabcontent 5 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activetab: 1,
        allItems: [
          {
            src: "../assets/img/portfolio/ext.jpeg",
            thumb: require("../assets/img/portfolio/ext.jpeg"),
          },
          {
            src: require("../assets/img/portfolio/int.jpeg"),
            thumb: require("../assets/img/portfolio/int.jpeg"),
          },
          {
            thumb: require("../assets/img/portfolio/gallet.jpg"),
          },
          {
            src: "../assets/img/portfolio/gouttes.jpg",
            thumb: require("../assets/img/portfolio/gouttes.jpg"),
          },
        ],
        index: null,
      };
    },
  };
</script>

<style lang="scss" scoped></style>
