<script>


export default {
    name: 'AboutView',

}
</script>


<template>
    <section class="jumbo">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 align-items-center">
                <div class="col px-5">
                    <h1>
                        Flish survelliance because you love Freedom
                    </h1>
                    <p class="py-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quis earum laborum minus eum
                        laudantium quidem aspernatur aliquam veritatis odit ea aliquid nam dolorum saepe tenetur vitae
                        dignissimos voluptas hic nemo, blanditiis ipsa quod id laboriosam! Dolores officiis ipsa
                        delectus rerum neque, accusamus, ab sunt exercitationem sit qui perspiciatis quia.
                    </p>
                    <a href="#" class="btn btn-secondary mb-5">discover my projects</a>
                    <div class="ball"></div>
                    <div class="ball_2"></div>
                    <div class="ball_3"></div>

                </div>
                <div class="col">
                    <img src="../assets/img/jumbo.png" alt="">
                </div>
            </div>
        </div>
    </section>

</template>



<style lang="scss" scoped>
.jumbo {
    .col {
        position: relative;
        padding-top: 3rem;
        padding-bottom: 3rem;

        .ball {
            width: 40px;
            aspect-ratio: 1/1;
            background-color: rgb(171, 111, 171);
            border-radius: 50%;
            position: absolute;
            right: 0;
            bottom: 0;
        }

        .ball_2 {
            width: 60px;
            aspect-ratio: 1/1;
            background-color: rgb(161, 82, 161);
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 0;
        }

        .ball_3 {
            width: 50px;
            aspect-ratio: 1/1;
            background-color: rgb(171, 111, 171);
            border-radius: 50%;
            position: absolute;
            left: 5rem;
            bottom: 1rem;
        }
    }
}
</style>