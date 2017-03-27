import axios from 'axios'
import * as state from './state'; // eslint-disable-line
import Rx from 'rxjs/Rx'

// axios.defaults.headers.common['api-key'] = '11b83c713ccf4496ac47305da7d2295f'
export default {
  mostviewed (offset = 0) {
    // console.warn('mostviewed', offset)
    return axios({
      method: 'get',
      url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json',
      params: {
        'api-key': '11b83c713ccf4496ac47305da7d2295f',
        offset
      }
    })
  },

  upsert (db, article) {
    var r = {
      id: article.id.toString()
    }

    var keys = [
      'url',
      'column',
      'section',
      'byline',
      'title',
      'abstract',
      'published_date',
      'source',
      'des_facet',
      'org_facet',
      'per_facet',
      'geo_facet',
      'media'
    ]
    keys.forEach(function (key) {
      r[key] = article[key]
    })

    // console.log('upsert', r, article)
    return db.articles.upsert(r)
  },

  async reload (cb) {
    /* eslint-disable */

    // function test(o) {
    //   return new Promise(function(resolve, reject) {
    //     setTimeout(
    //       function() {
    //         console.log('test', o);
    //         if (o === 60) return reject('60 is unlucky');
    //         resolve({data: {results: [{id: 'obj1-' + o}, {id: 'obj2-' + o}]}});
    //       },
    //       100
    //     );
    //   });
    // }
    //
    // function testupsert(o) {
    //   return new Promise(function(resolve, reject) {
    //     setTimeout(
    //       function() {
    //         console.log('testupsert', o);
    //         if (o.id === 'obj2-80') return reject('obj2-80 is unlucky');
    //         resolve(o);
    //       },
    //       100
    //     );
    //   });
    // }

    // console.log('nyt reload');
    const db = await state.get();
    // // // console.log('nyt.reload')
    var result = await this.mostviewed();
    var numResults = result.data.num_results;
    // console.log('numResults', numResults);
    //
    var d = await Promise.all(result.data.results.map(article => this.upsert(db, article)));
    if (cb) cb(d);

    var numResults = 50;  // only get 100 need spinners for more.
    // create an offset range
    var numbers = Rx.Observable
      .range(20, numResults)
      .bufferCount(1, 20)
      .concatAll();

    var loader = Rx.Observable
      .zip(numbers, Rx.Observable.interval(2000)) // wait 1 second between each request
      .map(zip => zip[0])
      .switchMap(x =>
        Rx.Observable
          .fromPromise(this.mostviewed(x)) // get a batch of 20 articles
          // .fromPromise(test(x)) // get a batch of 20 articles
          .catch(error => Rx.Observable.of({msg: 'http error', error, x}))
          // .do(y => console.log('y', y))
          .do(x => x.msg && console.error(x)) // if there was an error, log it
          .filter(x => x.msg !== 'http error') // get rid if any errors
          .map(result => result.data.results)
          .mergeMap(articles => Rx.Observable.from(articles)) // turn each article into an observable
          .switchMap(article =>
            Rx.Observable
              .fromPromise(this.upsert(db, article)) // upsert each article.
              // .fromPromise(testupsert(article)) // upsert each article.
              .catch(error =>
                Rx.Observable.of({msg: 'upsert error', error, article})))
          .do(x => x.msg && console.error(x)) // if there was an error, log it
          .filter(x => x.msg !== 'upsert error') // get rid if any errors
        )
        .merge()


    return await loader.subscribe();
  }
};
