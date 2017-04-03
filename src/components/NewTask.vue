<template>
    <div class="container record">
        <h1>Task <small>(tire rotation, charge battery, oil change)</small></h1>

        <router-link class="btn btn-default" to="/tasks">Back To Tasks</router-link>
        <hr>

        <form>
            <div class="form-group">
                <label for="task_name">Task name <small>(task name must use - to connected,javascript will convert space it to '20%')</small></label>
                <input type="text" class="form-control" id="task_name" v-model="task.task_name">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description" v-model="task.description">
            </div>
            <div class="form-group">
                <label for="price">List price</label>
                <input type="number" class="form-control" id="price" v-model="task.price">
            </div>
            <div class="form-group">
                <label for="type">Type(tire rotation, oil change, charge battery)</label>
                <input type="text" class="form-control" id="type" v-model="task.type">
            </div>
            <button type="submit" class="btn btn-default" @click="update">Submit</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'new-task',
    data() {
      return {
          task:{
            task_name :'',
            description:'',
            price:'',
            type:''
          }
      }
    },
    methods: {
      update(){
        this.$http.post(`http://localhost/demo/task`, this.task).then( response => {
          alert("Successfully create task:"+this.task.task_name);
          this.$router.push("/tasks");
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
