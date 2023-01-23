<script>
export default {
    name: 'AppNavabr'
}
</script>

<template>

    <nav class="nav justify-content-center py-3 ">
        <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
        <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
        <router-link class="nav-link" :to="{ name: 'portfolio' }">Portfolio</router-link>
        <router-link class="nav-link" :to="{ name: 'contacts' }">contacts</router-link>

    </nav>

</template>


<style lang="scss" scoped>
nav {


    a {
        color: white;
    }
}
</style>