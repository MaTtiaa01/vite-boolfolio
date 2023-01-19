<script>

import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
    components: {
        ProjectCard
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

<template v-if="posts">
    <section>
        <div class="container">
            <div class="row">
                <div class="col" v-for="post in posts.data">
                    <ProjectCard>

                    </ProjectCard>
                </div>
            </div>
        </div>
    </section>
</template>


<style>

</style>
