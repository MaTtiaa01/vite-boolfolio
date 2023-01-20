<script>


import AppNavbar from './components/AppNavbar.vue';
import AppBanner from './components/AppBanner.vue';


export default {
    components: {
        AppNavbar,
        AppBanner
    },

}
</script>

<template>
    <header>
        <AppNavbar></AppNavbar>
    </header>
    <main>
        <AppBanner></AppBanner>
        <router-view></router-view>
    </main>

</template>


<style lang="scss" >
@use './styles/general.scss';

header {
    background-color: black;
}
</style>
