<script>
export default {
    name: 'AppNavabr'
}
</script>

<template>

    <nav class="nav justify-content-around py-3 d-flex align-items-center">
        <div class="logo d-flex align-items-center">
            <img src="../assets/img/logo-2.PNG" alt="">
            <div>Full Stack Developer</div>
        </div>
        <div class="commands d-sm-flex align-items center justify-content-between d-block">
            <router-link class="nav-link" :to="{ name: 'home' }">
                <div class="box">
                    Home
                </div>
            </router-link>
            <router-link class="nav-link" :to="{ name: 'about' }">
                <div class="box">
                    About
                </div>
            </router-link>
            <router-link class="nav-link" :to="{ name: 'portfolio' }">
                <div class="box">
                    Portfolio
                </div>
            </router-link>
            <router-link class="nav-link" :to="{ name: 'contacts' }">
                <div class="box">
                    Contacts
                </div>
            </router-link>

        </div>

    </nav>



</template>


<style lang="scss" scoped>
nav {

    .box {
        height: auto;
        float: left;
        transition: .2s linear;
        position: relative;
        display: block;
        overflow: hidden;
        padding: 15px;
        text-align: center;
        margin: 0 5px;
        background: transparent;
        font-weight: bold;
    }

    .box:before {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        height: 4px;
        width: 100%;
        border-bottom: 4px solid transparent;
        border-left: 4px solid transparent;
        box-sizing: border-box;
        transform: translateX(100%);
    }

    .box:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        border-top: 4px solid transparent;
        border-right: 4px solid transparent;
        box-sizing: border-box;
        transform: translateX(-100%);
    }

    .box:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    }

    .box:hover:before {
        border-color: #262626;
        height: 100%;
        transform: translateX(0);
        transition: .2s transform linear, .2s height linear .2s;
    }

    .box:hover:after {
        border-color: #262626;
        height: 100%;
        transform: translateX(0);
        transition: .2s transform linear, .2s height linear .3s;
    }

    a {
        color: white;
        text-decoration: none;
        cursor: pointer;
        outline: none;
        border: none;
        background: transparent;
    }

    .logo {
        width: 100px;

        img {
            max-width: 100%;
        }

        div {
            color: white;
            font-weight: bold;
            text-shadow:
                0 0 7px rgba(255, 255, 255, 0.483),
                0 0 10px rgba(255, 255, 255, 0.483),
                0 0 21px rgba(255, 255, 255, 0.483),
                0 0 42px rgba(255, 255, 255, 0.483),
                0 0 82px rgba(255, 255, 255, 0.483),
                0 0 92px rgba(255, 255, 255, 0.483),
                0 0 102px rgba(255, 255, 255, 0.483),
                0 0 151px rgba(255, 255, 255, 0.483);
        }
    }
}
</style>