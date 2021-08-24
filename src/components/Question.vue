<template>
  <div class="description">
      <h3 class="question">{{ question }}</h3>
      <div class="answer_inner">
            {{ answer }}
      </div> 
    </div>
</template>

<script>
  export default {
    data() {
      return {
        socialList: [
        ],
      };
    },
    props: {
        question: String,
        answer: String,
    },
  };
</script>

<style lang="scss" scoped></style>