<template>
  <div class="wrapper">
    <Header/>



    <hr>


    <router-view/>


  </div>
</template>

<script>

import {mapGetters} from 'vuex'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {Header},
  computed: mapGetters(['allPeople']),

}
</script>

<style lang="scss">

</style>
