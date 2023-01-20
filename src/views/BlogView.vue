<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';

export default {
    name: 'BlogView',
    components: {
        ProjectCard
    },
    data() {
        return {
            posts: {},
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
        },
        getImagePath(path) {
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return '/img/placeholder.png'
        }
    },

    mounted() {
        this.getProject(this.base_api_url + '/api/project')
    }
}
</script>


<template>
    <h1>blog</h1>
    <section class="project_list">
        <div class="container">
            <div class="row row-cols-2 row-cols-md-4 g-4" v-if="posts">
                <div class="col" v-for="post in posts.data">
                    <ProjectCard :title="post.title" :description="post.description"
                        :img="getImagePath(post.cover_img)">

                    </ProjectCard>
                </div>
            </div>
            <div v-else>No posts available yet...</div>
        </div>
    </section>

</template>



<style lang="scss" scoped>

</style>