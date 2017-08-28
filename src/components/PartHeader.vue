<template>
  <header class="main-header" id="hello">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <!-- <p class="welcome">I'm Greg &mdash; Product Designer based in London. <br> I&nbsp;build products that work for people and business.</p> -->
          <p class="lead" style="font-weight: 900;">Grzegorz Hadala<br>&mdash; design thinker, artistic soul and the problem solver with a&nbsp;pragmatic and holistic approach.</p>
          <p><strong>Product Designer</strong> with 3 years of practice with building beautiful mobile and web products with great experiences and 7 years as a multidisciplinary digital designer in print, marketing and advertising.</p>
          <p>Worked with different types of target markets and delivered more than 30 mobile apps and websites in the corporate, start-up and a freelance environment.</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
</script>

<style lang="scss">
@import "vars.scss";
.main-header {
  background-color: white;
  // background-image: url(/static/ill1.svg);
  // background-position: 80% 50%;
  // background-repeat: no-repeat;
  // background-size: 20%;
  // filter: invert();
  @media (max-width: 414px) {
    p.lead {
      font-size: 24px;
    }
  }
}
</style>
