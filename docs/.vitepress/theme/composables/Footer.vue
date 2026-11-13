<script setup>
import { ref, onMounted, watch } from "vue";
import { inBrowser, useRoute } from "vitepress";

const siteUv = ref("");
const sitePv = ref("");
const isLoaded = ref(false);

const route = inBrowser ? useRoute() : null;

async function fetchStats() {
    if (!inBrowser) return;
    try {
        const host = window.location.host || "coc.zmmmgo.cc.cd";
        const cookieKey = `vercount_uv_${host.replace(/[^a-zA-Z0-9_-]/g, "_")}`;
        const hasUvCookie = document.cookie.split("; ").some(c => c.startsWith(`${cookieKey}=`));
        const isNewUv = !hasUvCookie;
        if (isNewUv) {
            document.cookie = `${cookieKey}=1; path=/; max-age=31536000; samesite=lax`;
        }

        const res = await fetch("https://events.vercount.one/api/v2/log", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                url: window.location.href,
                isNewUv
            })
        });

        if (res.ok) {
            const json = await res.json();
            if (json?.data) {
                siteUv.value = String(json.data.site_uv ?? 0);
                sitePv.value = String(json.data.site_pv ?? 0);
                isLoaded.value = true;
                try {
                    localStorage.setItem("visitorCountData", JSON.stringify(json.data));
                } catch (_) {}
            }
        }
    } catch (e) {
        try {
            const cached = JSON.parse(localStorage.getItem("visitorCountData") || "{}");
            if (cached.site_pv !== undefined) {
                siteUv.value = String(cached.site_uv ?? 0);
                sitePv.value = String(cached.site_pv ?? 0);
                isLoaded.value = true;
            }
        } catch (_) {}
    }
}

onMounted(() => {
    fetchStats();
});

if (inBrowser && route) {
    watch(() => route.path, () => {
        fetchStats();
    });
}
</script>

<template>
    <div id="cp-footer">
        Copyright © 2026-2026 部落小站<br>
        <div class="site-stats" v-show="isLoaded">
            <span>本站总访客数 <span class="stats-num">{{ siteUv }}</span> 人</span>
            <span class="stats-sep">|</span>
            <span>本站总访问量 <span class="stats-num">{{ sitePv }}</span> 次</span>
        </div>
        <a href="/p/260">用户须知</a> | <a href="https://github.com/lemonicy/clashpost" target="_blank" rel="nofollow noreferrer noopener">源网站归档地址</a> | <a href="https://github.com/zmmmgo/clashofclan" target="_blank" rel="nofollow noreferrer noopener">本站归档地址</a> | <a href="/faq">常见问题解答</a><br>
        本网站与 Supercell 没有任何关联，Supercell 对此不提供任何赞助或具体许可，也不对此承担任何责任。若要查看更多信息，请参阅 Supercell 玩家内容条款：
        <span style="font-style: italic">
            <a href="https://supercell.com/en/fan-content-policy/cn/" target="_blank" rel="nofollow">
                www.supercell.com/en/fan-content-policy
            </a>
        </span>
    </div>
</template>

<style lang="scss">
#cp-footer {
    font-size: 0.875rem;
    text-align: center;
    margin: 1.5rem auto;

    .site-stats {
        margin: 0.35rem 0;
        opacity: 0.85;

        .stats-num {
            font-weight: 600;
        }

        .stats-sep {
            margin: 0 0.5rem;
            opacity: 0.6;
        }
    }
}
</style>