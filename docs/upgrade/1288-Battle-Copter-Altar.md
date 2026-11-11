---
title: "部落冲突 coc 夜世界战斗直升机王座升级数据"
navTitle: "战斗直升机王座"
shownTitle: "战斗直升机王座"
description: "快上直升机！建筑大师厌倦了锤城墙，于是他发明了可以飞跃城墙的新一代飞行器。战斗直升机可从远处发射威力巨大的炮弹，也可以使用爆弹冲锋技能靠近目标发动奇袭。"
module: upgrade-bh
imgFolder: bh_buildings/1288
wiki: https://clashofclans.fandom.com/wiki/Battle_Copter_Altar
canonical: /upgrade/1288-Battle-Copter-Altar
---

- *如想查看战斗直升机英雄本身的详细属性与升级数据，请访问：[战斗直升机](/upgrade/10f1-Battle-Copter)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Battle_Copter_Altar.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 7, 8 - 10" />
    <BuildingNumRow title="合计" num="0, 1" />
    <BuildingNumRow title="第一区域的建筑数量上限" num="\, 0" />
    <BuildingNumRow title="第二区域的建筑数量上限" num="\, 1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 达到夜世界 8 本后可花费 250 万建筑大师圣水建造战斗直升机王座，建造不需要时间（瞬间完成），建造完成后即可解锁 15 级的 [战斗直升机](/upgrade/10f1-Battle-Copter)。
2. 战斗直升机王座只能放置在第二区域，不能移动至第一区域。
3. 战斗直升机王座在战斗中仅作为普通建筑承受伤害，不具备防御反击能力，其本身也不能进一步升级（战斗直升机的等级通过对英雄本身进行升级提升）。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="250" />
    <UnitProperty pKey="解锁单位" pValue="[战斗直升机](/upgrade/10f1-Battle-Copter)" />
    <UnitProperty pKey="可建造区域" pValue="仅第二区域" />
</UnitProperties>

<SmallTitle>建筑数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 0,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir2"
    },
    {
        "column": 1,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 2,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 建造花费 | 建造时间 | 建造后可获<br>得的经验 | 生命值 | 解锁所需夜世界<br>大本营等级 | 解锁单位 |
|   ---   |   ---   |          ---          |  ---  |             ---            |   ---   |
| 2.5M | \ | \ | 250 | 8 | <a href="/upgrade/10f1-Battle-Copter">战斗直升机</a> |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界 2.0 重做推出，新增第二区域及新英雄战斗直升机，夜世界 8 本可建造战斗直升机王座。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
