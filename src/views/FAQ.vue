<template>
  <div class="FAQ">
    <div class="FAQ_title title_flex left">
      <span>FOIRE AUX QUESTIONS</span>
    </div>

    <Question
      :question="'Quels sont les tarifs pratiqués ?'"
      :answer1="'1 séance de réflexologie plantaire : 50€ '"
      :answer2="'1 massage Hakim : 40€'"
      :answer3="'1 massage Shirotchmapi : 50€'"
      :answer4="'1 séance de relaxation : 20€'"
    />
    <Question
      :question="'Les séances sont-elles remboursées ?'"
      :answer1="'Le remboursement des séances de réflexologie est possible selon votre mutuelle (voir votre contrat).'"
    />
    <Question
      :question="'Quelle est la durée d\'une séance ?'"
      :answer1="
        'Une séance de réflexologie dure 45 minutes,' +
        'auxquelles il faut ajouter le temps de faire connaissance et le temps de s\'installer.'
      "
      :answer2="'Massage Hakim : le massage dure environ 25 minutes.'"
      :answer3="'Massage Shirotchampi : le massage dure environ 1 heure.'"
      :answer4="'Relaxation : la séance varie entre 20 et 30 minutes.'"
    />
    <Question
      :question="'Peut-on offrir des séances ?'"
      :answer1="
        'Vous avez la possibilité de prendre des bons cadeaux, que vous pouvez offrir aux anniversaires, ' +
        'à la fête des mères... Pour faire plaisir et se faire plaisir'
      "
    />
    <Question
      :question="'Quels sont les produits utilisés ?'"
      :answer1="'Ce sont des huiles bio. Je prépare ma propre huile pour le massage Hakim'"
      :answer2="'En réflexologie, je fais usage d\'huiles différentes selon les besoins.'"
    />
  </div>
</template>

<script>
import Question from "../components/Question.vue";
export default {
  components: {
    Question,
  },
};
</script>

<style lang="scss"></style>
