// testing Vuex Store

import { mutations } from '@/store.js'

// deconstruct for simple code
const { addFeed, removeFeed } = mutations
//
// mock state
const state = { feeds: [] }
//
describe('Testing Store', () => {
  it('addFeed SHOULD adds new feed to the feeds list', () => {
    addFeed(state, {name: 'TestFeed', url: 'https://feed.google.com'})
    expect(state.feeds.length).to.equal(1)
  })

  it('addFeed SHOULD not add a feed twice, no URL duplicates', () => {
    addFeed(state, {name: 'TestFeed', url: 'https://feed.google.com'})
    addFeed(state, {name: 'TestFeed1', url: 'https://feed.google.com'})
    expect(state.feeds.length).to.equal(1)
  })

  it('removeFeed SHOULD remove the feed from the feeds list', () => {
    addFeed(state, {name: 'TestFeed2', url: 'https://feed2.google.com'})
    expect(state.feeds.length).to.equal(2)
    removeFeed(state, 'https://feed2.google.com')
    expect(state.feeds.length).to.equal(1)
  })
})
