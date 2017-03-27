<template>
  <div class="navigation">
    <router-link tag="button" to="/" @click.native="closeSideNav" class="md-button">Home</router-link>
    <!-- <router-link tag="button" to="/list" @click.native="closeSideNav" class="md-button">List</router-link> -->
    <router-link tag="button" to="/config" @click.native="closeSideNav" class="md-button">Config</router-link>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    closeSideNav (event) {
      console.log('closeSideNav', this.close)
      this.$emit('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  display: flex;
  flex-direction: column;
}
</style>
