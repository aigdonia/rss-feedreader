<template lang='pug'>
.FeedForm
  header
    h2.fa.fa-plus  Add New Feed
  form
    .form-group
      label Feed Name:
      input(type='text', v-model='feedName')
    .form-group
      label Feed URL:
      input(type='text', v-model='feedURL', style='width:350px', placeholder='http(s)://...')
    .button-group
      button(v-bind:disabled='!allowAddFeed', v-on:click='newFeed') Add Feed

</template>

<script>
  export default{
    name: 'feed-form',
    data () {
      return {
        feedName: '',
        feedURL: ''
      }
    },
    computed: {
      // check if both Feed Name and Feed URL got values
      allowAddFeed () {
        // the double dong (!!) makes sure the value will be always boolean, check that both got values, and the url starts with (http) !!weak check!!
        return !!((this.feedURL.length && this.feedName.length) && this.feedURL.startsWith('http'))
      }
    },
    methods: {
      // creates new FeedItem object and adds it to localstorage stored feeds.
      newFeed () {
        // form new FeedItem object
        var newFeed = {
          name: this.feedName,
          url: this.feedURL
        }
        // insert the new object to feeds array stored at localstorage
        this.$store.commit('addFeed', newFeed)

        // once every thing done successfully, reset the values of state values.
        this.feedName = ''
        this.feedURL = ''
      }
    }
  }
</script>

<!--  scoped: restrive this style to current component only -->
<style lang='stylus' scoped>
  .FeedForm
    margin: 2rem 0
    box-shadow: 0 0 1px rgba(60,60,60,0.2), 0 0 2px rgba(80,80,80,0.6)
    header
      background-color: $primaryColor
      h2
        font-family: 'Roboto'
        padding-left: 1rem
        color: white
        font-size: 0.9rem
        font-weight: bold

    form
      display: flex
      align-items: center
      justify-content: center
      background-color: white
      padding: 1.8rem 2.1rem

    .form-group
    .button-group
      display: flex
      margin: 0 0.3rem

    .form-group
      flex-direction: column
      label
        color: $grey
        font-size: 0.8rem
        margin-bottom: 2px

      input
        border: 1px solid lighten($grey, 25)
        outline: none
        line-height: 1.8rem
        font-size: 1.2rem
        padding: 0.1rem

    .button-group
      justify-content: center
      align-items: center

      button
        background-color: $blue
        color: white
        height: 2rem
        margin-top: 15px
        border: 1px solid darken($blue,10)

        &:disabled
          background-color: lighten($blue, 25)
          border: 1px solid lighten($blue, 15)
          color: $grey
</style>
