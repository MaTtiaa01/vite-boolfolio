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
        },
        nextPage() {
            this.getProject(this.projects.next_page_url)
        },
        prevPage() {
            this.getProject(this.projects.prev_page_url)
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
                    <ProjectCard :title="project.title" :description="project.description" :project="project"
                        :img="getImagePath(project.cover_img)">

                    </ProjectCard>
                </div>
            </div>
            <div v-else>No projects available yet...</div>
            <nav v-if="projects" aria-label="Page navigation">
                <ul class="pagination">
                    <li class="page-item disabled" v-if="projects.prev_page_url" @click="prevPage()">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                        projects.current_page
                    }}</a></li>
                    <li class="page-item" v-if="projects.next_page_url" @click="nextPage()">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>

</template>



<style lang="scss" scoped>
.container {
    nav {
        margin-top: 3rem;
    }
}
</style>