<template>
  <div class="hello">
    <header class="main-header" id="hello">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-7">
            <p class="change-hi"><vue-typer :text='["Siema!", "Hello!", "¡Hola!"]'></vue-typer></p>
            <!-- <p class="welcome">I'm Greg &mdash; Product Designer based in London. <br> I&nbsp;build products that work for people and business.</p> -->
            <p class="lead">I'm <strong>Grzegorz Hadala &mdash; Product Designer</strong> with 3 years of practice with building beautiful mobile and web products with great experiences and 7 years as a multidisciplinary digital designer in print, marketing and advertising. Worked with different types of target markets and delivered more than 30 mobile apps and websites in the corporate, start-up and a freelance environment. Design thinker, artistic soul and the problem solver with a pragmatic and holistic approach.</p>
          </div>
        </div>
      </div>
    </header>
    <part-description id="what"></part-description>
    <part-process id="process"></part-process>
    <section class="featured" id="work">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <h5>Work</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="row" v-for="project in projects" :key="project.id">
              <div class="col-lg-5">
                <h4>{{project.name}}</h4>
                <p class="card-text measure">{{project.description}}</p>
                <a v-if="project.medium" :href="project.medium" class="project-link">Read on Medium &rarr;</a>
                <a v-if="project.link" :href="project.link" class="project-link">Read case study &rarr;</a>
                <a v-if="project.behance" :href="project.behance" class="project-link">View on Behance &rarr;</a>
              </div>
              <div class="col-lg-7">
                  <a v-if="project.medium" :href="project.medium"><img class="card-img-top" :src="project.cover" :alt="project.name"></a>
                  <a v-if="project.link" :href="project.link"><img class="card-img-top" :src="project.cover" :alt="project.name"></a>
                  <a v-if="project.behance" :href="project.behance"><img class="card-img-top" :src="project.cover" :alt="project.name"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="footer" id="brands">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <h5>Brands I've worked with</h5>
            <ul class="brands list-unstyled">
              <li class="brand-item" v-for="brand in orderBy(brands, 'year', -1)" :key="brand.id"><a :href="brand.link">{{brand.label}} <span>&mdash; {{brand.year}}</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
import PartProcess from '@/components/PartProcess.vue'
import PartDescription from '@/components/PartDescription.vue'
export default {
  name: 'hello',
  components: {
    'vue-typer': VueTyper,
    'part-process': PartProcess,
    'part-description': PartDescription
  },
  children: {
    name: 'part-process'
  },
  data () {
    return {
      brands: [
        { label: 'Allegro', year: 2015 },
        { label: 'PayU', year: 2015 },
        { label: 'Orsay', year: 2009 },
        { label: 'Cisco', year: 2010 },
        { label: 'Asus', year: 2011 },
        { label: 'WhenYouMove', year: 2015 },
        { label: 'Heero', year: 2016 },
        { label: 'MyPocketPro', year: 2016 },
        { label: 'JobStars', year: 2016 },
        { label: 'Disc Musuem', year: 2017 },
        { label: 'MyWay', year: 2017 },
        { label: 'Kids Know Best', year: 2016 },
        { label: 'MH Systems', year: 2015 },
        { label: 'MyVitae', year: 2016 },
        { label: 'Swift', year: 2016 },
        { label: 'Latetrip.com', year: 2016 },
        { label: 'Miasto Kraków', year: 2008 },
        { label: 'Prozak', year: 2009 },
        { label: 'Frantik', year: 2009 },
        { label: 'Cień', year: 2009 }
      ],
      projects: [
        {
          name: 'The Cambridge Satchel Company',
          description: 'Redesign proposal.',
          cover: '/static/cambridge/cambridge_cover.png',
          behance: 'https://www.behance.net/gallery/55695313/The-Cambridge-Satchel-Company?'
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
