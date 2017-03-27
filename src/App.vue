<template>
  <div id="app" class="phone-viewport">
  <md-toolbar>
    <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title">NYT Explorer</h2>
  </md-toolbar>

  <transition name="fade">
    <router-view></router-view>
  </transition>

  <md-sidenav class="md-left side-nav" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
    <md-toolbar class="md-large side-nav-toolbar">
      <div class="md-toolbar-container">
        <div class="side-nav-title">
          <h3 class="md-title">The New York Times</h3>
          <div>
            Explore the most viewed articles via The New York Times API.
          </div>
      </div>
      </div>
    </md-toolbar>

    <navigation v-on:close="toggleLeftSidenav()"></navigation>

  </md-sidenav>
</div>
</template>

<script>
import navigation from '@/components/navigation'
import * as state from '@/services/state'

export default {
  name: 'app',
  components: {
    navigation
  },
  mounted: async function () {
    const db = await state.get()

    // // debugging
    // var foo = await db.config.upsert({
    //   name: 'apikey',
    //   value: '11b83c713ccf4496ac47305da7d2295f'
    // })
    // console.log('foo', foo)

    const apikey = await db.config.findOne({name: 'apikey'}).exec()
    if (!apikey || !apikey.value) {
      console.warn('no apikey, redirecting to config')
      this.$router.push('Config')
    }
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    }
  }
}
</script>

<style>
body, html {
  height: 100%;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  height: 100%;
}

div.md-toolbar.side-nav-toolbar div.md-toolbar-container {
  height: 128px;
}

div.side-nav-title {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: inherit;
}
</style>
