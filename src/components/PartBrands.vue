<template>
  <section class="footer" id="brands">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h5>{{title}}</h5>
          <ul class="brands list-unstyled">
            <li class="brand-item" v-for="brand in orderBy(brands, 'year', -1)" :key="brand.id"><a :href="brand.link">{{brand.label}} <span>&mdash; {{brand.year}}</span></a></li>
          </ul>
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
      brands: [
        { label: 'Allegro', year: 2015, link: 'http://allegro.pl' },
        { label: 'PayU', year: 2015, link: 'http://payu.pl' },
        { label: 'Orsay', year: 2009, link: 'http://orsay.com' },
        { label: 'Cisco', year: 2010, link: 'http://cisco.com' },
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
      ]
    }
  }
}
</script>
