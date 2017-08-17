<template>
  <div id="app">
    <nav class="nav" v-if="$route.name != 'hireme'">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 hide-xs">
            Grzegorz Hadala, Product Designer
            <!-- &nbsp; &mdash;&mdash;&mdash; &nbsp; -->
            <!-- <a href="/hireme" class="btn btn-sm btn-primary">Hire me</a> -->
          </div>
          <div class="col-lg-4 text-right">
            <!-- <a href="#">Medium</a> &mdash; -->
            <div class="social-links">
              <a href="https://www.linkedin.com/in/grzegorzhadala/" target="_blank">LinkedIn</a> <span>&mdash;</span>
              <a href="https://www.behance.net/greghadala" target="_blank">Behance</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
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

.measure {

}
p {
  font-size: 1.125em;
  line-height: 1.125em * 1.3;
}
h1, h2, h3 {
  //font-family: 'Playfair Display', serif;
  font-weight: 900;
  color: #292b2c;

}

h4 {
  font-weight: bold;
}
.nav {
  padding: 16px 0;
  // font-weight: bold;
  position: fixed;
  bottom: 0;
  z-index: 900;
  background: black;
  color: white;
  width: 100%;
  p {
    margin:0;
  }
}
.nav .separator {
  display: inline-block;
  position: relative;
  width: 100px;
  margin: 0 32px;
  border-bottom: 1px solid white;
  top: -3px;
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
