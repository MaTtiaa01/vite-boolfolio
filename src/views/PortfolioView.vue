<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';

export default {
    name: 'PortfolioView',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: {},
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
                    this.projects = response.data.results
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
    <section class="project_list py-5">
        <div class="container">
            <h1 class="text-uppercase py-3">Portoflio</h1>
            <div class="row row-cols-2 row-cols-md-3 g-4" v-if="projects">
                <div class="col" v-for="project in projects.data">
                    <ProjectCard :title="project.title" :description="project.description"
                        :img="getImagePath(project.cover_img)">

                    </ProjectCard>
                </div>
            </div>
            <div v-else>No projects available yet...</div>
        </div>
    </section>

</template>



<style lang="scss" scoped>

</style>