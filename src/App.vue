<script>


import AppNavbar from './components/AppNavbar.vue';
import AppFooter from "./components/AppFooter.vue";

export default {
    components: {
        AppNavbar,
        AppFooter
    },

}
</script>

<template>
    <header>
        <AppNavbar></AppNavbar>
    </header>
    <main>
        <router-view></router-view>
    </main>
    <AppFooter></AppFooter>

</template>


<style lang="scss" >
@use './styles/general.scss';

header {
    background-color: black;
}
</style>
