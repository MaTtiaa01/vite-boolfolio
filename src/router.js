import { createRouter, createWebHistory } from "vue-router";

// import all components
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import PortfolioView from './views/PortfolioView.vue'
import ContactsView from './views/ContactsView.vue'
import SingleProjectView from './views/SingleProjectView.vue'
import NotFoundView from './views/NotFoundView.vue'
import ContactsInfoView from "./views/ContactsInfoView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsInfoView
        },
        {
            path: '/portfolio/:id',
            name: 'single-project',
            component: SingleProjectView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        }
    ]
})


export { router }