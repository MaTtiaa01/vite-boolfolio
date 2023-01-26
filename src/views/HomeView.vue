<script>
export default {
    name: 'HomeView'
}
</script>


<template>
    <section class="home_page d-flex align-items-center">
        <img src="../assets/img/Untitled Project.jpg" alt="">
        <div class="description ">
            <div class="portfolio ">
                portfolio
                <span> Mattia Barbieri</span>
            </div>

        </div>
        <div class="code">
            <marquee behavior="scroll" direction="right">
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
            </marquee>
            <marquee behavior="scroll" direction="left">
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
            </marquee>
            <marquee behavior="scroll" direction="right">
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
            </marquee>
            <marquee behavior="scroll" direction="left">
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
            </marquee>
            <marquee behavior="scroll" direction="left">
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
            </marquee>
            <marquee behavior="scroll" direction="left">
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
            </marquee>
            <marquee behavior="scroll" direction="right">
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
            </marquee>
            <marquee behavior="scroll" direction="left">
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
            </marquee>
            <marquee behavior="scroll" direction="right">
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
            </marquee>
            <marquee behavior="scroll" direction="left">
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
            </marquee>
            <marquee behavior="scroll" direction="right">
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
            </marquee>
            <marquee behavior="scroll" direction="left">
                &lt;img &gt; / &lt;img &gt; / &lt;img &gt; / &lt;img &gt; /
            </marquee>
        </div>
    </section>



</template>



<style lang="scss" scoped>
.home_page {
    position: relative;

    img {
        width: 100%;
        height: 800px;
        object-fit: cover;
        object-position: center;
        filter: brightness(70%);
    }

    .description {
        position: absolute;
        right: 15%;
        bottom: 20%;
        color: green;
        font-size: 30px;
        padding: 1rem;

        .portfolio {
            position: relative;
            color: white;
            font-weight: bold;
            font-size: 80px;

            span {
                font-weight: bold;
                padding: 0 2rem;
                font-size: 25px;
                background-image: url('../assets/img/Untitled\ Project.jpg');
                object-fit: cover;
                background-position: bottom;
                position: absolute;
                bottom: 0.3rem;
                left: 10%;
                color: white;
                font-family: 'Nanum Gothic Coding', monospace;
            }
        }
    }

    .code {
        position: absolute;
        left: 25%;
        top: 30%;
        max-width: 250px;
        font-size: 5px;
        font-weight: bold;
        color: rgb(6, 255, 6);
    }
}
</style>