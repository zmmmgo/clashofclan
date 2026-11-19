---
title: "部落冲突 coc 尖刺塔升级数据"
navTitle: "尖刺塔"
shownTitle: "尖刺塔"
description: "旋转、尖刺、串成串的部队！攻击这座让人眼花缭乱的防御建筑，它飞速旋转的齿轮就会掀起一场锋利的尖刺风暴。尖刺不仅悄无声息、百发百中，还会根据目标的最大生命值造成伤害。建筑工人称之为“智能尖刺”。"
module: upgrade-home
imgFolder: home_buildings/031a
wiki: https://clashofclans.fandom.com/wiki/Spiky_Tower
canonical: /upgrade/031a-Spiky-Tower
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Spiky_Tower_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Spiky_Tower1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Spiky_Tower2.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 18, 19" />
    <BuildingNumRow title="建筑数量" num="     0,  2" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 尖刺塔在 19 本解锁，共可建造 2 座。和 [巨石碑](/upgrade/0312-Monolith) 与 [复仇之塔](/upgrade/0319-Revenge-Tower) 类似，尖刺塔使用暗黑重油（黑油）进行建造和升级。
2. 尖刺塔平时不会主动寻找敌人攻击，只有在受到敌方伤害时，才会顺时针快速旋转并发射尖刺进行反击。
    - 尖刺的反击伤害取决于**受击目标的最大生命值百分比**，对高生命值单位（如戈仑石人、英雄等）极为致命。
    - 尖刺塔的反击频率没有上限，只要受到攻击就会立即反伤。如果单次攻击直接将尖刺塔摧毁，则不会触发反击。
    - 即使尖刺塔被 [冰冻法术](/upgrade/0104-Freeze-Spell) 冻结，或者攻击者处于隐身状态（如搭配 [灵狐](/upgrade/0288-Spirit-Fox) 的英雄或处于 [隐形法术](/upgrade/0106-Invisibility-Spell) 范围内的部队），尖刺塔依然能够正常锁定并发起反击。
3. 伤害触发机制判定：
    - 间接造成的溅射伤害（如 [超级飞龙](/upgrade/060d-Super-Dragon) 或 [超级巨石投手](/upgrade/060c-Super-Bowler) 的溅射）命中尖刺塔时，会正常触发反击。
    - 连锁伤害（如 [雷电飞龙](/upgrade/000c-Electro-Dragon)、[超级法师](/upgrade/0609-Super-Wizard)）和光环伤害（如 [雷霆泰坦](/upgrade/000f-Electro-Titan)、[雷电战靴](/upgrade/07c5-Electro-Boots)）不会触发尖刺塔的反击。
    - 绝大多数英雄装备的主动技能伤害不会触发反击，仅 [火箭飞矛](/upgrade/07c4-Rocket-Spear) 与 [贵族哑铃](/upgrade/0723-Noble-Iron) 例外（因为它们被视为英雄发出的强化普通攻击）。
4. [狂暴法术塔](/upgrade/0311-Spell-Tower) 等伤害提升效果对尖刺塔无效。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害（反弹伤害）" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="触发射程" pValue="11 格" />
    <UnitProperty pKey="特殊能力" pValue="受击反弹（即使被冻住或被隐身单位攻击也能反伤）" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Dark_Elixir"
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
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 反击伤害 | 生命值 | 升级费用 | 升级时间 | 升级后可<br>获得的经验 | 所需<br>大本等级 |
| ---- |   ---   |   ---  |   ---   |   ----   |         ---          |      ----      |
| 1 | 6% | 5959 | 500k | 15 |  | 19 |
| 2 | 9% | 6363 | 510k | 15, 12 |  | 19 |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/11/16">
        <TimelineRow>19 本推出，并在 19 本新增防御建筑：尖刺塔，共设两个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
