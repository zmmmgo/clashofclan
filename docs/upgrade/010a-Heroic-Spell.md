---
title: "部落冲突 coc 英雄法术升级数据"
navTitle: "英雄法术"
shownTitle: "英雄法术"
description: "法师征服了魔法王国的八个角落，酿造出了世上最勇敢的魔药。英雄法术盛在瓶中，可增强其覆盖范围内部队的韧性、速度并赋予其跳墙能力。"
module: upgrade-home
imgFolder: home_tech/010a
wiki: https://clashofclans.fandom.com/wiki/Heroic_Spell
canonical: /upgrade/010a-Heroic-Spell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Heroic_Spell_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>重要说明</SmallTitle>

1. 英雄法术在 17 本升级 10 级法术工厂后解锁。
2. 部署英雄法术后，法术范围内的所有我方部队都会获得三种增益效果：小幅提升移动速度、获得伤害减免，并且地面部队获得穿过城墙的能力。
    - 英雄和偏好攻击建筑的目标获得的移动速度加成减半（若减半后为小数则四舍五入）。
    - 攻城机器不受移速加成影响。
3. 英雄法术的效果不与相同类型的其他效果叠加（如 [狂暴法术](/upgrade/0102-Rage-Spell)、[急速法术](/upgrade/0181-Haste-Spell)、[冰障法术](/upgrade/0186-Ice-Block-Spell)、[英雄火炬](/upgrade/0786-Heroic-Torch) 等）。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="5 格" />
    <UnitProperty pKey="作用类型" pValue="区域增益（减伤、加速与跳墙）" />
    <UnitProperty pKey="作用目标" pValue="地面和空中部队" />
    <UnitProperty pKey="占用的法术空间" pValue="2" />
    <UnitProperty pKey="所需法术工厂等级" pValue="10" />
    <UnitProperty pKey="所需大本等级" pValue="17" />
    <UnitProperty pKey="法术配置时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="6,6,18000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 持续时间 | 移速提升 | 伤害减免 | 升级花费 | 升级时间 | 所需<br>实验室等级 | 所需<br>大本等级 |
| --- |   ---   |   ---   |   ---   |   ---   |   ---   |        ---        |       ---       |
|  1  | 9.75 秒 |    5    |   34%   |    \    |    \    |        N/A        |       17        |
|  2  | 10.75 秒|    6    |   36%   |   21M   |   13    |        15         |       17        |
|  3  | 11.75 秒|    7    |   38%   |  25.5M  |   14    |        16         |       18        |
|  4  | 12.75 秒|    8    |   40%   |   32M   |  15, 12 |        17         |       19        |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/11/16">
        <TimelineRow>19 本推出，并在 17 本新增英雄法术（共 4 个等级）。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
