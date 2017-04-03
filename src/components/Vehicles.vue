<template>
    <div class="vehicles container">
        <h1>Vehicles Vin Number</h1>
        <router-link class="btn btn-default" to="/">Back To Home</router-link>
        <hr>
        <article v-for="vehicle in vehicles">
            <h3><router-link :to="{ name: 'Vehicle', params: {vin: vehicle.vin_number}}">{{ vehicle.vin_number }}</router-link></h3>
        </article>
    </div>
</template>

<script>
  export default {
    name: 'vehicles',
    data() {
      return {
        vehicles: []
      }
    },
    created() {
        this.$http.get('http://localhost/demo/vehicles').then( response => {
          this.vehicles = response.body.vehicles
        }, error => {
          console.error(error)
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
