<template>
  <div class="home">
    <div class="toolbar">
      <md-button class="md-icon-button" @click.native="refresh">
        <md-icon>refresh</md-icon>
      </md-button>
    </div>
    <md-layout md-gutter class="content">
      <md-layout md-flex="50">
        <div class="article-list" v-if="results !== undefined && results.length > 0">
            <md-list class="custom-list md-triple-line" v-for="article in results" :key="article.id">
                <article-item :data="article" @click.native="go(article.id)"></article-item>
            </md-list>
        </div>
        <span v-else-if="results !== undefined && results.length === 0">No Articles</span>
        <span v-else>Loading..</span>
      </md-layout>
      <md-layout>
        <article-detail :id="id"></article-detail>
      </md-layout>
    </md-layout>
</div>
</template>

<script>
import * as state from '@/services/state'
import nyt from '@/services/nyt'
import articleItem from '@/components/article'
import Detail from '@/components/Detail'

export default {
  props: ['id'],
  name: 'home',
  components: {
    articleItem,
    articleDetail: Detail
  },
  data () {
    return {
      results: undefined,
      subs: [],
      ts: new Date()
    }
  },
  watch: {
    $route: 'setId'
  },
  mounted: function () {
    this.load()
    console.log('home mounted db', this.results, this.id)
  },
  methods: {
    async load () {
      const db = await state.get()
      this.results = await db.articles
        .find()
        .limit(20)
        .sort('published_date')
        .exec()
    },
    async refresh () {
      this.results = undefined
      await nyt.reload(async (d) => {
        await this.load()
        // console.log('home refresh', d, this.results)
      })
    },
    setId () {
      // console.log('setId', this.$route, this.id)
    },
    go (id) {
      // console.log('go', id)
      this.$router.push({path: `/home/${id}`})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  height: calc(100% - 64px);
}
.content {
  height: 100%;
}
.article-list {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
