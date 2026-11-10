<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import Callout from "@/components/Callout.vue";

const props = defineProps({
    link: {
        type: String,
        default: ""
    }
});

const { frontmatter } = useData();

// 判断是否属于“攻略教程”版块（链接以 /p 开头，或 module 包含 posts）
const isPostsSection = computed(() => {
    const canonical = props.link || frontmatter.value.canonical || "";
    const module = frontmatter.value.module || "";
    return canonical.startsWith("/p") || module.startsWith("posts");
});
</script>

<template>
    <Callout type="warning" class="cp-top-callout" v-if="isPostsSection">
        <!-- 这里填写您想要展示的警告文字与链接 -->
        本板块的初始版本移植于“部落驿站”，只选取了部分文章，如果需要查看完整详细的文章，建议直接<a href="https://clashpost.com/p">移步</a>。
    </Callout>
</template>

<style scoped>
.cp-top-callout {
    margin-bottom: 0.5rem;
}
</style>