<script setup>
import { ref, onMounted } from "vue";
import { getFileExtension, replaceFileExtension, getConvertWebpInfo } from "@/assets/global/utils.js";

const props = defineProps({
    folder: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    imgAlt: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: null
    },
    isSmallImg: {
        type: Boolean,
        default: false
    }
});

const isAbsolute = props.imgSrc.startsWith("http://") || props.imgSrc.startsWith("https://") || props.imgSrc.startsWith("/");
const linkPrefix = isAbsolute ? "" : "https://static.clashpost.com/upgrade/" + props.folder + "/";
const imgSrcOriginal = props.imgSrc;
const imgExtension = getFileExtension(imgSrcOriginal);
const hasAdditionalSource = !isAbsolute && getConvertWebpInfo(imgExtension);

const localOriginal = "/images/upgrade/" + props.folder + "/" + props.imgSrc;
const localWebp = replaceFileExtension(localOriginal, ".webp");

const imgSrcWebp = isAbsolute ? imgSrcOriginal : linkPrefix + replaceFileExtension(imgSrcOriginal, ".webp");
const imgLinkOriginal = isAbsolute ? imgSrcOriginal : linkPrefix + imgSrcOriginal;

const currentWebp = ref(imgSrcWebp);
const currentSrc = ref(imgLinkOriginal);

onMounted(() => {
    if (!isAbsolute) {
        const testImg = new Image();
        testImg.referrerPolicy = "no-referrer";
        testImg.src = imgLinkOriginal;
        testImg.onerror = () => {
            currentWebp.value = localWebp;
            currentSrc.value = localOriginal;
        };
    }
});
</script>

<template>
    <div class="cp-unit-info">
        <picture :class="props.isSmallImg ? 'cp-unit-info-media cp-unit-info-media-sm' : 'cp-unit-info-media'">
            <source :srcset="currentWebp" type="image/webp" v-if="hasAdditionalSource" />
            <img :src="currentSrc" :alt="props.imgAlt" />
        </picture>
        <p v-if="props.description" v-html="props.description"></p>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-unit-info {
    text-align: center;
    margin: 0.75rem 0;

    p {
        font-weight: 700;
    }
}

.cp-unit-info-media {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 240px;

    img {
        width: auto;
        height: auto;
    }
}

.cp-unit-info-media-sm {
    height: 160px;
}

@media (min-width: $cp-col-tablat) {
    .cp-unit-info-media {
        height: 300px;
    }
    
    .cp-unit-info-media-sm {
        height: 200px;
    }
}
</style>
