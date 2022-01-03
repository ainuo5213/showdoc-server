import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setUserInfo, default as userInfo } from "./hooks/userInfo";
import { setToken, default as tokenInfo } from "./hooks/token";
import "@/assets/font/iconfont.css";
import ElmentPlus from "element-plus"

(window as any).useUserInfo = {
  setUserInfo,
  userInfo,
};
(window as any).useToken = {
  setToken,
  tokenInfo,
};
createApp(App).use(router).use(ElmentPlus).mount("#app");
