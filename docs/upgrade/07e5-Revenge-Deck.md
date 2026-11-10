---
title: "部落冲突 coc 反击卡组装备升级数据"
navTitle: "反击卡组"
shownTitle: "反击卡组"
description: "反击卡组是飞龙公爵的第二件史诗装备。防守方攻击飞龙公爵时，将受到痛击并遭到公爵的反击，每次反击还会为飞龙公爵恢复生命值。此外，反击卡组还会大幅增加飞龙公爵的生命值上限。"
module: upgrade-home
imgFolder: home_heroes/07e5
wiki: https://clashofclans.fandom.com/wiki/Revenge_Deck
canonical: /upgrade/07e5-Revenge-Deck
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Revenge_Deck_info.png" :imgAlt="$frontmatter.navTitle" description="受到敌方攻击时发射卡牌反击并恢复生命值，并大幅增加生命值上限。" />

<SmallTitle>说明</SmallTitle>

1. 反击卡组是 [飞龙公爵](/upgrade/0205-Dragon-Duke) 的第二件史诗装备，于 2026 年 8 月的酷炫奖章活动（Awesome Medal Event）中开放获取。
2. 装备后，反击卡组可让飞龙公爵对伤害他的防御建筑和敌方单位进行反击。当受到攻击触发反击时，公爵会发射一张卡牌打击攻击者造成伤害，并微量恢复自身生命值。
3. 每个攻击单位对公爵的反击冷却时间独立计算（同一单位最多每 0.8 秒被反击一次）。如果多个敌方单位同时攻击飞龙公爵，每个单位均会独立触发反击。
4. 反击不会对以下情况生效：
    * 陷阱与防御性法术；
    * 无伤害的击退效果（如空气炮）；
    * 超过 25 格以外的攻击（如超远距离的天鹰火炮）；
    * 发动攻击时已被消灭或在攻击时自爆的单位（如小雪怪）；
    * 雷电飞龙的连锁与亡语伤害、烈焰小精灵范围伤害、雷霆泰坦光环等特定伤害。
5. 除被动反击技能外，反击卡组还会大幅增加飞龙公爵的生命值上限。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="装备稀有度" pValue="史诗" />
    <UnitProperty pKey="反击冷却时间" pValue="0.8 秒 (每个目标独立)" />
    <UnitProperty pKey="最大反击距离" pValue="25 格" />
    <UnitProperty pKey="获取方式" pValue="奖章活动兑换 (3100 奖章) 或 商人处购买 (1500 宝石)" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 5,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    },
    {
        "column": 6,
        "type": "cost",
        "icon": "Starry_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每次反击回血 | 反击伤害 | 生命值增加 | 升级费用 | 升级费用 | 升级费用 | 所需<br>铁匠铺等级 | 所需<br>大本等级 |
| :--: | :----------: | :------: | :--------: | :------: | :------: | :------: | :----------------: | :--------------: |
|   1  |      30      |   150    |    900     |    \     |    \     |    \     |         1          |        15        |
|   2  |      30      |   150    |    988     |   120    |    -     |    -     |         1          |        15        |
|   3  |      32      |   155    |   1077     |   240    |    20    |    -     |         1          |        15        |
|   4  |      32      |   155    |   1165     |   400    |    -     |    -     |         1          |        15        |
|   5  |      32      |   155    |   1254     |   600    |    -     |    -     |         1          |        15        |
|   6  |      35      |   160    |   1342     |   840    |   100    |    -     |         1          |        15        |
|   7  |      35      |   160    |   1431     |  1120    |    -     |    -     |         1          |        15        |
|   8  |      35      |   160    |   1519     |  1440    |    -     |    -     |         1          |        15        |
|   9  |      39      |   165    |   1608     |  1800    |   200    |    10    |         1          |        15        |
|  10  |      39      |   165    |   1696     |  1900    |    -     |    -     |         1          |        15        |
|  11  |      39      |   165    |   1785     |  2000    |    -     |    -     |         1          |        15        |
|  12  |      43      |   175    |   1873     |  2100    |   400    |    20    |         1          |        15        |
|  13  |      43      |   175    |   1962     |  2200    |    -     |    -     |         3          |        15        |
|  14  |      43      |   175    |   2050     |  2300    |    -     |    -     |         3          |        15        |
|  15  |      46      |   185    |   2139     |  2400    |   600    |    30    |         3          |        15        |
|  16  |      46      |   185    |   2227     |  2500    |    -     |    -     |         5          |        15        |
|  17  |      46      |   185    |   2316     |  2600    |    -     |    -     |         5          |        15        |
|  18  |      49      |   195    |   2404     |  2700    |   600    |    50    |         5          |        15        |
|  19  |      49      |   195    |   2493     |  2800    |    -     |    -     |         7          |        15        |
|  20  |      49      |   195    |   2581     |  2900    |    -     |    -     |         7          |        15        |
|  21  |      52      |   205    |   2670     |  3000    |   600    |   100    |         7          |        15        |
|  22  |      52      |   205    |   2758     |  3100    |    -     |    -     |         8          |        15        |
|  23  |      52      |   205    |   2847     |  3200    |    -     |    -     |         8          |        15        |
|  24  |      55      |   215    |   2935     |  3300    |   600    |   120    |         8          |        15        |
|  25  |      55      |   215    |   3024     |  3400    |    -     |    -     |         9          |        16        |
|  26  |      55      |   215    |   3112     |  3500    |    -     |    -     |         9          |        16        |
|  27  |      60      |   225    |   3200     |  3600    |   600    |   150    |         9          |        16        |

</UnitTable>

注：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/08/12">
        <TimelineRow>反击卡组在酷炫奖章活动（Awesome Medal Event）中正式上线。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2026/07/14">
        <TimelineRow>正式上线前的数据平衡性调整：</TimelineRow>
        <TimelineRow>• 全等级的每次反击回血下调（1 级由 38 降至 30，27 级由 75 降至 60）。</TimelineRow>
        <TimelineRow>• 3 ~ 27 级的反击伤害下调（27 级由 300 降至 225）。</TimelineRow>
        <TimelineRow>• 移除了该装备原有的常驻普攻伤害加成。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2026/06/16">
        <TimelineRow>反击卡组的数据首次加入游戏文件。</TimelineRow>
    </TimelineItem>
</Timeline>
