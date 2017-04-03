<template>
    <div class="container vehicle">
        <h1>Vehicle</h1>

        <h2>{{ vehicle.make }} <small>{{ vehicle.model }}</small></h2>
            <router-link class="btn btn-default" to="/vehicles">Back To Vehicles</router-link>
        <hr>

        <form>
            <div class="form-group">
                <label for="odometer">Odometer</label>
                <input type="text" class="form-control" id="odometer" v-model="vehicle.odometer">
            </div>
            <div class="form-group">
                <label for="year">Year</label>
                <input type="text" class="form-control" id="year" v-model="vehicle.year_made">
            </div>
            <div class="form-group">
                <label for="type">Type</label>
                <input type="text" class="form-control" id="type" :value="vehicle.type" disabled>
            </div>
            <div class="form-group">
                <label for="vin">VIN Number</label>
                <input type="text" class="form-control" id="vin" :value="vehicle.vin_number" disabled>
            </div>
            <button type="submit" class="btn btn-default" @click="update">Update</button>
        </form>

        <hr>

        <h2>Service Records</h2>
        <ul>
            <li v-for="record in records"><router-link :to="{ name: 'Record', params: {recordId: record.record_number}}"> {{ record.record_number }} </router-link></li>
        </ul>
    </div>
</template>
<script>
  export default {
    name: 'vehicle',
    data() {
      return {
        vehicle: {},
        records: []
      }
    },
    created() {
      this.fetch()
    },
    methods: {
      update(){
        this.$http.put(`http://localhost/demo/vehicle/${this.$route.params.vin}`, {odometer: this.vehicle.odometer, year_made: this.vehicle.year_made }).then( response => {
          alert("The vehicle has been successfully updated.")
          console.log(response)
        }, error => {
          alert(error.body.Error)
          console.error(error)
          this.fetch()
        })
      },
      fetch()
      {
        //es6 template string syntax
        this.$http.get(`http://localhost/demo/vehicle/${this.$route.params.vin}`).then( response => {
          this.vehicle = response.body
        }, error => {
          console.error(error)
        })
        this.$http.get(`http://localhost/demo/v-record/${this.$route.params.vin}`).then( response => {
          this.records = response.body.records
        }, error => {
          console.error(error)
        })
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
