<template>
  <div class="tokyo_tm_news">
    <div class="article_title">
      <div class="title_flex">
        <div class="left">
          <span>Massage SHIROTCHAMPI</span>
        </div>
      </div>
    </div>

    <div class="tokyo_tm_modalbox_news">
      <div class="details">
        <div class="extra"></div>
        <h3 class="title">
          Le massage Shirotchampi, l'apaisement et la revitalisation…               
        </h3>
      </div>
      <!-- END DETAILS -->
  
      <div class="main_content ">
        <div class="descriptions">
          <p>
            Issu de la tradition indienne, le massage <b>Shirotchampi</b> est un soin ayurvédique. 
            C'est une technique holistique (qui traite le corps, l'esprit et l'âme, indissociables).
          </p>
          <p>
            Il est ciblé essentiellement sur la <b>tête, la nuque et les épaules</b>. 
            C'est un massage apprécié pour son effet apaisant sur le système nerveux ; 
            il aide à <b>réduire le stress mental, améliorer la concentration</b> et <b>favoriser le sommeil</b>. 
            Il est accessible à tous.
          </p>
          <p>
            C'est un massage qui combine digitopression, frictions, étirements et percussions. 
            Il relance l'énergie, dynamise et stimule les fonctions naturelles du corps.
          </p>
          <p>
            Une huile végétale tiède sera utilisée (souvent de l'huile de coco, ou autre selon vos préférences).
          </p>

          <div class="split_row">
            <div class="split_left">
              <div class="image">
                <img src="../assets/img/shirotchampi.jpg" alt="elephant statue" />
                <p class="image_legend">
                  Photo by 
                  <a href="https://unsplash.com/@jaspindersingh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jaspinder Singh</a> on 
                  <a href="https://unsplash.com/photos/a-statue-of-an-elephant-with-people-on-it-XTCCG3Pew5U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </p>
              </div>
            </div>
            <div class="split_right">
              <p class="subtitle">Physiquement on peut observer :</p>
              <p>Un soulagement des <i>tensions cervicales et des trapèzes</i></p>
              <p>Une détente des <i>muscles du visage, de la mâchoire et du cuir chevelu</i></p>
              <p>Une stimulation de la <i>circulation sanguine</i> au niveau de la tête</p>

              <p class="subtitle">Mentalement et énergétiquement on observera :</p>
              <p>Une accalmie du <i>stress, de l'anxiété et de la surcharge mentale</i></p>
              <p>Une amélioration du <i>sommeil, de la concentration et de la mémoire</i></p>
              <p>Une <i>sensation d'espace et de clarté intérieure</i></p>
              <p>Un état de <i>détente profonde</i> en quelques minutes</p>
            </div>
          </div>
        
          <!-- END QUOTEBOX -->
          <div class="footer">
            <div class="details"><div class="extra"></div></div>
            <p>Par Simone Marck</p>
          </div>
        </div>
        <!-- END DESCRIPTION -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.split_row {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  margin-top: 24px;
}

.split_left {
  align-self: center;
  flex: 0 0 50%;
}

.split_right {
  flex: 1 1 50%;
}

.descriptions > .split_row > .split_right > p {
  margin-bottom: 0;
}

.subtitle {
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
}

.image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.image_legend {
  font-size: 0.85em;
  color: #777;
  margin-top: 8px;
}

@media (max-width: 768px) {
  .split_row {
    flex-direction: column;
  }
  .split_left,
  .split_right {
    flex: 1 1 auto;
  }
}
</style>

