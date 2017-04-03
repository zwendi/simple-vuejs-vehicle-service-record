<template>
    <div class="container vehicle">
        <h1>Task: {{ task.task_name }} </h1>

        <router-link class="btn btn-default" to="/tasks">Back To tasks</router-link>
        <router-link class="btn btn-default" to="/task">Create New Task</router-link>

        <hr>

        <form>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description" :value="task.description" disabled>
            </div>
            <div class="form-group">
                <label for="price">Task price</label>
                <input type="text" class="form-control" id="price" :value="task.price" disabled>
            </div>
        </form>

    </div>
</template>
<script>
  export default {
    name: 'task',
    data() {
      return {
        task: {}
      }
    },
    created() {
      //es6 template string syntax
      this.$http.get(`http://localhost/demo/task/${this.$route.params.name}`).then( response => {
        this.task = response.body
      }, error => {
        console.error(error)
      })
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
