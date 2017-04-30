import Vue from 'vue'
import Vuex from 'vuex'
// import _ from 'lodash'
import _ from 'moar-lodash'
import createPersist from 'vuex-localstorage'

Vue.use(Vuex)

// export mutations individually, this helps in unit testing ;)
export const mutations = {
  //  Adds new feed to feeds list
  addFeed (state, newFeed) {
    if (!state.feeds.some(f => f.url === newFeed.url)) {
      var uid = _.sha1(_.kebabCase(newFeed.url))
      newFeed.uid = uid
      state.feeds.push(newFeed)
    }
  },
  // Deletes exist feed from the list, feed is deleted by its URL.
  removeFeed (state, feedUrl) {
    let feedIndex = state.feeds.findIndex(feed => {
      return feed.url === feedUrl
    })
    state.feeds.splice(feedIndex, 1)
  }
}

// handle feeds storage and management in proper way ;)
export const store = new Vuex.Store({
  plugins: [createPersist({
    namespace: 'rss-reader',
    initialState: { feeds: [] }
  })],
  mutations: mutations
})
