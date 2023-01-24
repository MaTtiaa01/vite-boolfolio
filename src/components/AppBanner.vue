<script>
export default {
    name: 'AppBanner'
}
</script>


<template>
    <section class="jumbotron container-fluid">
        <div class="row row-cols-2 align-items-center">
            <div class="col image">
            </div>
            <div class="col">
                <h1 class="text-center">Full Stack Developer</h1>
            </div>
        </div>

    </section>
</template>



<style lang="scss" scoped>
.jumbotron {
    height: 300px;

    .col.image {
        height: 300px;
        background-image: url('../assets/img/construct.jpg');
        background-position: center;
    }

    .col {
        h1 {
            color: white;
            background-color: black;
            border: 5px solid rgb(150, 1, 1);
            padding: 1rem;
            width: 40%;

        }
    }
}
</style>