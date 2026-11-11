import { defineConfig, HeadConfig } from "vitepress";
import { resolve } from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "部落小站",
    description: "部落冲突玩家的必备助手，coc 的中文百科全书。",
    lang: "zh-Hans-CN",
    cleanUrls: true,
    ignoreDeadLinks: true,
    head: [
        ["meta", { name: "google-site-verification", content: "9ERS3Fk3Y6q3_4KWhsQWII6RFD50gBkAuWzjOc6iYTo"}],
        ["meta", { name: "format-detection", content: "telephone=no"}],
        ["meta", { name: "referrer", content: "no-referrer"}],
        ["link", { rel: "icon", href: "https://static.clashpost.com/favicon.ico" }],
        ["link", { rel: "icon", href: "https://static.clashpost.com/favicon.svg", type: "image/svg+xml" }],
        ["link", { rel: "apple-touch-icon", href: "https://static.clashpost.com/apple-touch-icon.png"}],
        ["link", { rel: "manifest", href: "https://static.clashpost.com/manifest.webmanifest"}],
        ['script', { defer: "", src: "https://static.clashpost.com/global/very-old-browser-check-v11.min.js"}],
    ],
    transformHead: ({ pageData }) => {
        const head: HeadConfig[] = [];
        if (pageData.frontmatter.robots) {
            head.push(["meta", { name: "robots", content: pageData.frontmatter.robots }]);
        }
        const canonical = pageData.frontmatter.canonical;
        if (canonical === "/") {
            head.push(["link", { rel: "canonical", content: "https://coc.zmmmgo.cc.cd" }]);
        } else {
            head.push(["link", { rel: "canonical", content: "https://coc.zmmmgo.cc.cd" + canonical }]);
        }
        return head;
    },
    markdown: {
        math: true,
        image: {
            lazyLoad: true
        },
        externalLinks: {
            target: "_blank",
            rel: "noopener noreferrer"
        }
    },
    sitemap: {
        hostname: "https://coc.zmmmgo.cc.cd",
        transformItems: (items) => {
            const excludedUrls = [
                "/faq",
                "/settings",
                "p/260",
                "p/1828",
            ]
            const filteredItems = items.filter(item => {
                const itemUrl = item.url;
                const notExcluded = !excludedUrls.includes(itemUrl);
                const notPostCollection = !itemUrl.match(/(p\/category|p\/author|p\/page)/g);
                return notExcluded && notPostCollection;
            });
            return filteredItems;
        }
    },
    vite: {
        build: {
            target: ["es2020", "chrome71", "edge79", "firefox75", "safari13"]
        },
        resolve: {
            alias: {
                "@": resolve(import.meta.dirname, "./theme"),
                "#": resolve(import.meta.dirname, "../..")
            }
        }
    }
});