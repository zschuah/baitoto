import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

import "bootstrap";
import "popper.js";
import "jquery";
import "bootstrap/dist/css/bootstrap.css";

import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
import Home from "./components/Home.vue";
import GameFlip from "./components/GameFlip.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/flip-game", component: GameFlip },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
  linkActiveClass: "active",
});
app.use(router);

app.component("the-navbar", TheNavbar);
app.component("the-footer", TheFooter);

app.mount("#app");
