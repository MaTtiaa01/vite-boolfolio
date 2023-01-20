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
                        /* TODO: handle the not found project  
         404 
         */
                        // https://router.vuejs.org/guide/essentials/navigation.html#navigate-to-a-different-location
                    }
                    console.log(response.data.results);
                })
                .catch(error => {
                    error.log(error.message)
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
        this.getSingleProject()
        //console.log(this.project);
    }
}
</script>


<template>

    <div class="single-post text-center" v-if="!loading">
        <img class="img-fluid " :src="getImagePath(project.cover_img)" :alt="project.title">
        <div class="container">
            <h2>
                {{ project.title }}
            </h2>
            <div class="content">
                {{ project.description }}
                <div class="technologies">
                    <strong>TECHNOLOGIES: </strong> {{ project.technologies.name }}
                </div>
                <div class="type">
                    <strong> TYPE: </strong>{{ project.type.name }}
                </div>
            </div>
        </div>
    </div>


</template>



<style lang="scss" scoped>

</style>