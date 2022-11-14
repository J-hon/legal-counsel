<template>
  <div>
    <b-container class="bv-example-row mt-5">
        <router-link to="/" class="btn btn-info text-white">Back</router-link>

        <b-row>
                <b-col sm="10">
                    <b-row>
                        <b-col>
                            First name: {{ client.first_name }}
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col>
                            Last name: {{ client.last_name }}
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col>
                            Email: {{ client.email }}
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col>
                            Primary Legal Counsel: {{ client.primary_legal_counsel }}
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col>
                            Date of birth: {{ client.date_of_birth }}
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col>
                            Case details: {{ client.case_details }}
                        </b-col>
                    </b-row>
                </b-col>
                <b-col>
                    <div>
                        <b-img :src="client.profile_picture"></b-img>
                    </div>
                </b-col>
            </b-row>
    </b-container>
  </div>
</template>

<script>
    export default {
        name: 'view-client',
        data() {
            return {
                client: {},
            }
        },
        created() {
            this.axios
                .get(`/api/v1/client/${this.$route.params.id}`)
                .then((response) => {
                    this.client = response.data.data
                });
        }
    }
</script>
