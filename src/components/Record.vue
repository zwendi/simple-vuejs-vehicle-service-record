<template>
    <div class="container record">
        <h1>Service Record (Entering vehicle information here will generate a new vehicle)</h1>

        <h2>{{ record.record_number }}</h2>
        <router-link class="btn btn-default" to="/vehicles">Back To Vehicles</router-link>
        <router-link class="btn btn-default" to="/records">Back To All Records</router-link>
        <router-link class="btn btn-default" to="/record">Create New Record</router-link>
        <hr>

        <form>
            <div class="form-group" v-if="record.task">
                <label for="task">Task name</label>
                <input type="text" class="form-control" id="task_name" v-model="record.task.task_name" >
            </div>
            <div class="form-group" v-if="record.task">
                <label for="descriptopn">Description</label>
                <input type="text" class="form-control" id="descriptopn" v-model="record.task.description" disabled>
            </div>
            <div class="form-group" v-if="record.task">
                <label for="price">Task list price</label>
                <input type="text" class="form-control" id="price" v-model="record.task.price" disabled>
            </div>
            <div class="form-group" v-if="record.vehicle">
                <label for="vin_number">Vehicle Vin number</label>
                <input type="text" class="form-control" id="vin_number" v-model="record.vehicle.vin_number" disabled>
            </div>
            <div class="form-group" v-if="record.vehicle">
                <label for="year">Vehicle year built</label>
                <input type="text" class="form-control" id="year" v-model="record.vehicle.year_made" disabled>
            </div>
            <div class="form-group" v-if="record.vehicle">
                <label for="odometer">Odometer</label>
                <input type="text" class="form-control" id="odometer" v-model="record.vehicle.odometer" disabled>
            </div>
            <div class="form-group">
                <label for="discount">Record discount</label>
                <input type="text" class="form-control" id="discount" v-model="record.discount">
            </div>
            <div class="form-group">
                <label for="charge_price">Actual charge price</label>
                <input type="text" class="form-control" id="charge_price" v-model="record.charge_price" disabled >
            </div>

            <button type="submit" class="btn btn-default" @click="update">Update</button>
            <button type="button" class="btn btn-default" @click="removeRecord">Delete</button>

        </form>

        <hr>

    </div>
</template>
<script>
  export default {
    name: 'record',
    data() {
      return {
       record: {}
      }
    },
    created() {
      this.fetch()
    },
    methods: {
      update(){
        this.$http.put(`http://localhost/demo/record/${this.$route.params.recordId}`, {discount: this.record.discount,task_name: this.record.task.task_name}).then( response => {
          this.fetch()
        }, error => {
          alert(error.body.Error)
          console.error(error)
          this.fetch()
        })
      },
      fetch() {
        //es6 template string syntax
        this.$http.get(`http://localhost/demo/record/${this.$route.params.recordId}`).then( response => {
          this.record = response.body
        }, error => {
           console.error(error)
        })
      },
      removeRecord() {
        //es6 template string syntax
        this.$http.delete(`http://localhost/demo/record/${this.$route.params.recordId}`).then( response => {
           this.$router.push("/vehicles")
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
