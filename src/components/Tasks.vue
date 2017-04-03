<template>
    <div class="tasks container">
        <h1>Tasks in the system</h1>
        <router-link class="btn btn-default" to="/">Back To Home</router-link>
        <hr>
        <article v-for="task in tasks">
            <h3><router-link :to="{ name: 'Task', params: {name: task.task_name}}">{{ task.task_name }}</router-link></h3>
        </article>
    </div>
</template>

<script>
  export default {
    name: 'tasks',
    data() {
      return {
        tasks: []
      }
    },
    created() {
      this.$http.get('http://localhost/demo/tasks').then( response => {
        this.tasks = response.body.tasks
      }, error => {
        console.error(error)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
