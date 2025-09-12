import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
    author: {
        name: "Mr.Hope",
        url: "https://mister-hope.com",
    },
    logo: "https://theme-hope-assets.vuejs.press/logo.svg",
    repo: "vuepress-theme-hope/vuepress-theme-hope",
    docsDir: "src",
    navbar,
    sidebar,
    footer: "默认页脚",
    displayFooter: true,
    encrypt: {
        config: {
            "/demo/encrypt.html": {
                hint: "Password: 1234",
                password: "1234",
            },
        },
    },
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },
    markdown: {
        align: true,
        codeTabs: true,
        component: true,
        demo: true,
        figure: true,
        gfm: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        plantuml: true,
        spoiler: true,
        stylize: [
            {
                matcher: "Recommended",
                replacer: ({ tag }) => {
                    if (tag === "em")
                        return {
                            tag: "Badge",
                            attrs: { type: "tip" },
                            content: "Recommended",
                        };
                },
            },
        ],
        sub: true,
        sup: true,
        tabs: true,
        tasklist: true,
        vPre: true,
        math: {
            type: "katex",
        },
    },
    plugins: {
        components: {
            components: ["Badge", "VPCard"],
        },
        icon: {
            prefix: "fa6-solid:",
        },
    },
});
