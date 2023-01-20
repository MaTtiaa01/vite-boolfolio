import { createRouter, createWebHistory } from "vue-router";

// import all components
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import BlogView from './views/BlogView.vue'
import ContactsView from './views/ContactsView.vue'
import SinglePostView from './views/SinglePostView.vue'
import NotFoundView from './views/NotFoundView.vue'

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
            path: '/blog',
            name: 'blog',
            component: BlogView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },
        {
            path: '/blog/:id',
            name: 'single-post',
            component: SinglePostView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        }
    ]
})


export { router }