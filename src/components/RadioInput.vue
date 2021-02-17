<template>
  <div class="formRadio">
      <form @submit.prevent="onSubmit">
        <h2>Введите нужное кол-во: (max: 10)</h2>
        <input type="text" v-model="res">
        <button class="btnSubmit">Get people</button>
      </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "RadioInput",
  data() {
    return {
      res: ''
    }
  },

  methods: {
    ...mapActions(['fetchPeople']),
    async onSubmit() {
      const result = this.res
      await this.fetchPeople(result)
      this.res = ''
    }
  }
}
</script>

<style lang="scss">
.formRadio {
  flex-direction: column;
}
.btnSubmit {
  padding: 7px;
}
</style>