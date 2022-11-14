<template>
  <div>
    <b-container class="bv-example-row mt-5">
        <router-link to="/client/add" class="btn btn-info text-white mb-4">Profile New Client</router-link>
        <table class="table border">
          <thead>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>&nbsp;</th>
          </thead>

          <tbody v-for="client in clients" :key="client.id">
            <td>{{ client.first_name }}</td>
            <td>{{ client.last_name }}</td>
            <td>{{ client.email }}</td>
            <td><b-link class="btn btn-sm btn-info" @click="openPage(client.id)">View</b-link></td>
          </tbody>
        </table>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 10,
        currentPage: 1,
        clients: []
      }
    },

    created() {
        this.axios
            .get(`api/v1/client`)
            .then(res => {
                this.clients = res.data.data
            });
    },

    methods: {
        openPage(clientId) {
          this.$router.push(`/client/${clientId}`)
        }
    },
  }
</script>
