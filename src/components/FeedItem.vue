<template lang='pug'>
router-link.FeedList__Item(:to='"/feed/"+item.uid',active-class="FeedList__Item--current", :title='item.name')
  span {{item.name}}
  a.deleteItem(@click.prevent='deleteItem')
    i.fa.fa-close
</template>

<script>
  export default {
    name: 'feed-item',
    props: ['item'],
    methods: {
      // removed the feed from feeds storage by name
      deleteItem () {
        if (confirm('Delete Feed "' + this.item.name + '"?')) {
          this.$store.commit('removeFeed', this.item.url)
          // route to another feed after the current one is deleted
          var nextFeed = this.$store.state.feeds[0]
          console.log(nextFeed)
          if (nextFeed) {
            this.$router.push('/feed/' + nextFeed.uid)
          } else {
            this.$router.push('/')
          }
        }
      }
    }
  }
</script>

<style lang='stylus'>
  .FeedList__Item
    display: block
    position: relative
    background-color: $primaryColor
    margin: 2px 0
    padding: 0.8rem 0.3rem
    color: white
    transition: 150ms background-color ease-in-out

    span
      margin-left: 1rem
      text-overflow: ellipsis
      overflow: hidden
      white-space: nowrap
      width: 120px
      display: inline-block
      font-weight: bold
      font-size: 0.9rem

    a.deleteItem
      text-align: center
      position: absolute
      right: 0
      width: 3rem

    &:hover
    &--current
      background-color: transparent
      color: $grey

      &::before
      &::after
        content: ''
        display: block
        position: absolute
        top: 0

      &::before
        width: 2px
        background-color: $orange
        height: 100%
        left: 0;
        transition: 150ms width ease-in

    &--current
      color: white
      &::before
        width: 4px
      &::after
        margin: auto;
        right: 0
        top: 0;
        bottom: 0
        width: 0
        height: 0
        border-style: solid;
        border-width: 8px 8px 8px 0;
        border-color: transparent $backgroundColor transparent transparent;
        line-height: 0px;
</style>
