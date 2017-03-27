<template lang="html">
  <md-list-item>
    <md-avatar class="md-avatar-icon text-icon">
      <!-- <md-icon>home</md-icon> -->
      <div class="text-icon-letter">
        {{ data.section.substring(0,1) }}
      </div>
    </md-avatar>

    <div class="md-list-text-container">
      <span><b>{{ data.section }}</b> : {{ data.title }}</span>
      <span>{{ data.byline }} - Published: {{ data.published_date}}</span>
      <p>{{ data.abstract.substring(0,100)}}</p>
    </div>

    <!-- <md-divider class="md-inset"></md-divider> -->
  </md-list-item>
</template>

<script>
export default {
  name: 'article',
  props: ['data'],
  mounted: function () {
    // console.log('article', this.data.toJSON())
  }
}
</script>

<style lang="css" scoped>
.text-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-icon-letter {
  margin-top: 2px;
  color: white;
  font-size: 24px;
  width: 24px;
  min-width: 24px;
  height: 24px;
  align-items: center;
  text-align: center;
  /*vertical-align: baseline;*/
}
</style>
