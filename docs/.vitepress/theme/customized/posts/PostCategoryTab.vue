<script setup>
import { useRouter } from "vitepress";
import EventTabs from "@/components/tab/EventTabs.vue";
import EventTab from "@/components/tab/EventTab.vue";

const props = defineProps({
    categoryIndex: {
        type: Number,
        default: 0
    }
});

const router = useRouter();

async function changeCategory(categoryIndex) {
    // 获取目标链接
    const linkArr = ["", "starter", "advanced", "knowledge", "bh", "capital"];
    let fullLink;
    if (categoryIndex === 0) {
        fullLink = "/p"
    } else {
        fullLink = "/p/category/" + linkArr[categoryIndex];
    }

    // 将滚动位置设置到之前的位置
    const tabLeftPosition = document.querySelector("#cp-post-category-tabs .cp-tabs").scrollLeft;
    await router.go(fullLink);
    setTimeout(() => {
        document.querySelector("#cp-post-category-tabs .cp-tabs").scrollLeft = tabLeftPosition;
    }, 50);
}
</script>

<template>
    <EventTabs id="cp-post-category-tabs" contentClass="cp-upgrade-item" :stickyTabs="true">
        <EventTab :activeTab="categoryIndex === 0" @clickEvent="changeCategory(0)">全部</EventTab>
        <EventTab :activeTab="categoryIndex === 1" @clickEvent="changeCategory(1)">新手入门</EventTab>
        <EventTab :activeTab="categoryIndex === 2" @clickEvent="changeCategory(2)">进阶攻略</EventTab>
        <EventTab :activeTab="categoryIndex === 3" @clickEvent="changeCategory(3)">游戏机制</EventTab>
        <EventTab :activeTab="categoryIndex === 4" @clickEvent="changeCategory(4)">夜世界</EventTab>
        <EventTab :activeTab="categoryIndex === 5" @clickEvent="changeCategory(5)">都城</EventTab>
    </EventTabs>
</template>