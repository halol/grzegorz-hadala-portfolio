<template>
  <div class="hello">
    <!-- <aside class="menu">
      <ul>
        <li><a href="#/">Siema!</a>
          <ul>
            <li><a href="#">What I do</a></li>
            <li><a href="#">Featured Projects</a></li>
            <li><a href="#">Other Projects</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#">Hire me!</a></li>
          </ul>
        </li>
      </ul>
    </aside> -->
    <header class="main-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <h1 class="change-hi"><vue-typer :text='["Siema!", "Hello!", "¡Hola!"]'></vue-typer></h1>
            <h1 class="welcome">I'm Grzegorz Hadala, a <span class="highlight">Product Designer</span> based in <span class="underline" data-title="But can work anywhere 🌎 🌍 🌏">London</span>. I&nbsp;build products that work for people, business and my mum too.</h1>
          </div>
          <div class="col-lg-5">
            <div class="circles">
              <div class="circle circle--1">UX</div>
              <div class="circle circle--2">TECH</div>
              <div class="circle circle--3">BUSINESS</div>
              <div class="circle me">ME</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="description">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>What I do</h2>
          </div>
          <div class="col-lg-4">
            <h4>UX/Design</h4>
            <p class="">Empathy to the users came to very natural. I’m a problem solver and my biggest goal is to make users happy. With more than 10 years of experience in digital design and artistic soul I’ve developed an eye to create beautiful interfaces and smooth and engaging user flows.</p>
            <ul class="list-group">
              <li class="list-group-item">UX Research</li>
              <li class="list-group-item">Workshops</li>
              <li class="list-group-item">Wireframing</li>
              <li class="list-group-item">Prototyping</li>
              <li class="list-group-item">Testing</li>
              <li class="list-group-item">UI Design</li>
              <li class="list-group-item">Design hands off</li>
            </ul>
          </div>
          <div class="col-lg-4">
            <h4>Tech</h4>
            <p class="">Front-end development and being up to date with new technologies (and tools) are my hobby. I’m also using it to improve and optimize my design and business workflow.</p>
            <ul class="list-group">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
              <li class="list-group-item">Porta ac consectetur ac</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
          <div class="col-lg-4">
            <h4>Business</h4>
            <p class="">I’m a business thinker. Making users happy is a first, the second one is to make business happy. Building amazing products is for solving peoples struggle but also is making money and reaching designated markets.</p>
            <ul class="list-group">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
              <li class="list-group-item">Porta ac consectetur ac</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="process">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Process</h2>
          </div>
        </div>
      </div>
      <div class="process-table">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="card-deck">
              <div class="card card-inverse">
                <div class="card-block">
                  <h4 class="card-title">Define</h4>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
              <div class="card card-inverse">
                <div class="card-block">
                  <h4 class="card-title">Ideate</h4>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
              <div class="card card-inverse">
                <div class="card-block">
                  <h4 class="card-title">Prototype</h4>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
              <div class="card card-inverse">
                <div class="card-block">
                  <h4 class="card-title">Build</h4>
                  <p class="card-text">With supporting text </p>
                </div>
              </div>
              <div class="card card-inverse">
                <div class="card-block">
                  <h4 class="card-title">Analyze</h4>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
              <div class="card card-inverse">
                <div class="card-block">
                  <h4 class="card-title">Iterate</h4>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="featured">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Featured projects</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card card-project">
              <img class="card-img-top" src="../assets/myway.png" alt="Project name">
              <div class="card-block">
                <h4>MyWay</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#/">Read on Medium &rarr;</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card card-project">
              <img class="card-img-top" src="../assets/cambridge_half.png" alt="Project name">
              <div class="card-block">
                  <h4>Cambridge Satchel Company</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#/">Read on Medium &rarr;</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card card-project">
              <img class="card-img-top" src="../assets/cambridge_half.png" alt="Project name">
              <div class="card-block">
                <h4>Project name</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#/">Read on Medium &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
// /import VueTyperPlugin from 'vue-typer'
import { VueTyper } from 'vue-typer'
export default {
  components: {
    'vue-typer': VueTyper
  },
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'hello.scss';
</style>
