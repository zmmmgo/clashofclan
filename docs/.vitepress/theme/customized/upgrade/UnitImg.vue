<script setup>
import { onMounted, ref } from "vue";
import { getFileExtension, replaceFileExtension, getConvertWebpInfo} from "@/assets/global/utils.js";

const props = defineProps({
    imgTitle: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    imgHd: {
        type: String,
        default: null
    }
});

const imgItemRef = ref();
const imgSrcOriginal = props.imgSrc;
const imgExtension = getFileExtension(imgSrcOriginal);
const hasAdditionalSource = getConvertWebpInfo(imgExtension);

onMounted(() => {
    // 确定图片链接
    const refDom = imgItemRef.value;
    const folder = refDom.parentNode.getAttribute("data-folder");
    const linkPrefix = "https://static.clashpost.com/upgrade/" + folder + "/";
    
    const imgSrcWebp = replaceFileExtension(imgSrcOriginal, ".webp");
    const imgLinkOriginal = linkPrefix + imgSrcOriginal;
    const imgLinkWebp = linkPrefix + imgSrcWebp;
    // 高清图片地址，方便点击图片时展示
    const imgLinkHd = linkPrefix + props.imgHd;

    // 将图片链接写入 src
    const pictureDom = refDom.querySelector("picture");
    const imgDom = pictureDom.querySelector("img");
    const sourceDom = pictureDom.querySelector("source");

    const localOriginal = "/images/upgrade/" + folder + "/" + imgSrcOriginal;
    const localWebp = replaceFileExtension(localOriginal, ".webp");
    const isKnownLocal = ["008c", "0604", "0842", "0747", "0726", "07e5", "0906", "0907", "0908", "1287", "X-Bow13", "Scattershot7", "Builders_Hut8", "Monolith5", "Army_Camp14", "Dark_Barracks13", "Dark_Spell_Factory8", "Workshop9"].some(k => folder.includes(k) || imgSrcOriginal.includes(k));

    if (isKnownLocal) {
        imgDom.setAttribute("src", localOriginal);
        if (hasAdditionalSource && sourceDom) {
            sourceDom.setAttribute("srcset", localWebp);
        }
        if (props.imgHd) {
            imgDom.setAttribute("data-src-hd", "/images/upgrade/" + folder + "/" + props.imgHd);
        }
        return;
    }

    const testImg = new Image();
    testImg.referrerPolicy = "no-referrer";
    testImg.src = imgLinkOriginal;
    testImg.onload = () => {
        imgDom.setAttribute("src", imgLinkOriginal);
        if (hasAdditionalSource && sourceDom) {
            sourceDom.setAttribute("srcset", imgLinkWebp);
        }
        if (props.imgHd) {
            imgDom.setAttribute("data-src-hd", imgLinkHd);
        }
    };
    testImg.onerror = () => {
        imgDom.setAttribute("src", localOriginal);
        if (hasAdditionalSource && sourceDom) {
            sourceDom.setAttribute("srcset", localWebp);
        }
        if (props.imgHd) {
            imgDom.setAttribute("data-src-hd", localOriginal);
        }
    };
});
</script>

<template>
    <div class="cp-unit-img-item" ref="imgItemRef">
        <div class="cp-unit-img-title">{{ props.imgTitle }}</div>
        <picture>
            <source srcset="" type="image/webp" v-if="hasAdditionalSource" />
            <img loading="lazy" referrerpolicy="no-referrer" class="cp-unit-img" src="" alt="" />
        </picture>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-unit-img-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 5rem;
    min-height: 6rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

@media (min-width: $cp-col-tablat) {
    .cp-unit-img-item {
        margin-right: 0.75rem;
        margin-bottom: 0.75rem;
    }
}

.cp-unit-img-title {
    margin-bottom: 0.125rem;
}

.cp-unit-img {
    width: auto;
    height: auto;
    max-width: 5rem;
    max-height: 6rem;
}
</style>