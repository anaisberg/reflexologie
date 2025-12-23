<template>
  <div class="description">
      <h3 class="question">{{ question }}</h3>
      <div class="answer_inner">
            {{ answer1 }}
      </div> 
      <div v-if="answer2" class="answer_inner">
            {{ answer2 }}
      </div> 
      <div v-if="answer3" class="answer_inner">
            {{ answer3 }}
      </div> 
      <div v-if="answer4" class="answer_inner">
            {{ answer4 }}
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
        answer1: String,
        answer2: String,
        answer3: String,
        answer4: String,
    },
  };
</script>

<style lang="scss" scoped></style>