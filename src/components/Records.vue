<template>
    <div class="records container">
        <h1>Records in the system</h1>
        <router-link class="btn btn-default" to="/">Back To Home</router-link>
        <hr>
        <article v-for="record in records">
            <h3><router-link :to="{ name: 'Record', params: {recordId: record.record_number}}">{{ record.record_number }}</router-link></h3>
        </article>
    </div>
</template>

<script>
  export default {
    name: 'records',
    data() {
      return {
        records: []
      }
    },
    created() {
      this.$http.get('http://localhost/demo/records').then( response => {
        this.records = response.body.records
      }, error => {
        console.error(error)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
