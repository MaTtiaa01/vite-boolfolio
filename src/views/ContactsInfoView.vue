<script>

export default {
    name: 'ContactsInfoView',
    data() {
        return {
        }
    },
}
</script>


<template>
    <section class="contacts">
        <div class="touch d-flex align-items-center justify-content-center mb-5">
            <h1>Get in Touch</h1>
        </div>

        <div class="container mt-5">
            <div class="row row-cols-1 row-cols-md-2 ">
                <div class="col justify-content-end align-items-center d-flex">
                    <div class="info">
                        <div class="mail d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg>
                            <span class="ms-3">mattia2001@live.it</span>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="message">
                        <h2>
                            I really <strong>appreciate</strong> your time spent on my website <strong>portfolio</strong>
                            <br>
                        </h2>
                        <span>I hope we will be in contact soon!!</span>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>



<style lang="scss" scoped>
.contacts {
    background-color: rgb(75, 75, 75);
    padding: 3rem 0;

    .touch {
        background-image: url(../assets/img/Unknown.jpg);
        background-position: center;
        background-repeat: no-repeat;
        border: 4px solid black;
        background-size: cover;
        width: 70%;
        height: 150px;
        margin: auto;


        h1 {
            background-color: rgba(128, 128, 128, 0.849);
            font-size: 50px;
            font-weight: bold;
            color: beige;
            font-weight: bold;
            text-shadow:
                0 0 7px rgba(255, 255, 255, 0.212),
                0 0 10px rgba(255, 255, 255, 0.212),
                0 0 21px rgba(255, 255, 255, 0.212),
                0 0 42px rgba(255, 255, 255, 0.212),
                0 0 82px rgba(255, 255, 255, 0.212),
                0 0 92px rgba(255, 255, 255, 0.212),
                0 0 102px rgba(255, 255, 255, 0.212),
                0 0 151px rgba(255, 255, 255, 0.212);
            padding: 1rem;
            border-radius: 15px;
        }
    }

    .container {
        padding: 6rem 0;

        .info {
            color: beige;

            .mail {
                padding: 3rem;

                svg {
                    width: 40px;
                }

                span {
                    font-size: 30px;
                    border-bottom: 3px solid black;
                    border-top: 3px solid black;
                }
            }

        }

        .message {
            color: beige;
            padding: 0 4rem;

            h2 {
                font-size: 60px;
                margin-bottom: 3rem;
            }

            span {
                border-bottom: 3px solid black;
                text-shadow:
                    0 0 7px rgba(255, 255, 255, 0.212),
                    0 0 10px rgba(255, 255, 255, 0.212),
                    0 0 21px rgba(255, 255, 255, 0.212),
                    0 0 42px rgba(255, 255, 255, 0.212),
                    0 0 82px rgba(255, 255, 255, 0.212),
                    0 0 92px rgba(255, 255, 255, 0.212),
                    0 0 102px rgba(255, 255, 255, 0.212),
                    0 0 151px rgba(255, 255, 255, 0.212);
            }
        }

    }
}
</style>