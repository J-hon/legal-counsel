<template>
  <div>
    <b-container class="bv-example-row mt-5">
        <router-link to="/" class="btn btn-info text-white">All Clients</router-link>
        <b-form class="mt-5" @submit="onSubmit">
            <!-- <div class="text-sm text-danger">
                <p v-for="error in errors" :key="error"><small>{{ error }}</small></p>
            </div> -->
        <b-row>
            <b-col>
                <b-form-group label="First Name:">
                    <b-form-input
                    v-model="client.first_name"
                    type="text"
                    placeholder="Enter First Name"
                    required
                    ></b-form-input>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label="Last Name:">
                    <b-form-input
                    v-model="client.last_name"
                    type="text"
                    placeholder="Enter Last name"
                    required
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>

        <b-row class="mt-3">
            <b-form-group label="E-mail Address:">
                <b-form-input
                v-model="client.email"
                type="email"
                placeholder="Enter email"
                required
                ></b-form-input>
            </b-form-group>
        </b-row>

        <b-row class="mt-3">
            <b-form-group label="Primary Legal Counsel:">
                <b-form-input
                v-model="client.primary_legal_counsel"
                type="text"
                placeholder="Enter Primary Legal Counsel"
                required
                ></b-form-input>
            </b-form-group>
        </b-row>

        <b-row class="mt-3">
            <b-col>
                <b-form-group label="Date of Birth:">
                    <b-form-datepicker v-model="client.date_of_birth" placeholder="Choose a date" class="mb-2"></b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label="Profile Image:">
                    <b-form-file
                    v-model="client.profile_picture"
                    :state="Boolean(client.profile_picture)"
                    placeholder="Select profile picture"
                    ></b-form-file>
                </b-form-group>
            </b-col>
        </b-row>

        <b-row class="mt-3">
            <b-form-group label="Case Details:">
                <b-form-textarea
                id="textarea"
                v-model="client.case_details"
                placeholder="Enter case details..."
                rows="7"
                ></b-form-textarea>
            </b-form-group>
        </b-row>

        <b-button class="mt-3 text-white" type="submit" variant="info">Create Profile</b-button>
        </b-form>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'add-client',
    data() {
      return {
        client: {
        first_name: '',
        last_name: '',
        email: '',
        primary_legal_counsel: '',
        date_of_birth: '',
        profile_picture: null,
        case_details: ''
        },
      }
    },

    methods: {
      onSubmit(event) {
        event.preventDefault()

        this.axios
            .post(`/api/v1/client`, this.client)
            .then((response) => {
                this.$router.push({ name: 'home' });
            })
            .catch((err) => {
                console.log(err.response)
            });
      },

      makeToast(title, content, variant) {
        this.$bvToast.toast(content, {
          title: title,
          variant: variant,
          solid: true
        })
      }
    }
  }
</script>
