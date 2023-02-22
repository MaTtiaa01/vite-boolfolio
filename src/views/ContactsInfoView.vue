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
        <div class="container text-center d-flex flex-column justify-content-between align-items-center">
            <div class="touch ">
                <h1 class="text-uppercase">Let's Get in Touch!</h1>
                <div class="mail d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                    </svg>
                    <div class="mx-3" href="mailto: mattia2001@live.it">mattia2001@live.it</div>
                </div>
            </div>

        </div>



    </section>
</template>



<style lang="scss" scoped>
.contacts {
    background-color: rgb(5, 22, 40);
    background-image: url(../assets/img/Unknown.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 3rem;


    .container {
        height: 1000px;
        margin-top: 0;
        padding-top: 3rem;

        .touch {
            width: 70%;
            height: 150px;


            h1 {
                font-size: 70px;
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
            }
        }


        .mail {
            color: beige;

            svg {
                width: 50px;
            }

            div {
                font-weight: bold;
                font-size: 30px;
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