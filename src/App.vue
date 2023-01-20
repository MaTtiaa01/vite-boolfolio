<script>


import AppNavbar from './components/AppNavbar.vue';

export default {
    components: {
        AppNavbar
    },

}
</script>

<template>
    <header>
        <AppNavbar></AppNavbar>
    </header>
    <router-view></router-view>

</template>


<style lang="scss" >
@use './styles/general.scss';

header {
    background-color: black;
    margin-bottom: 1rem;
}
</style>
