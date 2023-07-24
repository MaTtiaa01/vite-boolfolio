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
                        I'm a <span>developer</span> with a lot of... <br>
                        Ok, let's be honest, <span>Coding is so powerful and rewarding</span>, I am always looking for new
                        technologies
                        from AI to 3D object, gaming, blockchain... I could go on for huors.
                        The important thing to keep in mind is to work hard and find out new ways, new ideas and new
                        technologies. <br>
                        That is exactly what I'm personally trying to <span>achieve day by day</span>. <br>
                        <span>Coding</span> for me is a <span>lifestyle</span> and discovering this fascinatig world makes
                        me so grateful.
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
            <div class="row ">
                <div class="d-none d-md-block col col-md-2">
                    <h2><span class="text-uppercase">Tech</span> <br>stack</h2>
                </div>
                <div class="col-10">
                    <div class="col-md-10">
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
                    <div class="col-md-10">
                        <ul class="d-flex align-items-center justify-content-around">
                            <li class="bigger">
                                <img src="../assets/img/mysql.png" alt="">
                            </li>
                            <li class="bigger">
                                <img src="../assets/img/nodejs.png" alt="">
                            </li>
                            <li class="bigger color">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120" height="60"><g transform="matrix(.038819 0 0 .038819 -.560501 8.162276)"><defs><path id="A" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"/><path id="B" d="M79.564 38.728q-.812 0-1.518-.262-.68-.262-1.152-.707-.524-.497-.785-1.152-.262-.654-.262-1.597v-7.827h-2.33v-2.016h2.33v-3.77h2.225v3.77h3.246v2.016h-3.246v7.278q0 1.1.42 1.623.497.576 1.44.576.76 0 1.466-.445v2.173q-.393.183-.812.262-.393.08-1.02.08z"/></defs><clipPath id="C"><use xlink:href="#A"/></clipPath><g clip-path="url(#C)"><path d="M520 939.5L959.4 500H639.9L360.3 779.7z" fill="#39cefd"/></g><defs><path id="D" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"/></defs><clipPath id="E"><use xlink:href="#D"/></clipPath><path clip-path="url(#E)" d="M120.6 540L639.9 20.7h319.5l-679 679.1z" fill="#39cefd"/><defs><path id="F" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"/></defs><clipPath id="G"><use xlink:href="#F"/></clipPath><path clip-path="url(#G)" d="M639.9 1059.3h319.5L679.8 779.7 520 939.5z" fill="#03569b"/><defs><path id="H" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"/></defs><clipPath id="I"><use xlink:href="#H"/></clipPath><linearGradient id="J" gradientUnits="userSpaceOnUse" x1="566.635" y1="970.339" x2="685.65" y2="851.324"><stop offset="0" stop-color="#1a237e" stop-opacity=".4"/><stop offset="1" stop-color="#1a237e" stop-opacity="0"/></linearGradient><path clip-path="url(#I)" d="M679.8 779.7L520 939.5l237-82.1z" fill="url(#J)"/><defs><path id="K" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"/></defs><clipPath id="L"><use xlink:href="#K"/></clipPath><g clip-path="url(#L)"><path d="M360.282 779.645L520.086 619.84 679.9 779.645 520.086 939.45z" fill="#16b9fd"/></g><radialGradient id="M" cx="7824.659" cy="-2855.979" r="5082.889" gradientTransform="matrix(0.25,0,0,-0.25,-1812,-622.5)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><path d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z" fill="url(#M)"/></g><g fill="gray"><path d="M40.62 19.774h10.84v2.12h-8.64v6.414h7.8v2.094h-7.8v8.115h-2.2V19.774zm13.463 0h2.225v18.744h-2.225V19.774zm10.365 19.163q-2.408 0-3.7-1.414Q59.5 36.1 59.5 33.57v-8.403h2.225v8.063q0 1.9.864 2.8.864.9 2.33.9 1.126 0 2-.602.9-.602 1.36-1.57.497-.97.497-2.042v-7.54H71v13.35h-2.12V36.58h-.105q-.55.995-1.754 1.675-1.204.68-2.566.68z"/><use xlink:href="#B"/><use xlink:href="#B" x="9.436"/><path d="M98.8 38.937q-1.9 0-3.43-.916-1.518-.916-2.382-2.513-.838-1.623-.838-3.64 0-1.937.785-3.56.812-1.623 2.278-2.592 1.466-.97 3.403-.97 1.963 0 3.403.9 1.44.864 2.2 2.408.785 1.545.785 3.534 0 .393-.08.68h-10.55q.08 1.518.733 2.566.654 1.047 1.65 1.57 1.02.524 2.12.524 2.566 0 3.953-2.408l1.885.916q-.864 1.623-2.356 2.566-1.466.942-3.56.942zm3.848-8.508q-.052-.838-.47-1.675-.42-.838-1.335-1.414-.9-.576-2.25-.576-1.57 0-2.67 1.02-1.073.995-1.414 2.644h8.142zm4.934-5.262h2.12v2.147h.105q.393-1.1 1.518-1.806 1.126-.733 2.356-.733.916 0 1.57.262v2.408q-.838-.42-1.885-.42-.97 0-1.78.55-.812.55-1.3 1.492-.47.916-.47 2v7.46h-2.225v-13.35z"/></g></svg>
                            </li>
                            <li class="bigger">
                                <img src="../assets/img/git.png" alt="">
                            </li>
                            <li class="bigger color">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120" height="60"><filter height="2" width="2" y="-.5" x="-.5" id="A"><feGaussianBlur in="SourceAlpha" stdDeviation="3.5"/><feOffset dy="-9" dx="1"/><feComposite k3="1" operator="arithmetic" in2="SourceAlpha" k2="-1" k1="0" k4="0"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/></filter><filter height="2" width="2" y="-.5" x="-.5" id="B"><feGaussianBlur in="SourceAlpha" stdDeviation="17.5"/><feOffset/><feComposite k3="1" operator="arithmetic" in2="SourceAlpha" k2="-1" k1="0" k4="0"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/></filter><g transform="matrix(.090203 0 0 .090203 11.921255 15.418666)"><path d="M0 282.998l2.123-2.973L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.846 43.114 6.95z" fill="#ffc24a"/><use xlink:href="#D" fill="#ffa712"/><g filter="url(#B)"><use xlink:href="#D"/></g><path d="M135.005 150.38l32.955-33.75-32.964-62.93c-3.13-5.957-11.867-5.974-14.963 0L102.42 87.3v2.86z" fill="#f4bd62"/><use xlink:href="#C" fill="#ffa50e"/><g filter="url(#A)"><use xlink:href="#C"/></g><path d="M102.513 87.105L0 282.998l.962-.968 3.496-1.42 128.478-128 1.626-4.43z" fill="#f6820c"/><path d="M139.12 347.55l116.275-64.848L222.2 78.2c-1.04-6.398-8.888-8.928-13.467-4.34L0 282.998l115.608 64.548a24.13 24.13 0 0 0 23.513.005" fill="#fde068"/><path d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.56-8.977-12.104-4.424L1.3 282.6l114.338 63.9c7.25 4.048 16.08 4.05 23.334.006z" fill="#fcca3f"/><path d="M139.12 345.64c-7.3 4.076-16.207 4.074-23.513-.006L.93 282.015l-.93.983 115.608 64.548c7.306 4.08 16.204 4.08 23.513.005l116.275-64.848-.285-1.752z" fill="#eeab37"/></g><path d="M42.9 38.237h-1.785V24.345h8.1v1.707H42.9v4.56h5.705v1.67H42.9zm9.453-11.894c-.246.246-.543.37-.892.37a1.21 1.21 0 0 1-.892-.37 1.22 1.22 0 0 1-.37-.892 1.21 1.21 0 0 1 .37-.892 1.22 1.22 0 0 1 .892-.37 1.21 1.21 0 0 1 .892.37 1.22 1.22 0 0 1 .37.892 1.21 1.21 0 0 1-.37.892zm0 11.894h-1.785V28.73h1.785zm3.853 0H54.42V28.73h1.707v1.552h.077c.18-.517.553-.944 1.116-1.28s1.1-.505 1.64-.505.977.078 1.34.233l-.68 1.67c-.233-.1-.55-.136-.95-.136-.647 0-1.22.255-1.717.766s-.747 1.18-.747 2.008v5.2zm8.788.3c-1.436 0-2.603-.478-3.502-1.436s-1.35-2.166-1.35-3.628c0-1.384.436-2.574 1.3-3.57s2-1.494 3.347-1.494c1.4 0 2.538.46 3.386 1.378s1.27 2.147 1.27 3.687l-.02.33h-7.5c.052.957.372 1.714.96 2.27a2.91 2.91 0 0 0 2.067.834c1.28 0 2.147-.543 2.6-1.63l1.6.66c-.3.737-.822 1.355-1.533 1.853s-1.585.747-2.62.747zm2.56-6.2c-.04-.543-.288-1.06-.747-1.552s-1.142-.737-2.047-.737c-.66 0-1.232.207-1.717.62s-.818.97-1 1.67h5.5zm8.363 6.2c-.725 0-1.375-.155-1.95-.466s-1.006-.698-1.3-1.164H72.6v1.32h-1.707V24.345h1.785v4.385l-.078 1.32h.078c.285-.466.715-.854 1.3-1.164s1.226-.466 1.95-.466c1.23 0 2.3.485 3.182 1.455s1.34 2.173 1.34 3.6-.446 2.64-1.34 3.6-1.953 1.455-3.182 1.455zm-.3-1.63c.828 0 1.54-.314 2.134-.94s.892-1.458.892-2.493-.298-1.866-.892-2.493-1.307-.94-2.134-.94a2.81 2.81 0 0 0-2.144.93c-.588.63-.883 1.455-.883 2.503s.294 1.882.883 2.503 1.303.932 2.144.932zm9.513 1.63c-1 0-1.853-.3-2.532-.873s-1.02-1.352-1.02-2.3c0-1.035.4-1.846 1.203-2.435s1.792-.883 2.97-.883c1.048 0 1.908.194 2.58.582v-.272c0-.7-.24-1.258-.718-1.678s-1.067-.63-1.766-.63c-.518 0-.987.123-1.407.37a1.9 1.9 0 0 0-.863 1.009l-1.63-.698c.22-.57.653-1.096 1.3-1.58s1.5-.728 2.56-.728c1.216 0 2.225.356 3.027 1.067s1.203 1.714 1.203 3.007v5.743H88.34v-1.32h-.078c-.712 1.086-1.753 1.63-3.124 1.63zm.3-1.63c.737 0 1.407-.275 2.008-.825s.902-1.2.902-1.95c-.504-.414-1.26-.62-2.27-.62-.867 0-1.52.188-1.96.563s-.66.815-.66 1.32c0 .466.2.834.602 1.106s.86.408 1.378.408zm9.8 1.63c-1.06 0-1.937-.26-2.63-.776a4.59 4.59 0 0 1-1.523-1.94l1.6-.66c.504 1.2 1.365 1.785 2.58 1.785.556 0 1.012-.123 1.368-.37s.534-.57.534-.97c0-.62-.433-1.04-1.3-1.26l-1.92-.466c-.608-.155-1.184-.45-1.727-.883S91.4 32 91.4 31.252c0-.84.372-1.523 1.116-2.047s1.627-.786 2.65-.786c.84 0 1.6.2 2.25.572s1.132.928 1.417 1.64l-1.552.64c-.35-.84-1.074-1.26-2.173-1.26-.53 0-.977.1-1.34.33s-.543.517-.543.892c0 .543.42.912 1.26 1.106l1.882.446c.892.207 1.552.563 1.98 1.067s.64 1.074.64 1.707c0 .854-.35 1.565-1.048 2.134s-1.598.854-2.697.854zm9.507 0c-1.436 0-2.604-.478-3.502-1.436s-1.35-2.166-1.35-3.628c0-1.384.436-2.574 1.3-3.57s2-1.494 3.347-1.494c1.4 0 2.538.46 3.386 1.378s1.27 2.147 1.27 3.687v.33h-7.5c.05.957.372 1.714.96 2.27a2.91 2.91 0 0 0 2.066.834c1.28 0 2.147-.543 2.6-1.63l1.6.66c-.3.737-.822 1.355-1.533 1.853s-1.585.747-2.62.747zm2.56-6.2c-.04-.543-.288-1.06-.747-1.552s-1.142-.737-2.047-.737a2.56 2.56 0 0 0-1.717.621c-.485.414-.818.97-1 1.67h5.5z" fill="#63666a"/><defs><path id="C" d="M134.417 148.974l32.038-32.812-32.038-61.007c-3.042-5.8-10.433-6.398-13.443-.6l-17.705 34.1-.53 1.744z"/><path id="D" d="M1.253 280.73l1.605-3.13L102.2 89.083 58.062 5.608c-3.67-6.892-12.987-5.135-14.2 2.58z"/></defs></svg>
                            </li>
                            <li class="bigger">
                                <img src="../assets/img/docker.png" alt="">
                            </li>
                            <li class="bigger color">
                                <img src="../assets/img/cypress.svg" alt="">
                            </li>
                        </ul>
                    </div>
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
                    <div class="box text-center">
                        <h2>Let's find together<br> <span><strong> The Best</strong></span> <br> way to work</h2>
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

        p {
            span {
                color: purple;
                text-shadow:
                    0 0 7px rgba(128, 0, 128, 0.212),
                    0 0 10px rgba(128, 0, 128, 0.212),
                    0 0 21px rgba(128, 0, 128, 0.212),
                    0 0 42px rgba(128, 0, 128, 0.212),
                    0 0 82px rgba(128, 0, 128, 0.212),
                    0 0 92px rgba(128, 0, 128, 0.212),
                    0 0 102px rgba(128, 0, 128, 0.212),
                    0 0 151px rgba(128, 0, 128, 0.212);
            }
        }

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
    background-color: rgb(40, 40, 57);
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
                li.bigger{
                    img{
                        width: 110px;
                    }
                }
                li.color{
                    img{
                        width: 100px;
                        background-color: rgba(80, 84, 87, 0.448);
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
                    font-size: 50px;
                    margin-bottom: 3rem;
                    font-family: 'Times New Roman', Times, serif;

                    span {
                        font-family: Verdana, Geneva, Tahoma, sans-serif;
                    }
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