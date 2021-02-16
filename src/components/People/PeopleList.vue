<template>

  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="people__info">
          <h1>People List</h1>
          <div class="from">
           <RadioInput/>
          </div>
        </div>

        <hr>

        <Loader v-if="loading"/>

        <PeopleItem
            v-if="!loading"
            v-for="person in allPeople"
            :key="person.id"
            :person="person"
        />
      </div>
    </section>
  </div>


</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import PeopleItem from '@/components/People/PeopleItem'
import Loader from '@/components/Loader'
import RadioInput from '@/components/RadioInput'

export default {
  name: "PeopleInfo",
  data() {
    return {
      loading: false,
    }
  },
  components: {RadioInput, Loader, PeopleItem},
  computed: mapGetters(['allPeople']),
  methods: mapActions(['fetchPeople']),
  async mounted() {
      this.loading = true
      await this.fetchPeople(5)
      this.loading = false
  }
}
</script>

<style scoped>
h1  {
  font-size: 24px;
  font-weight: bold;
}
  .people__info {
    display: flex;
    justify-content: space-between;
  }
</style>