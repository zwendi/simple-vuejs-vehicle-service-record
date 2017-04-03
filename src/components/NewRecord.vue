<template>
    <div class="container record">
        <h1>Service Record</h1>

        <router-link class="btn btn-default" to="/vehicles">Back To Vehicles</router-link>
        <router-link class="btn btn-default" to="/records">Back To All Records</router-link>
        <router-link class="btn btn-default" to="/record">Create New Record</router-link>
        <hr>

        <form>
            <div class="form-group">
                <label for="record_number">Record number</label>
                <input type="text" class="form-control" id="record_number" v-model="record.record_number">
            </div>
            <div class="form-group">
                <label for="task_name">Task name</label>
                <input type="text" class="form-control" id="task_name" v-model="record.task.task_name">
            </div>
            <div class="form-group">
                <label for="vin_number">Vehicle Vin number</label>
                <input type="text" class="form-control" id="vin_number" v-model="record.vehicle.vin_number">
            </div>
            <div class="form-group">
                <label for="year">Vehicle year built</label>
                <input type="number" class="form-control" id="year" v-model="record.vehicle.year_made">
            </div>
            <div class="form-group">
                <label for="make">Make</label>
                <input type="text" class="form-control" id="make" v-model="record.vehicle.make">
            </div>
            <div class="form-group">
                <label for="model">Model</label>
                <input type="text" class="form-control" id="model" v-model="record.vehicle.model">
            </div>
            <div class="form-group">
                <label for="type">Vehicle type</label>
                <input type="text" class="form-control" id="type" v-model="record.vehicle.type">
            </div>
            <div class="form-group" >
                <label for="odometer">Odometer</label>
                <input type="number" class="form-control" id="odometer" v-model="record.vehicle.odometer">
            </div>
            <div class="form-group">
                <label for="discount">Discount</label>
                <input type="text" class="form-control" id="discount" v-model="record.discount">
            </div>

            <button type="submit" class="btn btn-default" @click="update">Submit</button>

        </form>

        <hr>

    </div>
</template>

<script>
  export default {
    name: 'new-record',
    data() {
      return {
        record: {
          record_number :'',
          discount : '',
          task:{
            task_name :''
          },
          vehicle:{
             vin_number:'',
             make:'',
            model:'',
            odometer:'',
            year_made:'',
            type:''
          }
        }
      }
    },
    created() {
    },
    methods: {
      update(){
        this.$http.post(`http://localhost/demo/record`, this.record).then( response => {
            alert("Successfully create record:"+this.record.record_number);
           this.$router.push("/record/"+this.record.record_number);
        }, error => {
          alert(error.body.Error)
          console.error(error)
        })
      }

    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
