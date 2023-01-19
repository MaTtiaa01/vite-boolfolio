<script>
export default {
    name: 'ProjectCard',
    props: {
        title: String,
        description: String,
        img: String
    },


}


</script>


<template>
    <div class="card p-3 border-3 rounde-3">
        <img class="card-image" :src="img" alt="">
        <div class="card-body">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>


<style>

</style>