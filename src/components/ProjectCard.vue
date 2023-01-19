<script>
export default {
    name: 'ProjectCard',
    props: {
        title: String,
        description: String
    }


}


</script>


<template>
    <div class="card">
        <img class="card-img" src="{{ img }}" alt="">
        <div class="card-body">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>


<style>

</style>