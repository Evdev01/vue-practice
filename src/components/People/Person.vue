<template>

  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Full info about person</h1>
        <hr>

        <div class="person__item">
          <div class="person__photo">
            <img src="https://www.pngarts.com/files/3/Avatar-PNG-Free-Download.png" alt="loading">
          </div>
          <div class="person__info">
            <h1>Username : <b>{{ MoreInfoPerson.username }}</b></h1>
            <h2>Name: <b>{{ MoreInfoPerson.name }}</b></h2>
            <p>Id: <b>{{ MoreInfoPerson.id }}</b></p>
            <p>Email: <b>{{ MoreInfoPerson.email }}</b></p>
            <p>Phone: <b>{{ MoreInfoPerson.phone }}</b></p>
            <p>Website: <b>{{ MoreInfoPerson.website }}</b></p>

            <div class="person-btn">
              <router-link to="/users">Back to list</router-link>
            </div>
            </div>



        </div>

      </div>
    </section>
  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Person",
  computed: mapGetters(['MoreInfoPerson']),
  methods: mapActions(['loadPerson']),
  mounted() {
    let id = this.$route.params.id
    this.loadPerson(id)
  }
}
</script>

<style lang="scss">
.person__item {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ff0000;
}

.person__photo {
  width: 50%;
}

.person__photo img {
  max-width: 300px;
  max-height: 300px;
}

.person__info {
  width: 50%;
  flex-direction: column;

  & .person-btn {
    margin-top: 20px;
    padding: 7px;
    text-decoration: underline;
  }
}



</style>
















