<template lang="html">
  <section class="process">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Process</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="card card-inverse card-1">
            <div class="card-body">
              <h4 class="card-title">Strategy</h4>
              <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Stakeholder interviews</li>
              <li class="list-group-item">Project vision &amp; goals</li>
              <li class="list-group-item">Measure of success</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-inverse card-2">
            <div class="card-body">
              <h4 class="card-title">Discovery</h4>
              <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Business requirements</li>
              <li class="list-group-item">User iterviews</li>
              <li class="list-group-item">Value Proposition Canvas</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-inverse card-3">
            <div class="card-body">
              <h4 class="card-title">Analysis</h4>
              <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Storyboarding</li>
              <li class="list-group-item">Personas</li>
              <li class="list-group-item">Experience maps</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="card card-inverse card-4">
            <div class="card-body">
              <h4 class="card-title">Design</h4>
              <!-- <p class="card-text">With supporting text </p> -->
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Sketching & wireframing</li>
              <li class="list-group-item">UI & Prototyping</li>
              <li class="list-group-item">User testing</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-inverse card-5">
            <div class="card-body">
              <h4 class="card-title">Production</h4>
              <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">BETA Launch</li>
              <li class="list-group-item">Quantitative analysis</li>
              <li class="list-group-item">User Testing</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-inverse card-6">
            <div class="card-body">
              <h4 class="card-title">Iteration</h4>
              <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Analysys conclusions</li>
              <li class="list-group-item">Strategy</li>
              <li class="list-group-item">Actions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.card-inverse {
  .card-text,
  .card-title {
    color: rgba(white, 1);
  }
  //margin-bottom: 32px;
  background-color: #43B5FA;
  border-color: #43B5FA;
  box-shadow: 0 7px 24px rgba(black, 0.2);
  .list-group {
    .list-group-item {
      background: transparent;
      color: rgba(white, 1);
    }
  }

  @for $i from 1 through 6 {
    &.card-#{$i} {
      $value: 26;
      background-color: adjust-hue(#43B5FA, $value * $i);
      border-color: adjust-hue(#43B5FA, $value * $i);
    }
  }
}
</style>
