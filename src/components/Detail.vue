<template lang="html">
  <div class="detail">
    <md-card v-if="id">
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
          <md-image :md-src="image"></md-image>
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <div class="md-title">{{ data.title}}</div>
            <div class="md-subhead">{{ data.abstract}}</div>
          </md-card-header>

          <md-card-actions>
            <md-button :href="data.url">Read Article</md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
    <span v-else>Loading...</span>
  </div>
</template>

<script>
import * as state from '@/services/state'

export default {
  props: ['id'],
  data: function () {
    return {
      data: undefined,
      image: null
    }
  },
  created: function () {
    this.load()
    console.log('detail created', this.id, this.data)
  },
  watch: {
    id: 'load'
  },
  methods: {
    async load () {
      console.log('detail.load', this.id)
      if (!this.id) return
      const db = await state.get()
      this.data = await db.articles.findOne({id: this.id}).exec()

      if (this.data) this.image = this.data.media[0]['media-metadata'][0].url
      console.log('detail.load', this.id, this.data && this.data.toJSON())
      console.log('img', this.image)
    }
  }
}
</script>

<style lang="css">
.detail {
  min-width: 250px;
}
</style>
