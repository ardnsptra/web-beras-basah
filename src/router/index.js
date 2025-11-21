import { createRouter, createWebHistory } from 'vue-router'

const BerandaPage   = () => import('../pages/BerandaPage.vue')
const FasilitasPage = () => import('../pages/FasilitasPage.vue')
const TentangPage   = () => import('../pages/TentangPage.vue')
const AlbumPage     = () => import('../pages/AlbumPage.vue')
const UlasanPage    = () => import('../pages/UlasanPage.vue')
const KontakPage    = () => import('../pages/KontakPage.vue')

const routes = [
  { path: '/',          name: 'beranda',   component: BerandaPage,   meta: { title: 'Beranda | Wisata Pulau' } },
  { path: '/fasilitas', name: 'fasilitas', component: FasilitasPage, meta: { title: 'Fasilitas | Wisata Pulau' } },
  { path: '/tentang',   name: 'tentang',   component: TentangPage,   meta: { title: 'Tentang | Wisata Pulau' } },
  { path: '/album',     name: 'album',     component: AlbumPage,     meta: { title: 'Album | Wisata Pulau' } },
  { path: '/ulasan',    name: 'ulasan',    component: UlasanPage,    meta: { title: 'Ulasan | Wisata Pulau' } },
  { path: '/kontak',    name: 'kontak',    component: KontakPage,    meta: { title: 'Kontak | Wisata Pulau' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title
})

export default router
