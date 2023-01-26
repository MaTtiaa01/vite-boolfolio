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
    <section class="contacts">
        <img src="../assets/img/Unknown.jpg" alt="">
        <div class="container p-4">
            <h3 class="text-center text-white">Get in touch with me</h3>
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

    </section>
</template>



<style lang="scss" scoped>
.contacts {
    position: relative;

    img {
        width: 100%;
        height: 800px;
        object-position: center;
        object-fit: cover;
    }

    .container {
        position: absolute;
        top: 2rem;
        right: 2rem;
        background-color: transparentize($color: #000000, $amount: 0.3);
        border-radius: 30px;

        p {
            color: red;
        }

        form {
            color: white;
        }
    }

}
</style>