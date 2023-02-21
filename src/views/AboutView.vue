<script>
import AppImgBanner from '../components/AppImgBanner.vue';

export default {
    name: 'AboutView',
    components: {
        AppImgBanner
    }
}
</script>


<template>
    <section class="jumbo">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 align-items-center">
                <div class="col px-5">
                    <h1>
                        Hi! I'm Mattia <br>
                        <strong>Full stack Web Developer</strong>
                    </h1>
                    <p class="py-4">
                        I'm a junior developer with a lot of...
                    </p>
                    <router-link :to="{ name: 'portfolio' }" class="btn btn-secondary mb-5">Discover My
                        Projects</router-link>
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

    <section class="all_devices py-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 responsive g-4">
                <div class="col text">

                    <h2>
                        All the <strong>Devices</strong> <br> You Want
                    </h2>
                    <p class="my-5">
                        <span class="fs-4"><strong> Build</strong> your application for every device</span>

                    <div class="my-3">More devices <strong>=</strong> more people connected </div>

                    <span>Make your websites <strong>responsive</strong> </span>

                    </p>
                    <router-link class="btn btn-secondary" :to="{ name: 'contacts' }">Contact Me</router-link>

                    <img src="../assets/img/Minipix-One.png" alt="">
                </div>
                <div class="col pt-5">
                    <img class="mt-5" src="../assets/img/responsive.png" alt="">
                </div>
            </div>
            <!-- /responsive section -->

        </div>

    </section>
    <!-- /all_devices -->

    <div class="rotate">
        <AppImgBanner></AppImgBanner>

    </div>

    <section class="work ">
        <div class="container">
            <div class=" row way_to_work row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="runner"></div>
                </div>
                <div class="col text">
                    <div class="box">
                        <h2>Find <strong>The Best</strong> <br> way to work</h2>
                        <router-link class="btn btn-secondary" :to="{ name: 'contacts' }">Contact Me</router-link>
                    </div>
                </div>
            </div>
            <!-- /work section -->
        </div>
        <AppImgBanner></AppImgBanner>
    </section>
</template>



<style lang="scss" scoped>
.jumbo {
    .col {
        position: relative;
        padding-top: 3rem;
        padding-bottom: 3rem;

        a {
            font-weight: bold;
        }

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

.all_devices {
    .row.responsive {
        .col.text {
            position: relative;

            img {
                position: absolute;
                top: -3rem;
                left: 0;
                opacity: 0.1;
                z-index: -1;
            }


            h2 {
                font-size: 60px;
            }

            p {
                font-weight: bold;
            }

            a {
                font-weight: bold;
            }


        }
    }
}

.rotate {
    transform: rotate(180deg);
}

.work {

    .row.way_to_work {
        margin: 5rem 0;

        .col {

            .runner {
                background-image: url(../assets/img/walking.jpg);
                width: 340px;
                height: 600px;
                margin: 0 auto;
                animation: walk 1s steps(5) infinite;

                @keyframes walk {
                    from {
                        background-position: 0px;
                    }

                    to {
                        background-position: -2000px;
                    }
                }
            }
        }


        .col.text {
            position: relative;

            .box {
                width: 80%;
                padding: 4rem 2rem;
                background-color: bisque;
                border: 3px solid black;
                box-shadow: 10px 10px grey;

                h2 {
                    font-size: 60px;
                    margin-bottom: 3rem;
                }

                a {
                    color: bisque;
                    font-weight: bold;
                }

            }


        }
    }
}
</style>