<template>
  <div class="hello">
    <header>
      <h1 class="">Siema!</h1>
      <h1 class="subheader">I'm Grzegorz Hadala, a Product Designer based in London. I&nbsp;build products that works for people, business and my mum too.</h1>
    </header>
    <section class="circles">
      <div class="circle circle--1">UX</div>
      <div class="circle circle--2">TECH</div>
      <div class="circle circle--3">BUSINESS</div>
    </section>
    <section class="description">
      <article class="pl3-l">
        <h2 class="subheader">UX</h2>
        <p class="lh-copy measure">Empathy to the users came to very natural. I’m a problem solver and my biggest goal is to make users happy. With more than 10 years of experience in digital design and artistic soul I’ve developed an eye to create beautiful interfaces and smooth and engaging user flows.</p>
      </article>
      <article class="pl7-l">
        <h2 class="subheader">Tech</h2>
        <p class="lh-copy measure">Front-end development and being up to date with new technologies (and tools) are my hobby. I’m also using it to improve and optimize my design and business workflow.</p>
      </article>
      <article class="pl5-l">
        <h2 class="subheader">Business</h2>
        <p class="lh-copy measure">I’m a business thinker. Making users happy is a first, the second one is to make business happy. Building amazing products is for solving peoples struggle but also is making money and reaching designated markets.</p>
      </article>
    </section>
    <section class="featured">
      <h2>Featured projects</h2>
      <div class="fl w-50 pr5">
        <a href="#">
          <img src="http://placekitten.com/400/200" alt="" class="w-100">
        </a>
        <h3>Project title</h3>
        <p class="lh-copy measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#">Read on Medium &rarr;</a>
      </div>
      <div class="fl w-50 pl5">
        <a href="#">
          <img src="http://placekitten.com/400/200" alt="" class="w-100">
        </a>
        <h3>Project title</h3>
        <p class="lh-copy measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#">Read on Medium &rarr;</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-bottom: 0;
  font-size: 4vw;
}
.subheader {
  max-width: 70vw;
}
.circles {
  display: flex;
  padding: 5em 0;
}
.featured {
  padding: 5em 0;
}
.circle {
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 999px;
  align-items: center;
  position: relative;
  background-color: rgba(0,0,0,.2);
  font-weight: 900;
}
.circle--1 {
}
.circle--2 {
  margin-left: -50px;
}
.circle--3 {
  margin-left: -275px;
  margin-top: 125px;
}
.circle--1-add:after {
  content: '';
  display: block;
  background: #ccc;
  position: absolute;
  width: 50vw;
  height: 50vw;
  display: flex;
  align-content: center;
  justify-content: center;
  z-index: -1;
  left: -40vw;
  top: -20vh;
  border-radius: 999px;
}

h2 {
  position: relative;
  z-index: 100;
}
h2:after {
  display: block;
  width: 100px;
  position: absolute;
  height: 16px;
  background: blue;
  content: '';
  top: 10px;
  left: -4px;
  z-index: -1;
  opacity: .4;
}
</style>
