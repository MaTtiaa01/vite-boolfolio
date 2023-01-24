<script>
export default {
    name: 'AppNavabr'
}
</script>

<template>

    <nav class="nav justify-content-around py-3 d-flex align-items-center">
        <div class="logo">
            <img src="../assets/img/logo-2.PNG" alt="">
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
    }
}
</style>