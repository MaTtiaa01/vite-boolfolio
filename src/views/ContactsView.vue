<script>
import { store } from '../store.js';
import axios from 'axios';


export default {
    name: 'ContactsView',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            loading: false,
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            this.loading = true

            const data = {
                'name': this.name,
                'email': this.email,
                'message': this.message,
            }

            axios
                .post(`${this.store.base_api_url}/api/contacts`, data)
                .then((response) => {
                    console.log(response);
                    this.success = response.data.success

                    if (this.success) {
                        this.name = ''
                        this.email = ''
                        this.message = ''
                    } else {
                        this.errors = response.data.errors
                    }

                    this.loading = false
                })

        }
    }
}
</script>


<template>
    <div class="container">
        <h1>contacts</h1>
        <form @submit.prevent="sendForm()">

            <div v-if="this.success" class="alert alert-primary" role="alert">
                <strong>The message has been sent successfully</strong>
            </div>


            <!-- name -->
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" id="name" v-model="name" class="form-control" placeholder=""
                    aria-describedby="helpId">
                <small id="helpId" class="text-muted">Type the company name</small>
            </div>
            <!-- error message -->
            <p v-for="error in errors.name">
                {{ error }}
            </p>

            <!-- email -->
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" id="email" v-model="email" class="form-control" placeholder=""
                    aria-describedby="helpId">
                <small id="helpId" class="text-muted">Type your email</small>
            </div>
            <!-- error message -->
            <p v-for="error in errors.email">
                {{ error }}
            </p>

            <!-- message -->
            <!-- TODO CHANGE INPUT IN TEXTAREA -->
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <input type="text" name="message" id="message" v-model="message" class="form-control" placeholder=""
                    aria-describedby="helpId">
                <small id="helpId" class="text-muted">Write the message</small>
            </div>
            <!-- error message -->
            <p v-for="error in errors.message">
                {{ error }}
            </p>

            <button :disabled="loading" class="btn btn-primary" type="submit">
                {{ loading? 'Sending...': 'Contact me' }}
            </button>

        </form>
    </div>
</template>



<style lang="scss" scoped>

</style>