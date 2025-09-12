import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "MYOOS Wiki",
  description: "MYOOS Algorithm Wiki",

  theme: hopeTheme({}),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
