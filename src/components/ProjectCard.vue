<script>
export default {
    name: 'ProjectCard',
    props: {
        title: String,
        description: String,
        img: String,
        project: Object
    },
    methods: {
        backgroundStyles(image) {
            return {
                'background-image': `url(${image})`,
            }
        }
    }


}


</script>


<template>
    <div class="card rounded-3 d-flex align-items-center justify-content-center">
        <div class="computer ">
            <img class="frame" src="https://www.bebold.ch/img/home/macbook-white.png" alt="">
            <router-link :to="{ name: 'single-project', params: { id: project.id } }" id="gif"
                :style="backgroundStyles(img)"></router-link>
        </div>
        <!-- <div class="box_body">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
            <router-link class="btn btn-secondary btn-sm"
                :to="{ name: 'single-project', params: { id: project.id } }">Discover more</router-link>
        </div> -->
    </div>
</template>


<style lang="scss" scoped>
.computer {
    position: relative;
    width: 100%;
    height: 300px;
    opacity: 1;

}

#gif {
    position: absolute;
    top: 48.5%;
    left: 50%;
    width: 50%;
    padding-top: 32%;
    transform: translate(-50%, -50%);
    background-size: cover;
    background-position-y: 50%;
}


.computer img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: auto;
    transform: translate(-50%, -50%);
}

.card {
    border: none;
    background-color: transparent;

    a {
        text-decoration: none;
    }
}
</style>