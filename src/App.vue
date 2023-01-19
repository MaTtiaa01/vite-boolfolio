<script>

import axios from 'axios';

export default {
    components: {

    },
    data() {
        return {
            posts: null,
            error: null,
            loading: true,
            base_api_url: 'http://127.0.0.1:8000'
        }
    },
    methods: {
        getProject(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results)
                    this.posts = response.data.results
                    this.loading = false
                })
                .catch(error => {
                    error.log(error.message)
                    this.error = error.message
                    this.loading = false
                })
        }
    },

    mounted() {
        this.getProject(this.base_api_url + '/api/project')
    }
}
</script>

<template>
    <h1>projects</h1>
</template>


<style>

</style>
