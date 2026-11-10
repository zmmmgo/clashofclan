---
title: "部落冲突 coc 英雄猎台升级数据"
navTitle: "英雄猎台"
shownTitle: "英雄猎台"
description: "英雄当心！英雄猎台会向射程内的空中和地面部队投掷卡牌，留下具有伤害性的纸割伤口，并对英雄造成双倍伤害！"
module: upgrade-home
imgFolder: temp_crafted/0907
wiki: https://clashofclans.fandom.com/wiki/Hero_Hunter
canonical: /upgrade/0907-Hero-Hunter
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hero_Hunter4_hd.png" :imgAlt="$frontmatter.navTitle"
    description="英雄当心！英雄猎台会向射程内的空中和地面部队投掷卡牌，<br>留下具有伤害性的纸割伤口，并对英雄造成双倍伤害！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="3 - 11 级" imgSrc="Hero_Hunter1.png" />
        <UnitImg imgTitle="12 - 20 级" imgSrc="Hero_Hunter2.png" />
        <UnitImg imgTitle="21 - 29 级" imgSrc="Hero_Hunter3.png" />
        <UnitImg imgTitle="30 级" imgSrc="Hero_Hunter4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 英雄猎台是第四期精工防御建筑之一，可在精制台建造与定制。
2. 英雄猎台会优先锁定进入射程的敌方英雄，并对英雄造成 2 倍普攻伤害。
3. 英雄猎台的攻击还附带减速与持续伤害的毒药效果，毒药持续 3 秒。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="攻击偏好" pValue="英雄 (造成 2 倍伤害)" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="攻击距离" pValue="9.5 格" />
    <UnitProperty pKey="攻击速度" pValue="0.6 秒/次" />
    <UnitProperty pKey="毒药持续时间" pValue="3 秒" />
    <UnitProperty pKey="推出时的最高大本等级" pValue="17" />
</UnitProperties>

<SmallTitle>可升级模组 1：提升建筑的生命值</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo1">

| 等级 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| :--: | :----: | :------: | :------: | :------------------: |
|   1  |  1600  |    \     |    \     |                      |
|   2  |  1800  |   40k    |   0,8    |                      |
|   3  |  2150  |   50k    |   0,10   |                      |
|   4  |  2500  |   60k    |   0,11   |                      |
|   5  |  2700  |   70k    |   0,13   |                      |
|   6  |  3150  |   80k    |   0,19   |                      |
|   7  |  3900  |   90k    |   1,22   |                      |
|   8  |  4400  |  100k    |   3,11   |                      |
|   9  |  5200  |  110k    |   6,4    |                      |
|  10  |  6000  |  120k    |    10    |                      |

</UnitTable>

<SmallTitle>可升级模组 2：提升每秒伤害值</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo2">

| 等级 |普通伤害<br>(每秒/每次)|对英雄伤害<br>(每秒/每次)| 升级费用 | 升级时间 |升级后可<br>获得的经验|
| :--: | :--------------------: | :----------------------: | :------: | :------: | :------------------: |
|   1  |       145 / 87         |        290 / 174         |    \     |    \     |                      |
|   2  |       155 / 93         |        310 / 186         |    3M    |   0,4    |                      |
|   3  |       170 / 102        |        340 / 204         |    4M    |   0,6    |                      |
|   4  |       185 / 111        |        370 / 222         |    5M    |   0,8    |                      |
|   5  |       195 / 117        |        390 / 234         |    6M    |   0,10   |                      |
|   6  |       210 / 126        |        420 / 252         |    7M    |   0,16   |                      |
|   7  |       260 / 156        |        520 / 312         |    8M    |   1,16   |                      |
|   8  |       325 / 195        |        650 / 390         |    9M    |   3,2    |                      |
|   9  |       350 / 210        |        700 / 420         |   10M    |   5,6    |                      |
|  10  |       385 / 231        |        770 / 462         |   11M    |    9     |                      |

</UnitTable>

<SmallTitle>可升级模组 3：提升毒药法术等级</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo3">

| 等级 | 附带毒药法术等级 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| :--: | :--------------: | :------: | :------: | :------------------: |
|   1  |        3 级      |    \     |    \     |                      |
|   2  |        4 级      |   3.5M   |   0,6    |                      |
|   3  |        5 级      |   4.5M   |   0,8    |                      |
|   4  |        6 级      |   5.5M   |   0,10   |                      |
|   5  |        7 级      |   6.5M   |   0,12   |                      |
|   6  |        8 级      |   7.5M   |   0,18   |                      |
|   7  |        9 级      |   8.5M   |   1,19   |                      |
|   8  |       10 级      |   10M    |   3,8    |                      |
|   9  |       11 级      |  11.5M   |   5,18   |                      |
|  10  |       12 级      |   13M    |   9,12   |                      |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/08/01">
        <TimelineRow>第四期精工防御上线，推出新精工防御：英雄猎台。</TimelineRow>
    </TimelineItem>
</Timeline>

<script setup>
const tableExtraInfo1 = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Dark_Elixir"
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
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 4,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 5,
        "type": "exp",
        "icon": "Exp"
    }
];
const tableExtraInfo3 = [
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
</script>
