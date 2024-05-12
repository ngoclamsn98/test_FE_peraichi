import { createApp } from "vue";
import router from "@/routes";
import NotificationPlugin from "@/plugin/Notification";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(NotificationPlugin);
app.use(router);
app.mount("#app");
