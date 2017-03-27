<template>
  <div class="config">
    <form @submit.stop.prevent="submit">
        <h1>Configuration</h1>
        <p>
          Access to The New York Times API requires a key.  You can obtain a key by visiting <a href="https://developer.nytimes.com">developer.nytimes.com</a>.
        </p>


      <md-input-container>
        <md-icon>
          vpn_key
        </md-icon>
        <label>API Key</label>
        <md-input required type="text" v-model="apikey"></md-input>
        <span class="md-error">Validation message</span>
      </md-input-container>

      <pre>
        {{ keys.map(name => `${name}:${this[name]}`).join(',') }}
      </pre>
    </form>
  </div>
</template>

<script>
import * as state from '@/services/state'
// import nyt from '../services/nyt'

export default {
  name: 'hello',
  data () {
    return {
      keys: ['apikey'],
      apikey: undefined
    }
  },
  mounted: async function () {
    const db = await state.get()
    this.keys.forEach(async name => {
      const config = await db.config.findOne({name}).exec()
      if (config) {
        this[name] = config.value
      }
    })
  },
  watch: {
    apikey: function (val, oldval) {
      console.log('watch apikey', val, oldval)
      if (val && val !== oldval) this.save('apikey', val)
    }
  },
  methods: {
    keyup (event, name, value) {
      console.log('keyup', event, name, value)
    },
    async save (name, value) {
      console.warn('save', name, value)
      const db = await state.get()
      return await db.config.upsert({name, value})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.config {
  padding: 16px;
}
md-whiteframe {
  width: 75%;
}
</style>
