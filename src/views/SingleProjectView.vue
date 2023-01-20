<script>
import axios from 'axios'

export default {
    name: 'SinglePostView',
    data() {
        return {
            project: [],
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
                    console.log(response.data.results.technologies);
                })
                .catch(error => {
                    error.log(error.message)
                })
        }
    },
    mounted() {
        this.getSingleProject()
        //console.log(this.project);
    }
}
</script>


<template>

    <div class="single-post" v-if="project">
        <img class="img-fluid w-100" :src="api_base_url + '/storage/' + project.cover_img" :alt="project.title">
        <div class="container">
            <h2>
                {{ project.title }}
            </h2>
            <div class="content">
                {{ project.description }}
            </div>
        </div>
    </div>

</template>



<style lang="scss" scoped>

</style>