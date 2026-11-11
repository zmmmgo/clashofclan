---
title: "部落冲突 coc 夜世界战争机器王座升级数据"
navTitle: "战争机器王座"
shownTitle: "战争机器王座"
description: "建筑大师的获奖发明，可以粉碎敌方建筑。只有它才能证明谁是这里最好的建筑工人！解锁电磁战锤技能，狠狠地击打敌人！"
module: upgrade-bh
imgFolder: bh_buildings/1287
wiki: https://clashofclans.fandom.com/wiki/Battle_Machine_Altar
canonical: /upgrade/1287-Battle-Machine-Altar
---

- *如想查看战争机器英雄本身的详细属性与升级数据，请访问：[战争机器](/upgrade/10f0-Battle-Machine)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Battle_Machine_Altar.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Battle_Machine_Ruin.png" />
        <UnitImg imgTitle="王座" imgSrc="Battle_Machine_Altar.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 4, 5, 6 - 10" />
    <BuildingNumRow title="合计" num="0, 1, 1" />
    <BuildingNumRow title="第一区域的建筑数量上限" num="\, \, 1" />
    <BuildingNumRow title="第二区域的建筑数量上限" num="\, \, 0" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 战争机器王座是建筑大师基地的三处废墟之一（另外两处为 [宝石矿井](/upgrade/1205-Gem-Mine) 和 [时光钟楼](/upgrade/1283-Clock-Tower)）。在进入夜世界时它就已经以废墟状态存在，达到 5 级建筑大师大本营后可花费 90 万建筑大师圣水将其修缮，修缮完成后即可解锁 [战争机器](/upgrade/10f0-Battle-Machine)。
2. 在修复之前，战争机器王座的废墟类似于障碍物（如家乡村庄中的部落城堡废墟），无法被移动，战斗中进攻方既无法攻击也无需摧毁它即可达到 100% 摧毁率。但与普通障碍物不同的是，废墟周围仍然存在不可下兵区域。修缮完成后，王座可自由移动。
3. 战争机器王座在战斗中仅作为普通建筑承受伤害，不具备防御反击能力，其本身也不能进一步升级（战争机器的等级通过对英雄本身进行升级提升）。
4. 战争机器王座是所有英雄王座中唯一需要建造时间的，修缮耗时 12 小时。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="250" />
    <UnitProperty pKey="解锁单位" pValue="[战争机器](/upgrade/10f0-Battle-Machine)" />
    <UnitProperty pKey="可建造区域" pValue="仅第一区域" />
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

| 修缮花费 | 修缮时间 | 修缮后可获<br>得的经验 | 生命值 | 解锁所需夜世界<br>大本营等级 | 解锁单位 |
|   ---   |   ---   |          ---          |  ---  |             ---            |   ---   |
| 900k | 0, 12 | 207 | 250 | 5 | <a href="/upgrade/10f0-Battle-Machine">战争机器</a> |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，战争机器王座被限制在第一区域，不可移至第二区域。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2017/05/22">
        <TimelineRow>随建筑大师基地上线，夜世界 5 本可修缮战争机器王座以解锁战争机器。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
