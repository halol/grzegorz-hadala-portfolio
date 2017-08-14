<template>
  <div class="hello">
    <header class ="main-header">
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
        </div>
        <div class="row make-some-room">
          <div class="col-lg-5">
            <h4>UX & UI</h4>
            <p class="">Empathy to the users came to very natural. I’m a problem solver and my biggest goal is to make users happy. With more than 10 years of experience in digital design and artistic soul I’ve developed an eye to create beautiful interfaces and smooth and engaging user flows.</p>
          </div>
          <div class="col-lg-7">
            <ul class="photos list-unstyled list-inline">
              <li><img src="/static/atwork/atwork_1_300w.jpg" alt=""></li>
              <li><img src="/static/atwork/atwork_2_300w.jpg" alt=""></li>
              <li><img src="/static/atwork/atwork_3_300w.jpg" alt=""></li>
              <li><img src="/static/atwork/atwork_4_300w.jpg" alt=""></li>
              <li><img src="/static/atwork/atwork_5_300w.jpg" alt=""></li>
              <li><img src="/static/atwork/atwork_6_300w.jpg" alt=""></li>
              <li><img src="/static/atwork/atwork_7_300w.jpg" alt=""></li>
              <li><img src="/static/atwork/atwork_8_300w.jpg" alt=""></li>
            </ul>
          </div>
        </div>
        <div class="row make-some-room">
          <div class="col-lg-5">
            <h4>Tech</h4>
            <p class="">Front-end development and being up to date with new technologies (and tools) are my hobby. I’m also using it to improve and optimize my design and business workflow. I'm building Vue.js/AngularJS prototypes when's needed.</p>
          </div>
          <div class="col-lg-7">
            photo
          </div>
        </div>
        <div class="row make-some-room">
          <div class="col-lg-5">
            <h4>Business</h4>
            <p class="">I’m a business thinker. Making users happy is a first, the second one is to make business happy. Building amazing products is for solving peoples struggle but also is making money and reaching designated markets.</p>
          </div>
          <div class="col-lg-7">
            photo
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
                <div class="card-body">
                  <h4 class="card-title">Strategy</h4>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Stakeholder interviews</li>
                  <li class="list-group-item">Project vision & goals</li>
                  <li class="list-group-item">Measure of success</li>
                </ul>
              </div>
              <div class="card card-inverse">
                <div class="card-body">
                  <h4 class="card-title">Discovery</h4>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Business requirements</li>
                  <li class="list-group-item">User iterviews</li>
                  <li class="list-group-item">Value Proposition Canvas</li>
                </ul>
              </div>
              <div class="card card-inverse">
                <div class="card-body">
                  <h4 class="card-title">Analysis</h4>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Storyboarding</li>
                  <li class="list-group-item">Personas</li>
                  <li class="list-group-item">Experience maps</li>
                </ul>
              </div>
              <div class="card card-inverse">
                <div class="card-body">
                  <h4 class="card-title">Design</h4>
                  <p class="card-text">With supporting text </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Sketching & wireframing</li>
                  <li class="list-group-item">UI & Prototyping</li>
                  <li class="list-group-item">User testing</li>
                </ul>
              </div>
              <div class="card card-inverse">
                <div class="card-body">
                  <h4 class="card-title">Production</h4>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">BETA Launch</li>
                  <li class="list-group-item">Quantitative analysis</li>
                  <li class="list-group-item">User Testing</li>
                </ul>
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
            <div class="row" v-for="project in projects" :key="project.id">
              <div class="col-lg-5">
                <h4>{{project.name}}</h4>
                <p class="card-text measure">{{project.description}}</p>
                <a v-if="project.medium" :href="project.medium">Read on Medium &rarr;</a>
                <a v-if="project.link" :href="project.link">Read case study &rarr;</a>
                <a v-if="project.behance" :href="project.behance">View on Behance &rarr;</a>
              </div>
              <div class="col-lg-7">
                <div class="card card-project">
                  <img class="card-img-top" :src="project.cover" :alt="project.name">
                </div>
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
      projects: [
        {
          name: 'MyWay',
          description: 'Managing your perfect work life balance. Modern type of calendar.',
          cover: '/static/myway/myway_cover.png',
          link: '',
          medium: 'https://medium.freecodecamp.org/grabs-front-end-guide-for-large-teams-484d4033cc41',
          behance: ''
        },
        {
          name: 'The Cambridge Satchel Company',
          description: 'Redesign proposal.',
          cover: '/static/cambridge/cambridge_cover.png',
          behance: 'https://www.behance.net/gallery/55695313/The-Cambridge-Satchel-Company?'
        },
        {
          name: 'Disc Museum',
          description: 'Lorem ipsum short description',
          cover: '/static/cambridge_half.png',
          behance: 'https://www.behance.net/gallery/54979335/Montreal-Espace-Pour-La-Vie-cards'
        },
        {
          name: 'Swift: Drink Sociably',
          description: 'No more wasting time queuing at a noisy bar. With Swift you order and pay for your drinks directly from your phone, skip the queue and pick them up.',
          cover: '/static/swift/swift_cover.png',
          behance: 'https://www.behance.net/gallery/55754117/Swift-Drink-Sociably?'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'hello.scss';
</style>
