---
title: "部落冲突 coc 滚木手升级数据"
navTitle: "滚木手"
shownTitle: "滚木手"
description: "这块坚硬的陨石残片对林业情有独钟。当滚木手不在抚摸他胡子上的啄木鸟时，他就在投掷弹跳的滚木，击退并碾压所有类型的部队。滚木的速度虽然缓慢，但却带着大自然的全部威能！"
module: upgrade-home
imgFolder: home_th/0842
wiki: https://clashofclans.fandom.com/wiki/Logger
canonical: /upgrade/0842-Logger
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Logger_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Logger1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

- 滚木手的特殊技能（滚木投掷）：滚木手向敌方部队投掷向前弹跳的滚木，对路径上的部队造成伤害并造成 1.5 格的击退效果。滚木最多行进 15 格。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.5 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="1.0 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="7 - 8 格" />
    <UnitProperty pKey="警戒半径" pValue="15 格<sup>①</sup>" />
    <UnitProperty pKey="巡逻半径" pValue="14 格<sup>②</sup>" />
    <UnitProperty pKey="击退距离" pValue="1.5 格" />
    <UnitProperty pKey="滚木行进上限" pValue="15 格" />
    <UnitProperty pKey="所需大本等级" pValue="18" />
</UnitProperties>

① 如果敌军进入这个范围，守卫会看向部队的方向，准备反击。<br>
② 在没有敌人的情况下，守卫也会走动，而这个走动的范围叫巡逻半径。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "noGoldPass": true,
        "icon": "Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "noGoldPass": true,
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 升级时间 | 攻击距离 | 所需大本等级 |
|  --- |   ---   |   ---   |   ---  |   ---   |   ---   |   ---   |     ---     |
| 1 | 230 | 575 | 8000 | \ | \ | 7 格 | 18 |
| 2 | 260 | 650 | 9000 | 18M | 7 | 7 格 | 18 |
| 3 | 290 | 725 | 10000 | 22M | 9 | 7 格 | 18 |
| 4 | 320 | 800 | 11000 | 26M | 11 | 8 格 | 18 |
| 5 | 350 | 875 | 12000 | 28M | 13 | 8 格 | 18 |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/04/27">
        <TimelineRow>推出守卫系统新成员“滚木手”，共有 5 个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
