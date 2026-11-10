---
title: "部落冲突 coc 火热蜡烛升级数据"
navTitle: "火热蜡烛"
shownTitle: "火热蜡烛"
description: "烈焰来袭！火热蜡烛会向空中和地面部队喷吐火焰。它可以同时攻击多个目标，但随着蜡烛不断燃烧熔化，可同时攻击的目标数量也会逐渐减少。"
module: upgrade-home
imgFolder: temp_crafted/0906
wiki: https://clashofclans.fandom.com/wiki/Hot_Candle
canonical: /upgrade/0906-Hot-Candle
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hot_Candle4_hd.png" :imgAlt="$frontmatter.navTitle"
    description="烈焰来袭！火热蜡烛会向空中和地面部队喷吐火焰。<br>它可以同时攻击多个目标，但随着蜡烛不断燃烧熔化，可同时攻击的目标数量也会逐渐减少。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="3 - 11 级" imgSrc="Hot_Candle1.png" />
        <UnitImg imgTitle="12 - 20 级" imgSrc="Hot_Candle2.png" />
        <UnitImg imgTitle="21 - 29 级" imgSrc="Hot_Candle3.png" />
        <UnitImg imgTitle="30 级" imgSrc="Hot_Candle4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 火热蜡烛是第四期精工防御建筑之一，可在精制台建造与定制。
2. 战斗开始时，火热蜡烛处于初始形态，可同时锁定并攻击多达 6 个目标。
3. 当战斗中有部队下兵部署后，火热蜡烛的熔化倒计时开始生效。
4. 经过一段持续生效时间后，火热蜡烛会发生第一次熔化（可攻击目标减少至 4 个），再经过一段时间后发生第二次熔化（可攻击目标减少至 3 个）。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="多目标单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="攻击距离" pValue="10.5 格" />
    <UnitProperty pKey="攻击速度" pValue="0.5 秒/次" />
    <UnitProperty pKey="初始目标数量" pValue="6 个" />
    <UnitProperty pKey="一次熔化后目标数量" pValue="4 个" />
    <UnitProperty pKey="二次熔化后目标数量" pValue="3 个" />
    <UnitProperty pKey="推出时的最高大本等级" pValue="17" />
</UnitProperties>

<SmallTitle>可升级模组 1：提升建筑的生命值</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo1">

| 等级 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| :--: | :----: | :------: | :------: | :------------------: |
|   1  |  1600  |    \     |    \     |                      |
|   2  |  1800  |    3M    |   0,4    |                      |
|   3  |  2150  |    4M    |   0,6    |                      |
|   4  |  2500  |    5M    |   0,8    |                      |
|   5  |  2700  |    6M    |   0,10   |                      |
|   6  |  3150  |    7M    |   0,16   |                      |
|   7  |  3800  |    8M    |   1,16   |                      |
|   8  |  4300  |    9M    |   3,2    |                      |
|   9  |  4950  |   10M    |   5,6    |                      |
|  10  |  5800  |   11M    |    9     |                      |

</UnitTable>

<SmallTitle>可升级模组 2：提升每秒伤害值</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo2">

| 等级 |伤害<br>(每秒/每次)| 升级费用 | 升级时间 |升级后可<br>获得的经验|
| :--: | :----------------: | :------: | :------: | :------------------: |
|   1  |     120 / 60       |    \     |    \     |                      |
|   2  |     130 / 65       |   3.5M   |   0,6    |                      |
|   3  |     140 / 70       |   4.5M   |   0,8    |                      |
|   4  |     150 / 75       |    6M    |   0,11   |                      |
|   5  |     160 / 80       |   7.5M   |   0,13   |                      |
|   6  |     180 / 90       |    9M    |   0,19   |                      |
|   7  |     190 / 95       |  10.5M   |   1,22   |                      |
|   8  |     210 / 105      |   12M    |   3,11   |                      |
|   9  |     230 / 115      |  13.5M   |   6,4    |                      |
|  10  |     250 / 125      |   15M    |    10    |                      |

</UnitTable>

<SmallTitle>可升级模组 3：增加持续生效时间</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo3">

| 等级 | 初始形态持续时间 | 一次熔化后时间 | 二次熔化后时间 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| :--: | :--------------: | :------------: | :------------: | :------: | :------: | :------------------: |
|   1  |       59 秒      |   60 ~ 94 秒   |    95 秒以上   |    \     |    \     |                      |
|   2  |       61 秒      |   62 ~ 98 秒   |    99 秒以上   |   30k    |   0,4    |                      |
|   3  |       63 秒      |  64 ~ 102 秒   |   103 秒以上   |   40k    |   0,6    |                      |
|   4  |       65 秒      |  66 ~ 106 秒   |   107 秒以上   |   50k    |   0,8    |                      |
|   5  |       67 秒      |  68 ~ 110 秒   |   111 秒以上   |   60k    |   0,10   |                      |
|   6  |       69 秒      |  70 ~ 114 秒   |   115 秒以上   |   70k    |   0,16   |                      |
|   7  |       71 秒      |  72 ~ 118 秒   |   119 秒以上   |   80k    |   1,16   |                      |
|   8  |       73 秒      |  74 ~ 122 秒   |   123 秒以上   |   90k    |   3,2    |                      |
|   9  |       75 秒      |  76 ~ 126 秒   |   127 秒以上   |  100k    |   5,6    |                      |
|  10  |       77 秒      |  78 ~ 131 秒   |   132 秒以上   |  110k    |    9     |                      |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/08/31">
        <TimelineRow>熔化倒计时触发条件调整为敌方下兵时开始计时。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2026/08/01">
        <TimelineRow>第四期精工防御上线，推出新精工防御：火热蜡烛。</TimelineRow>
    </TimelineItem>
</Timeline>

<script setup>
const tableExtraInfo1 = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    }
];
const tableExtraInfo2 = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    }
];
const tableExtraInfo3 = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Dark_Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 6,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>
