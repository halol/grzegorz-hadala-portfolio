<template lang="html">
  <section class="featured" id="work">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12" v-if="title">
          <h5>{{this.title}}</h5>
        </div>
        <div class="col-lg-6" v-for="project in orderBy(projects, 'order', 1)" :key="project.id">
          <div class="project">
            <div class="project-image">
               <a class="img-link" v-if="project.medium" :href="project.medium"><img class="" :src="project.cover" :alt="project.name"></a>
              <a class="img-link" v-if="project.link" :href="project.link"><img class="" :src="project.cover" :alt="project.name"></a>
              <a class="img-link" v-if="project.behance" :href="project.behance"><img class="" :src="project.cover" :alt="project.name"></a>  
            </div>
            <div class="project-description">
            <h4>{{project.name}}</h4>
              <p class="card-text">{{project.description}}</p>
              <a v-if="project.medium" :href="project.medium" class="project-link">Read on Medium &rarr;</a>
              <a v-if="project.link" :href="project.link" class="project-link">Read case study &rarr;</a>
              <a v-if="project.behance" :href="project.behance" class="project-link">View on Behance &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    props: ['title'],
    data () {
      return {
        projects: [
          {
            order: 0,
            name: 'Disc Museum',
            description: 'Classical music app.',
            cover: '/static/discmuseum_cover.jpg',
            behance: 'https://www.behance.net/gallery/56175051/Disc-Museum?'
          },
          {
            order: 3,
            name: 'The Cambridge Satchel Company',
            description: 'Redesign proposal.',
            cover: '/static/cambridge_cover.png',
            behance: 'https://www.behance.net/gallery/55695313/The-Cambridge-Satchel-Company?'
          },
          {
            order: 2,
            name: 'Swift: Drink Sociably',
            description: 'No more wasting time queuing at a noisy bar. With Swift you order and pay for your drinks directly from your phone, skip the queue and pick them up.',
            cover: '/static/swift_cover.png',
            behance: 'https://www.behance.net/gallery/55754117/Swift-Drink-Sociably?'
          },
          {
            order: 1,
            name: 'MyPocketPro',
            description: 'No more wasting time queuing at a noisy bar. With Swift you order and pay for your drinks directly from your phone, skip the queue and pick them up.',
            cover: '/static/mypocketpro_cover.png',
            behance: 'https://www.behance.net/gallery/56173587/MyPocketPro?'
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  h4 {
    margin-top: 16px;
  }
  .project {
    margin-bottom: 48px;
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    transition: all 0.25s ease;
    box-shadow: 0 0px 0px rgba(black, 0.065);
    &:hover {
      box-shadow: 0 10px 30px rgba(black, 0.1);
      .project-description {
       display: none;
      }
      .project-image {
        border-radius: 16px;
        img {
          //filter: brightness(0.5);
          transform: scale(1.01);
        }
      }
    }
  }
  .project-image {
    border-radius: 16px;
    img {
      width: 100%;
      transition: all 0.5s ease;
      filter: brightness(1);
    }
    overflow:hidden;
  }
  .project-description {
    display: none;
    transition: all 0.3s ease;
    // margin-bottom: -100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    max-width: 50%;
    margin: 16px;
    padding: 32px;
    background: white;
    //color: white;
    
  }
</style>
