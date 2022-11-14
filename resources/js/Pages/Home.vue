<template>
  <div>
    <b-container class="bv-example-row mt-5">
        <router-link to="/client/add" class="btn btn-info text-white mb-4">Profile New Client</router-link>
        <table class="table border">
          <thead>
            <th>First name</th>
            <th>
                Last name
                <button @click="sortByLastName()">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3"
                         aria-hidden="true" fill="currentColor"
                         viewBox="0 0 320 512">
                        <path d="M27.66 224h264.7c24.6 0
                                                36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45
                                                8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54
                                                47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2
                                                317.8 316.9 288 292.3 288z"/>
                    </svg>
                </button>
            </th>
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
        sort: 'desc',
        sortByDesc: false,
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
        },

        sortByLastName() {
            this.sortByDesc = !this.sortByDesc;
            if (this.sortByDesc) {
                this.sort = 'asc';
            }
            else {
                this.sort = 'desc';
            }

            this.axios
                .get(`api/v1/client/sort?order=${this.sort}`)
                .then(res => {
                    this.clients = res.data.data
                });
        }
    },
  }
</script>
