---
title: "部落冲突 coc 小队训练营升级数据"
navTitle: "小队训练营"
shownTitle: "小队训练营"
description: "兵在一起，力量无敌！战士们从远方赶来，在小队训练营中学习协同作战的艺术。毕业的部队紧密相连，根本无法想象独自战斗。"
module: upgrade-home
imgFolder: home_buildings/048d
wiki: https://clashofclans.fandom.com/wiki/Squad_Barracks
canonical: /upgrade/048d-Squad-Barracks
---

- *如想查看训练常规部队的训练营，请访问：[训练营](/upgrade/0481-Barracks)、[暗黑训练营](/upgrade/0482-Dark-Barracks)。*
- *如想查看兵营，请访问：[兵营](/upgrade/0480-Army-Camp)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Squad_Barracks12_hd.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Squad_Barracks1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Squad_Barracks2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Squad_Barracks3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Squad_Barracks4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Squad_Barracks5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Squad_Barracks6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Squad_Barracks7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Squad_Barracks8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Squad_Barracks9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Squad_Barracks10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Squad_Barracks11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Squad_Barracks12.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 7, 8 - 19" />
    <BuildingNumRow title="建筑数量" num="    0,      1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 小队训练营在 8 级大本营解锁。升级小队训练营可解锁新的战斗小队，共有 12 种小队可供解锁。
2. 小队是在战场上以固定阵型协同作战的一组预设部队。在小队训练营中训练小队无需花费资源或时间，兵种即时训练完成。
    - 小队在营地中占用兵营人口空间，小队所需的人口空间比单独训练其构成部队所需的人口总和更少。
3. 小队内部队的等级继承玩家在 [实验室](/upgrade/0483-Laboratory) 中升级对应兵种的等级。因此升级常规部队可间接提升小队内部队的战斗力。
4. 小队**无法**捐赠到部落城堡。
5. 升级小队训练营期间仍可正常训练小队，不会产生任何惩罚。
6. 小队技能：当小队升级至 2 级或更高等级时，可获得小队专属技能。小队升级需要 17 级实验室（对应 19 级大本营）。包含溅射抗性、隐形入场、陷阱感知、护盾开局、协同集火、狂暴共鸣等专属技能。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
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

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 生命值 | 升级费用 | 升级时间 | 升级后可获<br>得的经验 | 所需<br>大本等级 | 解锁的小队 |
| ---- |  ---  |   ---   |   ---   |          ---          |       ---       |    ---    |
|   1  |  500  |  1.7M   |    2    |                       |        8        | 野蛮人弓箭手小队 |
|   2  |  560  |   3M    |    3    |                       |        9        | 巨人法师小队 |
|   3  |  620  |  3.8M   |    5    |                       |       10        | 炸弹人小队 |
|   4  |  680  |   6M    |    6    |                       |       11        | 亡灵小队 |
|   5  |  740  |  7.5M   |    7    |                       |       12        | 气球兵小队 |
|   6  |  800  |   10M   |  7, 12  |                       |       13        | 戈仑石人女巫小队 |
|   7  |  860  |  12.5M  |    8    |                       |       14        | 野猪骑士小队 |
|   8  |  920  |   15M   |  9, 12  |                       |       15        | 掘地矿工小队 |
|   9  |  980  |   16M   |   10    |                       |       16        | 天使小队 |
|  10  | 1040  |   20M   |   11    |                       |       17        | 皮卡泰坦小队 |
|  11  | 1100  |   26M   | 13, 12  |                       |       18        | 飞龙小队 |
|  12  | 1160  |   32M   |   16    |                       |       19        | 飞龙宝宝小队 |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/11/16">
        <TimelineRow>19 本推出，并在 8 本新增小队训练营（共 12 个等级）。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
