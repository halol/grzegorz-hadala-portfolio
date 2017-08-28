<template>
  <div id="app">    
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
@import 'components/vars.scss';
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  font-family: 'Muli', sans-serif;
}
body {
  position: relative;
}

a, button {
  transition: all 0.25s ease;
}
.lead {
  font-size: 200%;
}
header, section {
  padding: $globalPadding/2;
}
footer {
  padding: $globalPadding/4 $globalPadding/2;
}

h5 {
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 48px;
}

.container-fluid {
  //padding: 0 $globalPadding;
}
//@import 'components/app.scss'
</style>
