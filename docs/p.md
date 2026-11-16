---
title: "攻略教程"
description: "攻略教程收录了部落冲突游戏机制讲解、流派打法、基础知识与进阶心得。可在右侧大纲目录快速电梯跳转至对应板块。"
module: posts
canonical: /p
hasUpdateTime: false
---

<script setup>
import PostCategoryTab from "@/customized/posts/PostCategoryTab.vue";
import PostDirectory from "@/customized/posts/PostDirectory.vue";
</script>

<PostCategoryTab :categoryIndex="0" />

<div class="cp-p-summary">
    本站共收录 <strong>116</strong> 篇攻略教程，涵盖新手入门、进阶战术、底层机制解析及夜世界与都城专区。您可通过上方选项卡筛选分类，或通过右侧大纲目录快速电梯跳转至对应板块。
</div>

## 新手入门

<PostDirectory category="starter" categoryName="新手入门" />

## 进阶攻略

<PostDirectory category="advanced" categoryName="进阶攻略" />

## 游戏机制

<PostDirectory category="knowledge" categoryName="游戏机制" />

## 夜世界

<PostDirectory category="bh" categoryName="夜世界" />

## 都城

<PostDirectory category="capital" categoryName="都城" />

<style lang="scss">
.cp-p-summary {
    margin: 1rem 0 1.5rem 0;
    line-height: 1.7;
    font-size: 0.95rem;
    color: var(--cp-text-light);
    opacity: 0.9;
}
.cp-theme-dark .cp-p-summary {
    color: var(--cp-text-dark);
}
</style>
