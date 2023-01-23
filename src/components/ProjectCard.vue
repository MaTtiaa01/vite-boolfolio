<script>
export default {
    name: 'ProjectCard',
    props: {
        title: String,
        description: String,
        img: String,
        project: Object
    },


}


</script>


<template>
    <div class="card p-3 rounded-3 ">
        <img class="card-image" :src="img" alt="">
        <div class="card-body">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
            <router-link class="btn btn-secondary btn-sm"
                :to="{ name: 'single-project', params: { id: project.id } }">Discover more</router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.card {
    height: 500px;
    border: 2px solid black;
    box-shadow: 10px 10px;

    a {
        text-decoration: none;
    }

    img {
        margin: auto;
        border-radius: 10px;
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
}
</style>