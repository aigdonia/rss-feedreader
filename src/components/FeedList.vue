<template lang='pug'>
  .FeedList
    feed-item(v-for="entry in feedEntries", v-bind:item='entry', :key='entry.name')
</template>

<script>
  import FeedItem from './FeedItem'
  export default {
    name: 'feed-list',
    components: {
      FeedItem
    },
    computed: {
      feedEntries () {
        return this.$store.state.feeds
      }
    }
  }
</script>

<style lang='stylus'>
  .FeedList
    cursor: pointer
</style>
