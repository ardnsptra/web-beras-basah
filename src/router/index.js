import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/beranda" },
    { path: "/beranda", name: "beranda", component: HomePage },
    { path: "/fasilitas", name: "fasilitas", component: HomePage },
    { path: "/tentang", name: "tentang", component: HomePage },
    { path: "/album", name: "album", component: HomePage },
    { path: "/ulasan", name: "ulasan", component: HomePage },
    { path: "/kontak", name: "kontak", component: HomePage },
  ],

  scrollBehavior(to) {
    const targets = {
      beranda: "#beranda",
      fasilitas: "#fasilitas",
      tentang: "#tentang",
      album: "#album",
      ulasan: "#ulasan",
      kontak: "#kontak",
    };

    if (targets[to.name]) {
      return {
        el: targets[to.name],
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
