<template>
  <div id="app">
    <div class="sidebar">
      <div class="social-links">
        <a href="https://www.linkedin.com/in/grzegorzhadala/" target="_blank"><img src="./assets/linkedin-161.svg"></a>
        <a href="https://www.behance.net/greghadala" target="_blank"><img src="./assets/behance-163.svg"></a>
      </div>
      <nav class="nav">
        <router-link to="/#what" activeClass="active">What I do</router-link>
        <router-link to="/#process" activeClass="active">Process</router-link>
        <router-link to="/#brands" activeClass="active">Brands</router-link>
      </nav>
      
      <button class="scroll-up" v-scroll-to="{ el: '#app', offset: -0 }">up</button>
    </div>
    
    
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  }
}
</script>

<style lang="scss">
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  //padding-bottom: 100px;
  padding-left: 64px;
  position: relative;
}
.make-some-room {
  padding: 32px 0 0 0;
}
a {
  color: #43B5FA;
  transition: all 0.25s ease;

  &:hover {
    color: darken(#43B5FA, 20%);
    text-decoration: none;
  }
}
#app {
  font-family: 'Muli', sans-serif;
  overflow: hidden;
}
p {
  font-size: 1.125em;
  line-height: 1.125em * 1.3;
}
h1, h2, h3, h5 {
  //font-family: 'Playfair Display', serif;
  font-weight: 900;
  color: #292b2c;

}

h4 {
  font-weight: bold;
}
.scroll-up {
  position:fixed;
  bottom: 0;
  left: 0;
  height: 64px;
  width: 64px;
  background: black;
  border: 0;
  color: white;
}
.sidebar {
  position: fixed;
  width: 64px;
  background: black;
  left: 0;
  top: 0;
  bottom: 0;
}
.nav {
  // font-weight: bold;
  position: absolute;
  //bottom: 0;
  bottom: 0;
  //float: right;
  outline: 1px solid red;
  display: flex;
  flex-direction: row;
  flex-flow: row-reverse;
  width: calc(100vh - 64px);
  text-align: right;
  transform-origin: 0 0;
  //width:100vh;
  z-index: 200;
  //background: black;
  color: white;
  transform: rotate(-90deg);
  p {
    margin:0;
  }
  > a {
    color: white;
    //float: right;
    line-height: 64px;
    padding: 0 16px;
    display: inline-block;
    outline: 1px solid green;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 14px;
    &.active {
      color: blue;
    }
  }
}
.container-fluid {
  padding: 0 64px;
}
.social-links {
  position: absolute;
  bottom: 64px;
  z-index: 500;
  > a {
    width: 64px;
    height: 64px;
    display: block;
    text-align: center;
    line-height: 64px;
    > {
      img {
        width: 24px;
        height: auto;
      }
    }
  }
}
.highlight {
  background-color: #FAE543;
  width: 1000%;
  margin-left: -100%;
  padding: 0 100%;
  display: inline-block;
}

.underline {
  display: inline-block;
  border-bottom: 1px solid #FAE543;
  position: relative;
  &:hover {
    cursor: pointer;
    &:after {
      opacity: 1;
      display: block;
    }
  }
  &:after {
    transition: All 0.25s ease;
    content: attr(data-title);
    display: none;
    opacity: 0;
    position: absolute;
    background: #FAE543;
    color: black;
    padding: 1em;
    font-family: 'Muli', sans-serif;
    font-size: 14px;
    white-space: nowrap;
  }
}

.vue-typer .custom.char.typed {
  color: #292b2c;
}

.row {
  margin-bottom: 32px;
}

.apparate {
	opacity: 0;
}

@keyframes fadeInUp {
	from {
		transform: translateY(100px);
		opacity: 0;
	}

	to {
		transform: none;
		opacity: 1;
	}
}

.fade-in-up {
	animation-name: fadeInUp;
	animation-duration: .7s;
	animation-fill-mode: forwards;
}


.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}



@media (max-width: 414px) {
  .container {
    padding-left: 32px;
    padding-right: 32px;
  }
  .measure {
    //max-width: 100%;
    margin-bottom: 32px;
  }
  .hide-xs {
    display: none;
  }
  .social-links {
    text-align: center;
    > a {
      display: inline-block;
      width: 49%;
      padding: 16px 0;
      // outline: 1px solid red;
    }
    span {
      display: none;
    }
  }
  .nav {
    padding: 0;

  }
}
</style>
