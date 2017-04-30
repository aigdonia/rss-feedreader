<template lang='pug'>
  #app
    .sideNav
      h2.logo RSS Reader
      feed-list
    .main
      feed-form
      router-view
</template>

<script>
import FeedList from './components/FeedList'
import FeedForm from './components/FeedForm'

export default {
  name: 'app',
  components: {
    FeedList,
    FeedForm
  }
}
</script>

<style lang='stylus'>
body
  margin: 0
  padding: 0
#app
  font-family: 'Roboto', Helvetica, Arial, sans-serif
  font-smoothing: antialiased
  display: flex

  .main
  .sideNav
    min-height: 100vh
    width: 100%

  .sideNav
    width: 240px
    background-color: #263238

    h2.logo
      padding: 50px 0
      text-align: center
      color: white

  .main
    background-color: $backgroundColor
    padding: 0 5rem
</style>
