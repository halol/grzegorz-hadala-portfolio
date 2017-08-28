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
  font-size: 1.25em;
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
  font-weight: 900;
  font-size: 32px;
  margin-bottom: 48px;
  color: darken(#D3DBE0,10%);
  // opacity: 0.5;
  margin-left: -32px;
  @media (max-width: 414px) {
    text-align: center;
    margin-left: 0;
  }
}

.container-fluid {
  //padding: 0 $globalPadding;
}
//@import 'components/app.scss'
</style>
