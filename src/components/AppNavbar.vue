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
        <div class="commands d-flex align-items center">
            <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
            <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
            <router-link class="nav-link" :to="{ name: 'portfolio' }">Portfolio</router-link>
            <router-link class="nav-link" :to="{ name: 'contacts' }">Contacts</router-link>

        </div>

    </nav>

</template>


<style lang="scss" scoped>
nav {

    a {
        color: white;
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