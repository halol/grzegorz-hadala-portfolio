<template lang="html">
  <section class="process">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h5>{{title}}</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="new-card new-card-1">
            
              <h4 class="new-card-title">Strategy</h4>
        
            <ul class="new-card-list list-unstyled">
              <li class="">Stakeholder interviews</li>
              <li class="">Project vision &amp; goals</li>
              <li class="">Measure of success</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="new-card new-card-2">
            <h4 class="new-card-title">Discovery</h4>
            <ul class="new-card-list list-unstyled">
              <li class="">Business requirements</li>
              <li class="">User iterviews</li>
              <li class="">Value Proposition Canvas</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="new-card new-card-3">
            <h4 class="new-card-title">Analysis</h4>
            <ul class="new-card-list list-unstyled">
              <li class="">Storyboarding</li>
              <li class="">Personas</li>
              <li class="">Experience maps</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="new-card new-card-4">
            <h4 class="new-card-title">Design</h4>
            <ul class="new-card-list list-unstyled">
              <li class="">Sketching & wireframing</li>
              <li class="">UI & Prototyping</li>
              <li class="">User testing</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="new-card new-card-5">
            
            <h4 class="new-card-title">Production</h4>

            <ul class="new-card-list list-unstyled">
              <li class="">BETA Launch</li>
              <li class="">Quantitative analysis</li>
              <li class="">User Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style lang="scss">
.card-inverse {
  border-radius: 0;
  border-width: 2px;
  border-color: black;
  margin-bottom: 32px;
  .list-group {
    border: none;
    .list-group-item {
      border: none;
      background: transparent;
    }
  }
  &:after {
    transition: all 0.25s ease;
    display: block;
    content: '';
    width: calc(100% + 4px);
    position: absolute;
    height: calc(100% + 4px);
    background: rgba(black, .5);
    top: 4px;
    left: 4px;
    z-index: -1;
  }

  @for $i from 1 through 6 {
    &.card-#{$i} {
      position: relative;
      $value: 26;
      color: adjust-hue(#43B5FA, $value * $i);
      border-color: adjust-hue(#43B5FA, $value * $i);
      .list-group {
        .list-group-item {
          color: adjust-hue(#43B5FA, $value * $i);
        }
      }
      &:after {
        transition: all 0.25s ease;
        display: block;
        content: '';
        width: calc(100% + 4px);
        position: absolute;
        height: calc(100% + 4px);
        background: rgba(adjust-hue(#43B5FA, $value * $i), .5);
        top: 4px;
        left: 4px;
        z-index: -1;
      }
    }
  }
}

.new-card {
  border-radius: 16px;
  background:#D3DBE0;
  // overflow: hidden;
  padding: 32px;
  margin-bottom: 30px;
  position: relative;
  @for $i from 1 through 6 {
    &.new-card-#{$i} {
      $value: 26;
      background: adjust-hue(#43B5FA, $value * $i);
    }
  }
  .new-card-number {
    /* 01: */
    margin-left: -32px;
    margin-top: -48px;
    font-weight: 900;
    opacity: 0.2;
    font-size: 138px;
    color: #FFFFFF;
  }
  .new-card-title {
    font-weight: 900;
    font-size: 48px;
    color: #FFFFFF;
  }
  .new-card-list {
    font-weight: 900;
    font-size: 24px;
    color: rgba(0,0,0,0.6);
  }
  @media (max-width: 414px) {
    .new-card-title {
      font-size: 36px;
    }
    .new-card-list {
      font-size: 20px;
    }
  }
}
.list-group {
  margin-bottom: 16px;
}
</style>
