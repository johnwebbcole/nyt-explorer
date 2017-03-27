import * as RxDB from 'rxdb'

RxDB.plugin(require('pouchdb-adapter-fruitdown'))
RxDB.plugin(require('pouchdb-adapter-memory'))
console.log('state adapters', RxDB.PouchDB.adapters)

// var db, articles
// function db () {
//  return RxDB.create({
//   name: 'nyt',
//   adapter: 'localstorage'
// })

const collections = [
  {
    name: 'config',
    schema: {
      title: 'app config',
      description: 'store application configuration',
      version: 0,
      type: 'object',
      properties: {
        name: {type: 'string', primary: true},
        value: 'string'
      }
    }
  },
  {
    name: 'articles',
    schema: {
      title: 'article schema',
      description: 'articles from nyt api',
      version: 1,
      type: 'object',
      properties: {
        id: {type: 'string', primary: true},
        url: 'string',
        column: 'string',
        section: 'string',
        byline: 'string',
        title: 'string',
        abstract: 'string',
        published_date: {type: 'string', index: true},
        source: 'string',
        des_facet: [],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        media: []
      }
    },
    migrationStrategies: {
      1: a => a
    }
  }
]

let dbPromise = null

const _create = async function () {
  console.log('DatabaseService: creating database..')

  // console.log('check', RxDB.RxSchema.create(collections[0].schema))

  var db = await RxDB.create({
    name: 'nytdb2',
    adapter: 'fruitdown',
    // adapter: 'memory', // 'fruitdown',
    multiInstance: true
  })

  console.log('DatabaseService: created database', db)
  window['db'] = db // write to window for debugging

  // console.log('colleciton', db.removeCollectionDoc('articles', collections[0].schema))

  // const articles = db.articles
  // console.log('articles', articles)
  // // show leadership in title
  // db.waitForLeadership().then(() => {
  //   console.log('isLeader now')
  //   document.title = '♛ ' + document.title
  // })

  // create collections
  console.log('DatabaseService: create collections', collections.length)
  var created = await Promise.all(collections.map(colData => db.collection(colData)))
  console.log('DatabaseService: created collections', created)
  // // hooks
  // console.log('DatabaseService: add hooks')
  // db.collections.heroes.preInsert(function (docObj) {
  //   const color = docObj.color
  //   return db.collections.heroes
  //     .findOne({
  //       color
  //     })
  //     .exec()
  //     .then(has => {
  //       if (has != null) {
  //         alert('another hero already has the color ' + color)
  //         throw new Error('color already there')
  //       }
  //       return db
  //     })
  // })
  //
  // // sync
  // console.log('DatabaseService: sync')
  // collections.filter(col => col.sync).map(col => col.name)

  return db
}

export function get () {
  if (!dbPromise) dbPromise = _create()
  return dbPromise
}
