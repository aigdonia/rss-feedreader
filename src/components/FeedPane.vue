<template lang='pug'>
  .FeedPane
    .FeedPane__error(v-if='!! error')
      h1.bigMan Can't Fetch this feed
    .FeedPane__loader(v-else-if='articles.length <= 0')
      grid-loader(loading=true, color="#FBC02D", size="20px")

    .FeedPane__list(v-else)
      h1 {{feed.name}}
      .articles
        .article(v-for='article in articles')
          a(:href='article.link' target='_blank')
            img(v-if='!!article.image.url' v-lazy='article.image.url')
          .article__details
            a(:href='article.link' target='_blank') {{ article.title }}
            p(v-html='article.summary')

</template>

<script>
  // fetchFeed little helper for fetching feeds
  import { fetchFeed } from '../services/FeedReader'

  // shine shine
  import GridLoader from 'vue-spinner/src/GridLoader'

  export default {
    computed: {
      feed () {
        var feedId = this.$route.params.feedId
        return this.$store.state.feeds.find(f => {
          return f.uid === feedId
        })
      }
    },
    data () {
      return {
        articles: [],
        error: false
      }
    },
    watch: {
      '$route' (to, from) {
        var self = this
        self.error = false
        self.articles = []

        fetchFeed(this.feed.url)
          .then((items) => {
            self.articles = items
          })
          .catch(() => {
            // something went wrong, tell the boss
            self.error = true
          })
      }
    },
    components: {
      GridLoader // the beautiful spinner appears on loading Feed
    },
    created () {
      let self = this
      fetchFeed(this.feed.url)
        .then((items) => {
          self.articles = items
        })
        .catch(() => {
          self.error = true
        })
    }
  }
</script>

<style lang='stylus'>
  // Elements
  .FeedPane__
    &loader
      height: calc(75vh - 145px)
      display: flex
      justify-content: center
      align-items: center

    &list
      display block
      margin: 2px 0
      padding: 3px 7px
      /*background-color*/

      h1
        margin: 0px 0 9px
        font-size: 3rem
        font-weight: 100

      .articles
        height: calc(100vh - 290px)
        overflow: auto


      .article
        margin: 3px 0
        display: flex
        background-color: white
        &:nth-child(odd)
          background-color: lighten($grey, 30)
        img
          height: 120px
          width: 200px
          padding: 5px 3px
          object-fit: cover

        a
          color: $blue
          text-decoration: none

        &__details
          margin-left: 25px
          padding: 10px 0
          &> a
            font-size: 1.3rem
          p
            margin: 0
            padding: 0.8rem 0 0
            font-size: 0.9rem
            color: darken($grey,20)
            &>p
              margin: 0
              padding: 0
            &>a img
              margin: 0 10px

</style>
