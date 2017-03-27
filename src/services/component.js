import nyt from './nyt'

export default {
  data () {
    return {
      items: []
    }
  },
  created () {

  },
  methods: {
    fetchPosts () {
      return nyt.get()
        .then(response => {
          this.items = response.results
        })
    }
  }
}
