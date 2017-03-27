<template>
  <div>
    List View
  </div>
</template>

<script>
import * as state from '../services/state'
// import nyt from '../services/nyt'

export default {
  name: 'hello',
  data () {
    return {
      results: [],
      subs: [],
      ts: new Date()
    }
  },
  mounted: async function () {
    const db = await state.get()
    // await state.reload()
    // await nyt.reload()
    // db.heroes.insert({name: 'Bob', color: 'blue', maxHP: 10}) // insert document
    console.log('mounted db', db, db.collections)
    db.articles.find().exec().then(article => {
      this.results = article
    })

    // db.articles.dump().then(json => console.dir(json))
    //
    // this.subs.push(
    //   db.heroes.find().$.filter(x => x != null).subscribe(results => {
    //     console.log('results:')
    //     console.dir(results)
    //     this.results = results
    //   })
    // )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
