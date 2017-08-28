<template lang="html">
  <section class="description">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h5>{{title}}</h5>
        </div>
      </div>
      <div class="row make-some-room">
        <div class="col-lg-4">
          <div class="card card-inverse">
            <div class="card-body">
              <h4 class="card-title">UX &amp; UI</h4>
              <p class="card-text">Empathy to the users came to very natural. I’m a problem solver and my biggest goal is to make users happy. With more than 10 years of experience in digital design and artistic soul I’ve developed an eye to create beautiful interfaces and smooth and engaging user flows.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4"> 
          <div class="card card-inverse">
            <div class="card-body">
              <h4 class="card-title">Tech</h4>
              <p class="card-text">Front-end development and being up to date with new technologies (and tools) are my hobby. I’m also using it to improve and optimize my design and business workflow. I'm building Vue.js/AngularJS prototypes when it's needed. I keep an eye on implementation process and I make sure that engineers are using best solutions and keep their code tidy with KISS and DRY approach.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">        
           <div class="card card-inverse">
            <div class="card-body">
              <h4 class="card-title">Business</h4>
              <p class="card-text">I’m a business thinker. Making users happy is a first, the second one is to make business happy. Building amazing products is for solving peoples struggle but also is making money and reaching designated markets.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss">
@import 'card.scss';
.description {
  .card {
    min-height: 300px;
  }
}
</style>
