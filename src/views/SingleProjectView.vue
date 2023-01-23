<script>
import axios from 'axios'

export default {
    name: 'SinglePostView',
    data() {
        return {
            project: null,
            loading: true,
            api_base_url: 'http://127.0.0.1:8000'
        }
    },
    methods: {
        getSingleProject() {
            //console.log(this.$route.params.id);
            const url = this.api_base_url + '/api/projects/' + this.$route.params.id

            axios
                .get(url)
                .then(response => {

                    if (response.data.success) {
                        this.project = response.data.results
                        this.loading = false
                    } else {
                        this.$router.push({ name: 'not-found' })
                    }
                    console.log(response.data.results);
                })
                .catch(error => {
                    console.log(error.message)
                })
        },
        getImagePath(path) {
            if (path) {
                return this.api_base_url + '/storage/' + path
            }
            return '/img/placeholder.png'
        },
    },
    mounted() {
        this.getSingleProject()
        //console.log(this.project);
    }
}
</script>


<template>

    <div class="single-post text-center py-5" v-if="!loading">
        <div class="container">
            <img class="img-fluid " :src="getImagePath(project.cover_img)" :alt="project.title">
            <h2 class="text-uppercase py-3">
                {{ project.title }}
            </h2>
            <div class="content">
                <div class="description" v-if="project.description">
                    {{ project.description }}
                </div>
                <div class="technologies" v-if="project.technologies.length > 0">
                    <strong>TECHNOLOGIES: </strong>
                    <span v-for="technology in project.technologies">
                        #{{ technology.name }}
                    </span>

                </div>
                <div class="type" v-if="project.type">
                    <strong> TYPE: </strong>{{ project.type.name }}
                </div>
            </div>
        </div>
    </div>


</template>



<style lang="scss" scoped>
img {
    max-height: 300px;
}
</style>