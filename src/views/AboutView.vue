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
                    <div class="d-none d-lg-block ball"></div>
                    <div class="d-none d-lg-block ball_2"></div>
                    <div class="d-none d-lg-block ball_3"></div>

                </div>
                <div class="col">
                    <img src="../assets/img/jumbo.png" alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- /jumbo -->

    <section class="languages py-5">
        <div class="container">
            <div class="row g-5">
                <div class="d-none d-md-block col col-md-2">
                    <h2><span class="text-uppercase">Languages</span> <br>that I speak</h2>
                </div>
                <div class="col-12 col-md-10">
                    <ul class="d-flex align-items-center justify-content-around">
                        <li>
                            <img src="../assets/img/Bootstrap_logo.svg.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/css-badge.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/html-badge.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/js-badge.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/PHP-logo.svg.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/vue-badge.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/vite-badge.svg" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/mysql.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/Python-logo-notext.svg.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/laravel-badge.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/sass.png" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- /languages -->

    <section class="core py-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 responsive g-4">
                <div class="col text">

                    <h2>
                        All the <strong>Devices</strong> <br> You Want
                    </h2>
                    <p class="my-5">Build your application for every device</p>
                    <a class="btn btn-secondary" href="">Contact Me</a>

                    <img src="../assets/img/Minipix-One.png" alt="">
                </div>
                <div class="col pt-5">
                    <img class="mt-5" src="../assets/img/responsive.png" alt="">
                </div>
            </div>
            <!-- /responsive section -->


            <div class=" row way_to_work row-cols-1 row-cols-md-2 g-4">
                <div class="col"></div>
                <div class="col text">
                    <h2>Find <strong>The Best</strong> <br> way to work</h2>
                    <a class="btn btn-secondary" href="#">Contact Me</a>
                </div>
            </div>
            <!-- /work section -->
        </div>

    </section>
    <!-- /core -->

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

.languages {
    background-color: rgb(39, 39, 49);
    margin: 3rem 0;
    box-shadow: 0px 10px 5px #888, 0px -10px 5px #888;

    .row {
        .col-md-2 {
            h2 {
                font-weight: bold;
                color: antiquewhite;
                font-size: 20px;

                span {
                    color: rgba(114, 25, 114, 0.837);
                    font-size: 30px;
                }
            }
        }

        .col-md-10 {
            ul {
                list-style: none;

                li {
                    padding: 0 0.3rem;

                    img {
                        width: 50px;
                    }
                }
            }

        }
    }
}

.core {
    .row.responsive {
        .col.text {
            position: relative;

            img {
                position: absolute;
                top: -3rem;
                left: 0;
                opacity: 0.1;
            }


            h2 {
                font-size: 60px;
            }

            p {
                font-weight: bold;
            }


        }
    }

    .row.way_to_work {
        margin: 5rem 0;

        .col.text {
            position: relative;

            img {
                position: absolute;
                top: -3rem;
                left: 0;
                opacity: 0.1;
            }

            h2 {
                font-size: 60px;
                margin-bottom: 3rem;
            }


        }
    }
}
</style>