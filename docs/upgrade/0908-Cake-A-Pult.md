---
title: "部落冲突 coc 蛋糕投掷器升级数据"
navTitle: "蛋糕投掷器"
shownTitle: "蛋糕投掷器"
description: "请他们吃蛋糕吧！蛋糕投掷器会向空中和地面敌军投掷美味蛋糕，蛋糕爆炸不仅造成范围伤害，还会留下延时引爆的炸弹，造成二次强力破坏！"
module: upgrade-home
imgFolder: temp_crafted/0908
wiki: https://clashofclans.fandom.com/wiki/Cake-A-Pult
canonical: /upgrade/0908-Cake-A-Pult
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Cake-A-Pult4_hd.png" :imgAlt="$frontmatter.navTitle"
    description="请他们吃蛋糕吧！蛋糕投掷器会向空中和地面敌军投掷美味蛋糕，<br>蛋糕爆炸不仅造成范围伤害，还会留下延时引爆的炸弹，造成二次强力破坏！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="3 - 11 级" imgSrc="Cake-A-Pult1.png" />
        <UnitImg imgTitle="12 - 20 级" imgSrc="Cake-A-Pult2.png" />
        <UnitImg imgTitle="21 - 29 级" imgSrc="Cake-A-Pult3.png" />
        <UnitImg imgTitle="30 级" imgSrc="Cake-A-Pult4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 蛋糕投掷器是第四期精工防御建筑之一，可在精制台建造与定制。
2. 蛋糕在命中目标时初次爆炸，造成范围溅射伤害。初次爆炸只对地面或空中部队其一生效。
3. 蛋糕落地后会在战场上留下一枚延时 3 秒引爆的炸弹，炸弹爆炸可同时重创范围内的地面和空中部队。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="区域溅射 (2.5 格半径)" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="攻击距离" pValue="3 - 12 格" />
    <UnitProperty pKey="攻击速度" pValue="3 秒/次" />
    <UnitProperty pKey="炸弹爆炸半径" pValue="2.5 格" />
    <UnitProperty pKey="炸弹引爆延迟" pValue="3 秒" />
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

<SmallTitle>可升级模组 2：提升每次攻击伤害</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo2">

| 等级 | 蛋糕初击伤害 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| :--: | :----------: | :------: | :------: | :------------------: |
|   1  |     195      |    \     |    \     |                      |
|   2  |     210      |   35k    |   0,6    |                      |
|   3  |     225      |   45k    |   0,8    |                      |
|   4  |     246      |   55k    |   0,10   |                      |
|   5  |     264      |   65k    |   0,12   |                      |
|   6  |     285      |   75k    |   0,18   |                      |
|   7  |     315      |   85k    |   1,19   |                      |
|   8  |     333      |   95k    |   3,8    |                      |
|   9  |     354      |  105k    |   5,18   |                      |
|  10  |     375      |  115k    |   9,12   |                      |

</UnitTable>

<SmallTitle>可升级模组 3：提升延时炸弹爆炸伤害</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo3">

| 等级 | 炸弹引爆伤害 | 升级费用 | 升级时间 |升级后可<br>获得的经验|
| :--: | :----------: | :------: | :------: | :------------------: |
|   1  |     400      |    \     |    \     |                      |
|   2  |     450      |   3.5M   |   0,4    |                      |
|   3  |     500      |   4.5M   |   0,6    |                      |
|   4  |     550      |   5.5M   |   0,8    |                      |
|   5  |     600      |   6.5M   |   0,10   |                      |
|   6  |     700      |   7.5M   |   0,16   |                      |
|   7  |     850      |   8.5M   |   1,16   |                      |
|   8  |     950      |   10M    |   3,2    |                      |
|   9  |    1050      |  11.5M   |   5,6    |                      |
|  10  |    1200      |   13M    |    9     |                      |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/08/01">
        <TimelineRow>第四期精工防御上线，推出新精工防御：蛋糕投掷器。</TimelineRow>
    </TimelineItem>
</Timeline>

<script setup>
const tableExtraInfo1 = [
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
const tableExtraInfo2 = [
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
const tableExtraInfo3 = [
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
</script>
