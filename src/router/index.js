import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomeLight = () => import('../views/HomeLight.vue')
const Home = () => import('../views/Home.vue')
const Reflexologie = () => import('../views/Reflexologie.vue')
const Hakim = () => import('../views/Hakim.vue')
const Shirotchampi = () => import('../views/Shirotchampi.vue')
const Relaxation = () => import('../views/Relaxation.vue')
const FAQ = () => import('../views/FAQ.vue')
const Contact = () => import('../views/Contact.vue')
const Credits = () => import('../views/Credits.vue')

const routes = [
  {
    path: '/',
    component: HomeLight,
    children: [
      {
        path: '',
        name: 'Accueil',
        meta: { title: 'Accueil' },
        component: Home,
      },
      {
        path: 'reflexologie',
        name: 'Réflexologie',
        meta: { title: 'Réflexologie plantaire' },
        component: Reflexologie,
      },
      {
        path: 'hakim',
        name: 'Hakim',
        meta: { title: 'Massage Hakim' },
        component: Hakim,
      },
      {
        path: 'shirotchampi',
        name: 'Shirotchampi',
        meta: { title: 'Massage Shirotchampi' },
        component: Shirotchampi,
      },
      {
        path: 'relaxation',
        name: 'Relaxation',
        meta: { title: 'Relaxation' },
        component: Relaxation,
      },
      {
        path: 'faq',
        name: 'FAQ',
        meta: { title: 'Questions - Réponses' },
        component: FAQ,
      },
      {
        path: 'contact',
        name: 'Contact',
        meta: { title: 'Contact' },
        component: Contact,
      },
      {
        path: 'credits',
        name: 'Crédits',
        meta: { title: 'Crédits' },
        component: Credits,
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.afterEach((to) => {
  const baseTitle = 'Simone Marck'
  if (to.meta && to.meta.title) {
    document.title = `${baseTitle} | ${to.meta.title}`
  } else {
    document.title = baseTitle
  }
})

export default router