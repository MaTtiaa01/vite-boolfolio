<script>
import axios from 'axios'

export default {
    name: 'SinglePostView',
    data() {
        return {
            post: {},
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
                    //console.log(response.data);
                    if (response.data.success) {
                        this.post = response.data.results
                        this.loading = false
                    } else {
                        /* TODO: handle the not found post  
         404 
         */
                        // https://router.vuejs.org/guide/essentials/navigation.html#navigate-to-a-different-location
                    }
                })
                .catch(error => {
                    error.log(error.message)
                })
        }
    },
    mounted() {
        this.getSingleProject()
    }
}
</script>


<template>

    <div class="single_post">
        {{ $route.params.id }}

        <h1>single post</h1>
    </div>

</template>



<style lang="scss" scoped>

</style>