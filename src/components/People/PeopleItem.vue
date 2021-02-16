<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>User Name &#8595;</th>
        <th>Name &#8595;</th>
        <th>Phone &#8595;</th>
        <th>More info about person &#8595;</th>
      </tr>
      </thead>

      <tbody>
      <tr :key="person.id">
        <td>{{ person.id }}. {{ person.username }}</td>
        <td>{{ person.name }}</td>
        <td>{{ person.phone }}</td>
        <td><router-link :to="/users/ + person.id" class="link">Click to find out more</router-link></td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>

export default {
  name: "PeopleFor",
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>