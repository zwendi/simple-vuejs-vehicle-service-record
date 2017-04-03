<template>
  <div class="home">
    <h1>Welcome to simple vehicle record systems</h1>
    <hr>
    <router-link class="btn btn-default" to="/vehicles">Vehicles Inventory</router-link>
    <router-link class="btn btn-default" to="/tasks">All Tasks Available</router-link>
    <router-link class="btn btn-default" to="/records">All Records</router-link>
    <router-link class="btn btn-default" to="/record">Create A New Record</router-link>

  </div>
</template>

<script>
export default {
    name: 'home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
