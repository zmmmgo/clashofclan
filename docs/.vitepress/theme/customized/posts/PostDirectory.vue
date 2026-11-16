<script setup>
import { computed } from "vue";
import { data as allPosts } from "@/assets/posts/posts.data.mjs";
import { getTimeStr } from "@/assets/global/datetime.js";

const props = defineProps({
    category: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        default: ""
    }
});

const categoryPosts = computed(() => {
    return allPosts.filter(p => p.category === props.category);
});

const categoryLink = computed(() => `/p/category/${props.category}`);
</script>

<template>
    <div class="cp-post-directory">
        <ul class="cp-post-directory-list">
            <li v-for="post in categoryPosts" :key="post.ID" class="cp-post-directory-item">
                <a :href="post.url" class="cp-post-directory-link">
                    <span class="cp-post-directory-dot"></span>
                    <span class="cp-post-directory-title">{{ post.title }}</span>
                    <span class="cp-post-directory-time">{{ getTimeStr(post.lastUpdated) }}</span>
                </a>
            </li>
        </ul>
        <div class="cp-post-directory-more" v-if="categoryPosts.length > 0">
            <a :href="categoryLink" class="cp-post-directory-more-link">
                浏览「{{ categoryName }}」图文卡片流（共 {{ categoryPosts.length }} 篇）→
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.cp-post-directory {
    margin: 1rem 0 2rem 0;

    .cp-post-directory-list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.5rem;
        padding: 0;
        margin: 0;
        list-style: none;

        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .cp-post-directory-item {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .cp-post-directory-link {
        display: flex;
        align-items: center;
        padding: 0.65rem 0.85rem;
        border-radius: 0.375rem;
        background-color: var(--cp-bg-light);
        border: 1px solid var(--cp-border-color-light);
        text-decoration: none;
        transition: all 0.2s ease;

        &:hover {
            text-decoration: none;
            background-color: var(--cp-grey-bg-light);
            transform: translateX(3px);
        }
    }

    .cp-post-directory-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: rgb(0, 107, 230);
        margin-right: 0.65rem;
        flex-shrink: 0;
    }

    .cp-post-directory-title {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.95rem;
        color: var(--cp-text-light);
        font-weight: 500;
    }

    .cp-post-directory-time {
        font-size: 0.8rem;
        color: var(--cp-grey-text-light);
        margin-left: 0.5rem;
        flex-shrink: 0;
    }

    .cp-post-directory-more {
        margin-top: 0.75rem;
        text-align: right;

        .cp-post-directory-more-link {
            font-size: 0.875rem;
            color: rgb(0, 107, 230);
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}

.cp-theme-dark .cp-post-directory {
    .cp-post-directory-link {
        background-color: var(--cp-bg-dark);
        border-color: var(--cp-border-color-dark);

        &:hover {
            background-color: var(--cp-grey-bg-dark);
        }
    }

    .cp-post-directory-dot {
        background-color: rgb(128, 204, 255);
    }

    .cp-post-directory-title {
        color: var(--cp-text-dark);
    }

    .cp-post-directory-time {
        color: var(--cp-grey-text-dark);
    }

    .cp-post-directory-more-link {
        color: rgb(128, 204, 255);
    }
}
</style>
